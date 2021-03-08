import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import PostScreen from '../screens/Post';
import SearchResultsScreen from '../screens/SearchResults';
import GuestsFilterScreen from '../screens/GuestsFilter';
import HomeScreen from '../screens/Home';
import HomeTabNavigator from './HomeTabNavigator';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeTabNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Search screen"
          component={SearchResultsScreen}
          options={{
            headerTitle: 'Search your destination',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Guests filter screen"
          component={GuestsFilterScreen}
          options={{
            headerTitle: 'Guests screen',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Post results screen"
          component={PostScreen}
          options={{
            headerTitle: 'Post results screen',
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
