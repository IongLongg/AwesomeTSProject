import {useNavigation} from '@react-navigation/core';
import React, {useState} from 'react';
import {FlatList, Pressable, Text, TextInput, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

import search from '../../../assets/data/search';

import {styles} from './styles';
import {fonts} from '../../styles/base';

const SearchResultsScreen: React.FC<any> = () => {
  const navigation = useNavigation();
  const [inputValue, setInputValue] = useState('');

  return (
    <View style={styles.container}>
      <View style={{height: 500}}>
        <GooglePlacesAutocomplete
          placeholder="What are you going ?"
          query={{
            key: 'AIzaSyCoY_cbPSy02NKeX8rmrJOgM7uNaUYx20w',
            language: 'en',
            types: '(cities)',
          }}
          styles={{
            textInput: {
              ...fonts.md,
            },
          }}
          onPress={(data, details = null) => {
            console.log(data, details);
          }}
          suppressDefaultStyles
          renderRow={(item) => (
            <Pressable
              onPress={() => navigation.navigate('Guests filter screen')}>
              <View style={styles.row}>
                <View style={styles.iconContainer}>
                  <Entypo name="location-pin" size={20} />
                </View>
                <Text style={styles.textResult}>{item}</Text>
              </View>
            </Pressable>
          )}
        />
      </View>
    </View>
  );
};

export default SearchResultsScreen;
