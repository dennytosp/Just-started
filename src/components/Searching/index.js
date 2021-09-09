import React from 'react';
import {View, TextInput} from 'react-native';
import {COLORS} from '../../constants';
import styles from './styles';

const Searching = ({placeText, placeHolder, style}) => {
  return (
    <View style={{marginBottom: 16, paddingHorizontal: 12,...style}}>
      <TextInput
        style={styles.wrapperSearch}
        placeholder={placeHolder}
        placeholderTextColor={COLORS.gray03}
      />
    </View>
  );
};

export default Searching;
