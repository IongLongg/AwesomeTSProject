import {StyleSheet} from 'react-native';
import {colors, container, fonts} from '../../styles/base';

export const styles = StyleSheet.create({
  container: {
    ...container,
    paddingHorizontal: 30,
    paddingVertical: 30,
    justifyContent: 'space-between',
  },
  headerContainer: {
    display: 'flex',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
    paddingBottom: 20,
    marginBottom: 5,
  },
  groupContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    ...fonts.md,
    fontWeight: 'bold',
  },
  date: {
    ...fonts.sm,
    color: 'grey',
  },
  row: {
    paddingVertical: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
  },
  circleContainer: {
    borderRadius: 35,
    borderWidth: 2,
    borderColor: 'grey',
    width: 35,
    height: 35,
    alignItems: 'center',
    marginHorizontal: 15,
  },
  searchButton: {
    alignItems: 'center',
    backgroundColor: colors.pinky,
    paddingVertical: 5,
    borderRadius: 10,
  },
});
