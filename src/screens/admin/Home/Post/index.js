import React from 'react';
import {View, SafeAreaView, ScrollView, TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {Heading, OnpressPrimary} from '../../../../components';
import styles from './styles';

const Post = () => {
  const navigation = useNavigation();

  const _renderHeader = () => {
    return (
      <View>
        <Heading
          headerStyle={styles.headerColor}
          isPrimary={true}
          leftText="Back"
          centerText="Post"
          rightText="Send"
          handleOnPressRight={() => {}}
          handleOnPressLeft={() => navigation.goBack()}
        />
      </View>
    );
  };

  const _renderForm = () => {
    return (
      <View>
        <TextInput placeholder="Composer your message here..." />
        <OnpressPrimary textButton="Builing" />
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
        <_renderForm />
      </SafeAreaView>
    </ScrollView>
  );
};

export default Post;
