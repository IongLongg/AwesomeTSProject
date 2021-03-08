import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import PostScreen from '../screens/Post';
import {colors} from '../styles/base';

const Tab = createMaterialTopTabNavigator();

const SearchResultsTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: colors.pinky,
        indicatorStyle: {
          backgroundColor: colors.pinky,
        },
      }}>
      <Tab.Screen name="List view results" component={PostScreen} />
      <Tab.Screen name="Map view results" component={PostScreen} />
    </Tab.Navigator>
  );
};

export default SearchResultsTabNavigator;
