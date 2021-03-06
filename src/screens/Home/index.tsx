import React from 'react';
import {ImageBackground, Pressable, Text} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';

import styles from './styles';

const HomeScreen: React.FC = (): React.ReactElement => {
  return (
    // <View style={styles.container}>
    <ImageBackground
      source={require('../../../assets/images/wallpaper.jpg')}
      style={styles.bgImage}>
      <Pressable style={styles.searchButton}>
        <Fontisto name="search" size={20} style={{margin: 5}} color="#f15454" />
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
