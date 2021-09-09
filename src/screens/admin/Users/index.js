import React from 'react';
import {View, Text, Pressable, ToastAndroid} from 'react-native';
import styles from './styles';
import Header from '../../../components/Header';

const Users = () => {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Header title="List Users" />
      <Pressable onPress={() => {}}>
        <Text>Users</Text>
      </Pressable>
    </View>
  );
};

export default Users;
