import {useNavigation} from '@react-navigation/core';
import React, {useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import {fonts} from '../../styles/base';
import {styles} from './styles';

const GuestsFilterScreen: React.FC<any> = () => {
  const navigation = useNavigation();
  const [children, setChildren] = useState(0);
  const [adults, setAdults] = useState(0);
  const [infants, setInfants] = useState(0);

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Tenerife, Spain</Text>
          <Text style={styles.date}>11-14 Dec</Text>
        </View>
        <View style={styles.row}>
          <View>
            <Text style={styles.title}>Adults</Text>
            <Text style={styles.date}>Ages 13 or above</Text>
          </View>
          <View style={styles.groupContainer}>
            <Pressable
              onPress={() => setAdults(Math.max(adults - 1, 0))}
              style={styles.circleContainer}>
              <Text style={{...fonts.md}}>-</Text>
            </Pressable>
            <Text style={{...fonts.md}}>{adults}</Text>
            <Pressable
              onPress={() => setAdults(adults + 1)}
              style={styles.circleContainer}>
              <Text style={{...fonts.md}}>+</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.row}>
          <View>
            <Text style={styles.title}>Children</Text>
            <Text style={styles.date}>Ages 2-12</Text>
          </View>
          <View style={styles.groupContainer}>
            <Pressable
              onPress={() => setChildren(Math.max(children - 1, 0))}
              style={styles.circleContainer}>
              <Text style={{...fonts.md}}>-</Text>
            </Pressable>
            <Text style={{...fonts.md}}>{children}</Text>
            <Pressable
              onPress={() => setChildren(children + 1)}
              style={styles.circleContainer}>
              <Text style={{...fonts.md}}>+</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.row}>
          <View>
            <Text style={styles.title}>Infants</Text>
            <Text style={styles.date}>Under 2</Text>
          </View>
          <View style={styles.groupContainer}>
            <Pressable
              onPress={() => setInfants(Math.max(infants - 1, 0))}
              style={styles.circleContainer}>
              <Text style={{...fonts.md}}>-</Text>
            </Pressable>
            <Text style={{...fonts.md}}>{infants}</Text>
            <Pressable
              onPress={() => setInfants(infants + 1)}
              style={styles.circleContainer}>
              <Text style={{...fonts.md}}>+</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <Pressable
        onPress={() =>
          navigation.navigate('Home', {
            screen: 'Explore',
            params: {
              screen: 'Post results',
            },
          })
        }
        style={styles.searchButton}>
        <Text style={{...fonts.md, color: 'white'}}>Search</Text>
      </Pressable>
    </View>
  );
};

export default GuestsFilterScreen;
