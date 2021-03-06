import {fonts} from '../../styles/base';

const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
    resizeMode: 'cover',
    flexDirection: 'column',
  },
  title: {
    color: 'white',
    fontSize: 100,
    fontWeight: '700',
    marginLeft: 30,
    width: '70%',
  },
  explorBbutton: {
    marginTop: 20,
    marginLeft: 30,
    width: 260,
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  exploreText: {
    ...fonts.md,
    fontWeight: '700',
  },
  searchButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 100,
    paddingVertical: 20,
    marginHorizontal: 30,
    backgroundColor: 'white',
    borderRadius: 50,
  },
  searchText: {
    ...fonts.md,
    fontWeight: '700',
  },
});

export default styles;
