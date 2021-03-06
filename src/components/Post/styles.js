import {fonts} from '../../styles/base';

const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  post: {
    backgroundColor: 'white',
    paddingHorizontal: 30,
    paddingVertical: 10,
    fontSize: 30,
  },
  image: {
    width: '100%',
    aspectRatio: 3 / 2,
    borderRadius: 15,
    marginBottom: 10,
  },
  bedText: {
    ...fonts.sm,
    color: '#939393',
  },
  title: {
    ...fonts.md,
    marginVertical: 5,
    lineHeight: 30,
  },
  oldPrice: {
    textDecorationLine: 'line-through',
    fontWeight: 'bold',
    color: '#666',
  },
  newPrice: {
    fontWeight: 'bold',
  },
  totalPrice: {
    ...fonts.sm,
    color: '#939393',
    textDecorationLine: 'underline',
  },
});

export default styles;
