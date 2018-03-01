import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider} from 'react-redux';
import store from './src/store';
import AppNavigation from './src/navigation';

export default class App extends Component<Props> {
  render() {
    return (
      <PaperProvider>
        <StoreProvider store={store}>
          <AppNavigation />
        </StoreProvider>
      </PaperProvider>
    );
  }
}

