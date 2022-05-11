/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import RootNavigator from './src/appNavigation/RootNavigator';
import { createTable } from './src/utils/dataBase';


const App = () => {

  useEffect(()=>{
    createTable()
  },[])

  return (
    <RootNavigator />
  );
};

export default App;
