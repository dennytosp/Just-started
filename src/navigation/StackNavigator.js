import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {admin, authen} from './../screens';
import {StatusBar} from 'react-native';

import {StackStep} from './';
const Stack = createNativeStackNavigator();

const MainStackNavigator = ({initialRoute = 'Splash'}) => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  const [user, setUser] = useState();
  const [isCheck, setIsCheck] = useState();

  let routeName;

  useEffect(() => {
    let isCancelled = false;
    const runAsync = async () => {
      try {
        if (!isCancelled) {
          AsyncStorage.getItem('Onboardingfirst').then(value => {
            if (value == null) {
              AsyncStorage.setItem('Onboardingfirst', 'true');
              setIsFirstLaunch(true);
            } else {
              setIsFirstLaunch(false);
            }
          });
        }
      } catch (e) {
        if (!isCancelled) {
          throw e;
        }
      }
    };

    runAsync();

    return () => {
      isCancelled = true;
    };
  }, []);

  if (isFirstLaunch === null) {
    return null;
  } else if (isFirstLaunch == true) {
    routeName = 'Onboard';
  } else {
    routeName = 'Admin';
  }

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        translucent={true}
        backgroundColor="transparent"
      />
      <Stack.Navigator
        initialRouteName={routeName}
        screenOptions={{headerShown: false}}>
        <>
          <Stack.Screen name="Onboard" component={authen.Onboard} />

          <Stack.Screen name="Admin" component={StackStep.AdminTab} />
          <Stack.Screen name="Linking" component={admin.Linking} />
          <Stack.Screen name="Content" component={admin.Content} />
          <Stack.Screen name="Market" component={admin.Market} />
          <Stack.Screen name="Deti" component={admin.Deti} />
          <Stack.Screen name="AdminLogin" component={admin.AdminLogin} />
          <Stack.Screen name="AdminRegister" component={admin.AdminRegister} />
          <Stack.Screen name="Post" component={admin.Post} />
        </>
      </Stack.Navigator>
    </>
  );
};
export default MainStackNavigator;
