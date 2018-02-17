import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../../actions';
import { generalStyle } from '../../lib/styles';
import ImageHeader from '../Common/ImageHeader';
import { 
  Text,
  View,
  Button,
  StyleSheet,
  TextInput
} from 'react-native';

class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({isSaving: false});
  }

  updateClientDetail(name, property) {
    this.props.updateClientDetail({[property]: name});
  }

  saveClientDetail() {
    this.setState({isSaving: true});
    // uncomment when api is ready
    // this.props.saveClientDetail(this.props.clientDetail).then(() => {
    //   this.setState({isSaving: false});
    //   this.props.goToClient();
    // });

    this.props.saveClientDetail(this.props.clientDetail);
    this.setState({isSaving: false});
    this.props.goToClient();
  }

  render() {
    return (
      <View style={generalStyle.homeContainer}>
        <ImageHeader/>
        <View style={styles.clientDetailContainer}>
          <View style={styles.detailRow}>
            <Text style={styles.colTitle}>Name</Text>
            <TextInput 
              onChangeText={(inputText) => this.updateClientDetail(inputText, 'name')}
              value={this.props.clientDetail.name}
              placeholder="Client Name"
              style={styles.colData}>
            </TextInput>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.colTitle}>Address</Text>
            <TextInput 
              onChangeText={(inputText) => this.updateClientDetail(inputText, 'address')}
              value={this.props.clientDetail.address}
              placeholder="Client Address"
              style={styles.colData}>
            </TextInput>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.colTitle}>Telephone #</Text>
            <TextInput 
              onChangeText={(inputText) => this.updateClientDetail(inputText, 'telNum')}
              value={this.props.clientDetail.telNum}
              placeholder="Client Telephone #"
              style={styles.colData}>
            </TextInput>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.colTitle}>.</Text>
            <View style={styles.colData}>
              <Button
                title={this.state.isSaving ? 'Saving Details...' : 'Save Details'}
                onPress={()=> this.saveClientDetail()}
                disabled={this.state.isSaving}
              />
            </View>
          </View>
        </View>
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
  clientDetailContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#fff',
  },
  detailRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
  },
  colTitle: {
    flex: 0.3,
    fontWeight: 'bold',
  },
  colData: {
    flex: 0.7,
  },
})

Detail.navigationOptions = {
  title: 'Client Details',
};

const mapDispatchToProps = (dispatch) => bindActionCreators(ActionCreators, dispatch);

const mapStateToProps = (state) => ({
  clientDetail: state.clientDetail,
});

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
