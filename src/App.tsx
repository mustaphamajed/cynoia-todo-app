import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppNavigator from './navigation/appNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {QueryClientProvider} from '@tanstack/react-query';
import queryClient from './queryClient';
import {Provider} from 'react-redux';
import {store} from './redux/store';
const App = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <GestureHandlerRootView style={styles.container}>
          <AppNavigator />
        </GestureHandlerRootView>
      </QueryClientProvider>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
