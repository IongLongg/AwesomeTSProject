import {StyleSheet} from 'react-native';
import {fonts} from '../../styles/base';

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
