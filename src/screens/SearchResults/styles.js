import {StyleSheet} from 'react-native';
import {container, fonts} from '../../styles/base';

export const styles = StyleSheet.create({
  container: {
    ...container,
    padding: 20,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'lightgray',
    paddingVertical: 20,
  },
  iconContainer: {
    padding: 10,
    borderRadius: 5,
    marginRight: 15,
    backgroundColor: '#ddd',
  },
  textInput: {
    ...fonts.sm,
  },
  textResult: {
    ...fonts.sm,
  },
});
