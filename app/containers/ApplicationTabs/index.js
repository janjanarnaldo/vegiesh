import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators } from '../../actions';
import Clients from '../Clients';
import ClientsDetails from '../Clients/Detail';

class ApplicationTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { index: 0 };
  }

  render() {
    return (
      <View>
        <Text>ApplicationTabs</Text>
      </View>
    );
  }
}

export default ApplicationTabs;
