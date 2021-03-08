import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {ImageBackground, Pressable, Text} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {colors} from '../../styles/base';

import styles from './styles';

const HomeScreen: React.FC = (): React.ReactElement => {
  const navigation = useNavigation();

  return (
    // <View style={styles.container}>
    <ImageBackground
      source={require('../../../assets/images/wallpaper.jpg')}
      style={styles.bgImage}>
      <Pressable
        style={styles.searchButton}
        onPress={() => navigation.navigate('Search screen')}>
        <Fontisto
          name="search"
          size={20}
          style={{margin: 5}}
          color={colors.pinky}
        />
        <Text style={styles.searchText}>What are you going ?</Text>
      </Pressable>
      <Text style={styles.title}>Go Near</Text>
      <Pressable style={styles.explorBbutton}>
        <Text style={styles.exploreText}>Explore nearby stays</Text>
      </Pressable>
    </ImageBackground>
    // </View>
  );
};

export default HomeScreen;
