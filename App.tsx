import 'react-native-gesture-handler';
import React from 'react';
import type {PropsWithChildren} from 'react';
import{GoogleSignin} from '@react-native-google-signin/google-signin';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Navigation from './src/navigation/Navigation';

GoogleSignin.configure({
  webClientId: '826479428278-mdkagesgb39rmi2v5ndp8jokaiuue50g.apps.googleusercontent.com',
  forceCodeForRefreshToken: true,
  offlineAccess: false,


});

const App = () =>{
  return <Navigation/>
}

export default App;
