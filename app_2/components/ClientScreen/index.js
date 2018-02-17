import React from 'react';
import ImageHeader from '../Common/ImageHeader';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../../actions';
import TimerMixin from 'react-timer-mixin';
import { generalStyle, colors } from '../../lib/styles';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableHighlight,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';

class ClientScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({isFetching: false, textError: false});
  }

  setSearchText(searchText) {
    this.props.setSearchText(searchText);
  }

  searchClients() {
    if (!this.props.searchText) {
      this.setState({textError: true});
      return;
    }
    this.setState({isFetching: true});
    this.props.fetchClients(this.props.searchText);
    this.setState({isFetching: false});
    // uncomment when api is ready
    // this.props.fetchClients(this.props.searchText).then(() => {
    //   this.setState({isFetching: false});
    // });
  }

  componentDidMount() {
    if (this.props.searchText) {
      this.searchClients();
    }
  }

  clientDetails(id) {
    this.props.clientDetails(id);
    this.props.goToClientDetails();
  }

  clients() {
    return Object.keys(this.props.searchedClients).map(key => this.props.searchedClients[key]);
  }

  render() {
    return (
      <View style={generalStyle.homeContainer}>
        <ImageHeader/>
        <View style={styles.quickSearch}>
          <TextInput 
            onChangeText={(searchText) => this.setSearchText(searchText)}
            placeholder="Quick Search"
            style={styles.quickSearchText}
            placeholderTextColor={this.state.textError ? 'red' : 'gray'}
            onFocus={() => this.setState({textError: false})}
            value={this.props.searchText}
          >
          </TextInput>
          <TouchableHighlight 
            onPress={() => this.searchClients()}
            style={styles.quickSearchSubmit}
            underlayColor='white'>
            <Text>Submit</Text>
          </TouchableHighlight>
        </View>
        <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
          <View style={styles.scrollContent}>
            {!this.state.isFetching && this.clients().map((client, key) => {
              return (
                <TouchableWithoutFeedback key={key} onPressIn={() => this.clientDetails(client.id)}>
                  <Animated.View style={styles.client} >
                    <View style={{flex: 0.5}}>
                      <Text style={styles.clientTitle}>Name</Text>
                      <Text style={styles.clientName}>{client.name ? client.name : `No Name`}</Text>
                    </View>
                    <View style={{flex: 0.5}}>
                      <Text style={styles.clientTitle}>Current Balance</Text>
                      <Text style={styles.clientName}>Php {client.balance ? client.balance : `0.00`}</Text>
                    </View>
                  </Animated.View>
                </TouchableWithoutFeedback>
              )
            })}
            {this.state.isFetching ? <View style={styles.loader}>
              <ActivityIndicator size="large" color="#00ff00" />
            </View> : null}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  homeContainer: {
    padding: 10,
    paddingTop: 10,
    flex: 1,
  },
  quickSearch: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  quickSearchText: {
    flex: 0.7,
  },
  quickSearchSubmit: {
    flex: 0.3,
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  scrollContent: {
    flex:1,
    flexDirection: 'column',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
  },
  client: {
    borderRadius: 50,
    marginBottom: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    flex: 1,
    flexDirection: 'row',
    elevation: 7,
    backgroundColor: colors.vgBlue,
    opacity: 0.5
  },
  clientTitle: {
    flex: 1,
    color: '#000',
    fontWeight: 'bold',
  },
  clientName: {
    flex: 1,
    color: '#000',
  },
  clientBalance: {
    flex: 1,
    color: '#FFD700',
    fontWeight: 'bold',
  }
});

ClientScreen.navigationOptions = {
  title: 'Clients',
};

const mapDispatchToProps = (dispatch) => bindActionCreators(ActionCreators, dispatch);

const mapStateToProps = (state) => ({
  searchText: state.searchText,
  setSearchText: state.setSearchText,
  searchedClients: state.searchedClients,
  fetchClients: state.fetchClients,
  goToClientDetails: state.goToClientDetails,
});

export default connect(mapStateToProps, mapDispatchToProps)(ClientScreen);
