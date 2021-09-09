import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../../../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 12,
  },
  headerColor: {},
  showWrapper: {},
  txtShow: {
    color: COLORS.lightGreen,
    fontSize: 14,
    fontWeight: 'bold',
  },
  wrapperFooter: {
    alignItems: 'center',
  },
  wrapperButton: {
    backgroundColor: COLORS.lightGreen,
    width: '100%',
    justifyContent: 'center',
    borderRadius: 60,
    alignItems: 'center',
    paddingVertical: SIZES.base * 1.5,
    marginVertical: SIZES.base,
  },
  txtButton: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  txtForgot: {
    color: COLORS.lightGreen,
    fontWeight: 'bold',
    fontSize: 15,
  },
  wrapperCheck: {
    flexDirection: 'row',
    marginLeft: -20,
    // marginRight: 24,
    alignItems: 'center',
  },
});
export default styles;
