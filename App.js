import React, {Component} from 'react';
import Router from './src/appnavigator';
import {configureStore} from './src/store/configureStore';
import axios from 'axios';
import { Provider } from 'react-redux';

export const store = configureStore(axios, {});

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <Router />
        </Provider>
    );
  }
}

export default App;
