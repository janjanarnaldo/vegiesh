import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import LoginScreen from './Auth/LoginScreen';
import MainScreen from './MainScreen';
import ProfileScreen from './ProfileScreen';
// import ClientsScreen from './ClientsScreen';
// import DeliveriesScreen from './DeliveriesScreen';

export const AppNavigator = StackNavigator({
  Login: { screen: LoginScreen },
  Main: { screen: MainScreen },
  Profile: { screen: ProfileScreen },
  // Clients: { screen: ClientsScreen },
  // Deliveries: { screen: DeliveriesScreen },
});

const AppContainer = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppContainer);
