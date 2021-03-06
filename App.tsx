/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {View, StatusBar, StyleSheet} from 'react-native';
import 'react-native-gesture-handler';

import posts from './assets/data/feed';
import Router from './src/navigation/Router';
import GuestsFilterScreen from './src/screens/GuestsFilter';

import HomeScreen from './src/screens/Home';
import PostScreen from './src/screens/Post';
import SearchResultsScreen from './src/screens/SearchResults';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <Router />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
