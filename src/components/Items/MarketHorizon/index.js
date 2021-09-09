import React from 'react';
import {Image, View, Pressable, Text} from 'react-native';
import styles from './styles';

const MarketHorizon = ({
  imageMarket,
  nameText,
  priceText,
  handleOnPressImage,
  style,
}) => {
  return (
    <View style={{paddingHorizontal: 12, ...style}}>
      <Pressable onPress={handleOnPressImage}>
        <Image style={styles.imageWrapper} source={imageMarket} />
      </Pressable>
      <Text style={styles.txtNameProduct}>{nameText}</Text>
      <Text style={styles.txtPriceProduct}>{priceText}</Text>
    </View>
  );
};

export default MarketHorizon;
