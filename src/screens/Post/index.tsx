import React from 'react';
import {ScrollView, Text} from 'react-native';
import Post from '../../components/Post';
import styles from './styles';

const PostScreen: React.FC<any> = ({posts}) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.reviewText}>
        Review COVID--19 travel restrictions before you book.{' '}
        <Text style={styles.linkText}>Learn more</Text>
      </Text>
      {posts.map((post: any) => (
        <Post key={post.id} post={post} />
      ))}
    </ScrollView>
  );
};

export default PostScreen;
