import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';

import styles from './styles';

const Post: React.FC<any> = ({post}) => {
  return (
    <Pressable
      style={({pressed}) => [
        styles.post,
        {
          backgroundColor: pressed ? '#e5e8ea' : '#fff',
        },
      ]}>
      <Image
        source={{
          uri: post.image,
        }}
        style={styles.image}
      />
      <Text
        style={
          styles.bedText
        }>{`${post.bed} bed * ${post.bedroom} bedroom`}</Text>
      <Text style={styles.title} numberOfLines={2}>
        {post.description}
      </Text>
      <Text style={styles.title}>
        <Text style={styles.oldPrice}>${post.oldPrice}</Text>
        {` `}
        <Text style={styles.newPrice}>${post.newPrice}</Text> / night
      </Text>
      <Text style={styles.totalPrice}>${post.totalPrice} total</Text>
    </Pressable>
  );
};

export default Post;
