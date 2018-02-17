import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, compose} from 'redux';
import AppWithNavigationState from './app_2/navigators/AppNavigator';
import AppReducer from './app_2/reducers';


// middleware that logs actions
const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ });

function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware, // for dispatching
      loggerMiddleware,
    )
  );
  return createStore(AppReducer, initialState, enhancer);
}

const store = configureStore({});

const App = () => (
  <Provider store={store}>
    <AppWithNavigationState />
  </Provider>
)

AppRegistry.registerComponent('vegiesh', () => App);

export default App;
