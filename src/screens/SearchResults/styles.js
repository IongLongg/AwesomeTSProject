import {StyleSheet} from 'react-native';
import {fonts} from '../../styles/base';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
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
    backgroundColor: '#ddd',
    borderRadius: 5,
    marginRight: 15,
  },
  textInput: {
    ...fonts.sm,
  },
  textResult: {
    ...fonts.sm,
  },
});
