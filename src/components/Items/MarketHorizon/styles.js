import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants';

export const styles = StyleSheet.create({
  imageWrapper: {
    backgroundColor: COLORS.gray01,
    height: 120,
    width: 120,
    borderRadius: 10,
    marginBottom: 8,
  },
  txtNameProduct: {
    fontSize: 16,
  },
  txtPriceProduct: {
    fontWeight: '700',
    fontSize: 16,
  },
});
export default styles;
