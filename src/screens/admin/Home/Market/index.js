import React from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  FlatList,
  Text,
  Image,
} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/core';
import {Heading, MarketHorizon, Searching} from '../../../../components';
import {DATA} from './../../../../assets';

const Market = () => {
  const navigation = useNavigation();

  const _renderHeader = () => {
    return (
      <View>
        <Heading
          headerStyle={styles.headerColor}
          isPrimary={true}
          leftText="Back"
          centerText="Market"
          rightText="Post"
          handleOnPressRight={() => navigation.navigate('Post')}
          handleOnPressLeft={() => navigation.goBack()}
        />
      </View>
    );
  };

  const _renderSearch = () => {
    return (
      <View>
        <Searching placeHolder="Search inside product..." />
      </View>
    );
  };

  const _renderProductsHorizon = ({item, check}) => {
    return (
      <View>
        <MarketHorizon
          handleOnPressImage={() => {}}
          // imageMarket={item.image}
          nameText={item.name}
          priceText={item.price}
        />
      </View>
    );
  };

  const _renderFlatProductsHorizon = () => {
    return (
      <View style={{marginBottom: 16}}>
        <FlatList
          style={{}}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={DATA.DATA_PRODUCTS}
          renderItem={_renderProductsHorizon}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    );
  };

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      nestedScrollEnabled={true}>
      <SafeAreaView style={styles.wrapperContainer}>
        <_renderHeader />
      </SafeAreaView>

      <View>
        <_renderSearch />
        <View style={styles.paddingTitle}>
          <Text style={styles.txtTitleMarket}>Hot Deals</Text>
        </View>
        <_renderFlatProductsHorizon />

        <View style={styles.paddingTitle}>
          <Text style={styles.txtTitleMarket}>Trending</Text>
        </View>
        <_renderFlatProductsHorizon />

        <View style={styles.paddingTitle}>
          <Text style={styles.txtTitleMarket}>Deals</Text>
        </View>
        <_renderFlatProductsHorizon />
      </View>
    </ScrollView>
  );
};

export default Market;
