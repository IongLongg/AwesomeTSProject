import {StyleSheet} from 'react-native';
import {container, fonts} from '../../styles/base';

const styles = StyleSheet.create({
  container: {
    ...container,
    flexDirection: 'column',
  },
  reviewText: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    ...fonts.sm,
  },
  linkText: {
    textDecorationLine: 'underline',
  },
});

export default styles;
