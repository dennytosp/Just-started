import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../constants';
import {getSize} from '../../../../utils/reponsive';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  wrapperContainer: {},
  headerColor: {
    paddingHorizontal: 12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  txtTitleMarket: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 16,
  },
  paddingTitle: {
    paddingHorizontal: 12,
  }
});
export default styles;
