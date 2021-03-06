import React, {useState} from 'react';
import {FlatList, Text, TextInput, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

import search from '../../../assets/data/search';

import {styles} from './styles';

const SearchResultsScreen: React.FC<any> = ({props}) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <View style={styles.container}>
      {/* arrow left */}
      <TextInput
        placeholder="What are you going?"
        style={styles.textInput}
        value={inputValue}
        onChangeText={setInputValue}
      />
      <FlatList
        data={search}
        renderItem={({item}) => (
          <View style={styles.row}>
            <View style={styles.iconContainer}>
              <Entypo name="location-pin" size={20} />
            </View>
            <Text style={styles.textResult}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default SearchResultsScreen;
