import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../screens/Home';
import PostScreen from '../screens/Post';
import SearchResultsScreen from '../screens/SearchResults';
import SearchResultsTabNavigator from './SearchResultsTabNavigator';

const Stack = createStackNavigator();

const ExploreNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Post results"
        component={SearchResultsTabNavigator}
        options={{
          headerTitle: 'Search your destination',
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
};

export default ExploreNavigator;
