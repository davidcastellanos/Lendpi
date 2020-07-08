/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
  
import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme
} from '@react-navigation/native';

import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme
} from 'react-native-paper';

import { AuthContext } from './components/context';
import RootStackScreen from './screens/RootStackScreen';
import AsyncStorage from '@react-native-community/async-storage';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabScreen from './screens/MainTabScreen';
import BookmarkScreen from './screens/BookmarkScreen';
import SolicitudScreen from './screens/SolicitudScreen';
import EstadoScreen from './screens/EstadoScreen';
import HomeScreen from './screens/HomeScreen';
import { DrawerContent } from './screens/DrawerContent';

import { GoogleSignin } from '@react-native-community/google-signin';


const Drawer = createDrawerNavigator();

const App = () => {
  // const [isLoading, setIsLoading] = React.useState(true);
  // const [userToken, setUserToken] = React.useState(null);

  const [isDarkTheme, setIsDarkTheme] = React.useState(false);
  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: '#ffffff',
      text: '#333333'
    }
  }
  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: '#333333',
      text: '#ffffff'
    }
  }
  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  const initialLoginState = {
    isLoading: true,
    userName: null,
    lastName: null,
    userEmail: null,
    userPhoto: null,
    userId: null,
  };

  const loginReducer = (prevState, action) => {
    switch( action.type ) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          isLoading: false,
          userName: action.firstName,
          lastName: action.lastName,
          userEmail: action.userEmail,
          userPhoto: action.userPhoto,
          userId: action.userId,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          isLoading: false,
          userName: null,
          lastName: null,
          userEmail: null,
          userPhoto: null,
          userId: null,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

  const authContext = React.useMemo(() => ({

    signIn: async(foundUser) => {
      const userName = foundUser[0].user.givenName;
      const lastName = foundUser[0].user.familyName;
      const userEmail = foundUser[0].user.email;
      const userPhoto = foundUser[0].user.photo;

      const urlIdWorker = 'https://lendpi-gateway.herokuapp.com/api-gateway/worker/id/';
      const dataId = await fetch(urlIdWorker + userEmail)
      const res = await dataId.json();
      const idWorker = res.uuid[0];

      dispatch({
        type: 'LOGIN',
        firstName: userName,
        lastName: lastName,
        userEmail: userEmail,
        userPhoto: userPhoto,
        userId: idWorker,
      });
    },

    signOut: async() => {
      try {
        await GoogleSignin.revokeAccess();
        await GoogleSignin.signOut();
      } catch (error) {
        console.error(error);
      }
      dispatch({ type: 'LOGOUT' });
    },

    toggleTheme: () => {
      setIsDarkTheme( isDarkTheme => !isDarkTheme );
    },

    getDataUser: () => {
      return loginState
    },

  }), []);

  useEffect(() => {
    setTimeout(async() => {
      dispatch({
        type: 'RETRIEVE_TOKEN',
       });
    }, 1000);
  }, []);

  if( loginState.isLoading ) {
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator size="large"/>
      </View>
    );
  }
  return (
    <PaperProvider theme={theme}>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer theme={theme}>
          { loginState.userEmail !== null ? (
            <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
              <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
              <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />
              <Drawer.Screen name="SolicitudScreen" component={SolicitudScreen} />
              <Drawer.Screen name="HomeScreen" component={HomeScreen} />
              <Drawer.Screen name="EstadoScreen" component={EstadoScreen} />
            </Drawer.Navigator>
            )
            :
            <RootStackScreen/>
          }
        </NavigationContainer>
      </AuthContext.Provider>
    </PaperProvider>
  );
}

export default App;
