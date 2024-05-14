import {DefaultTheme} from '@react-navigation/native';
import {StyleSheet} from 'react-native';

const AppTheme = {
  ...DefaultTheme,
  Colors: {
    ...DefaultTheme.colors,
    primary: 'EF506B',
  },
};
export default styles = StyleSheet.create({
  block: {
    flex: 1,
    flexDirection: 'row',
    margin: 3,
  },
  img: {
    flex: 1,
    marginLeft: 15,
    width: 100,
  },
  content: {
    flex: 2,
    width: '100%',
  },
  tiny: {
    height: 110,
    width: 110,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  discountText: {
    color: 'green',
    fontWeight: 'bold',
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    fontSize: 5,
  },
  button: {
    backgroundColor: AppTheme.colors.primary,
    borderRadius: 10,
    width: '30%',
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#FFF',
    textAlign: 'center',
  },

  buttonText: {
    fontSize: 11,
    fontWeight: 'bold',
    color: 'white',
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
