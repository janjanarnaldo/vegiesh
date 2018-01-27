import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../../actions';
import TimerMixin from 'react-timer-mixin';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableHighlight,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native';

class ClientScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({inputText: '', isFetching: false});
  }

  searchClients() {
    // this.setState({isFetching: true});

    // this.props.fetchClients(this.state.inputText);
    // this.setState({isFetching: false});
    // uncomment when api is ready
    // this.props.fetchClients(this.state.inputText).then(() => {
    //   this.setState({isFetching: false});
    // });
  }

  clientDetails() {
    
  }

  clients() {
    return Object.keys(this.props.searchedClients).map(key => this.props.searchedClients[key]);
  }

  render() {
    return (
      <View style={styles.homeContainer}>
        <Image source={require('../../images/broccoli.png')} style={styles.logo} />
        <View style={styles.quickSearch}>
          <TextInput 
            onChangeText={(inputText) => this.setState({inputText})}
            placeholder="Quick Search"
            style={styles.quickSearchText}>
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
                <View style={styles.client} key={key} onPress={this.clientDetails}>
                  <View style={{flex: 0.5}}>
                    <Text style={styles.clientTitle}>Name</Text>
                    <Text style={styles.clientName}>{client.name ? client.name : `No Name`}</Text>
                  </View>
                  <View style={{flex: 0.5}}>
                    <Text style={styles.clientTitle}>Current Balance</Text>
                    <Text style={styles.clientName}>Php {client.balance ? client.balance : `0.00`}</Text>
                  </View>
                </View>
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
    paddingTop: 0,
    flex: 1,
  },
  logo: {
    alignSelf: 'center',
    width: 50,
    height: 50,
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
    // backgroundColor: '#fff',
    marginBottom: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    flex: 1,
    flexDirection: 'row',
    elevation: 7,
    backgroundColor: 'rgb(0, 157, 220)',
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
  title: 'Home Screen',
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    searchedClients: state.searchedClients,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ClientScreen);
