import 'react-native-gesture-handler';
import React from 'react';
import{GoogleSignin} from '@react-native-google-signin/google-signin';

import Navigation from './src/navigation/Navigation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Platform, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { persistor, store } from './src/redux/store';

GoogleSignin.configure({
  webClientId: '826479428278-mdkagesgb39rmi2v5ndp8jokaiuue50g.apps.googleusercontent.com',
  forceCodeForRefreshToken: true,
  offlineAccess: false,


});

const App = () =>{
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <StatusBar
        translucent={Platform.OS === 'ios'}
        backgroundColor="transparent"
      />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Navigation />
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>
  )
}

export default App;



