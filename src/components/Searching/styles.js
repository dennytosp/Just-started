import {StyleSheet} from 'react-native';
import {getSize} from '../../utils/reponsive';
import {COLORS} from '../../constants';

export const styles = StyleSheet.create({
  wrapperSearch: {
    backgroundColor: COLORS.gray01,
    borderRadius: 100,
    height: getSize.v(50),
    borderColor: COLORS.white,
    paddingHorizontal: 20,
    fontSize: 15,
    color: COLORS.botClick,
    borderColor: COLORS.gray02,
    borderWidth: 0.5,
  },
});
export default styles;
