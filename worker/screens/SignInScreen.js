import React from 'react';
import { useTheme } from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-community/google-signin';
import { AuthContext } from '../components/context';

const WebClientID = '8133386440-jl74s0b7u2me6mbfogncubunrbjhlfr7.apps.googleusercontent.com';

const SignInScreen = ({navigation}) => {
  const { colors } = useTheme();
  const { signIn } = React.useContext(AuthContext);

  GoogleSignin.configure({
    webClientId: WebClientID, // client ID of type WEB for your server(needed to verify user ID and offline access)
    offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
    accountName: '', // [Android] specifies an account name on the device that should be used
  });

  const googleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const info = await GoogleSignin.signIn();
      //Obtener el uuid del worker
      const urlIdWorker = 'https://lendpi-gateway.herokuapp.com/api-gateway/worker/id/';
      const res = await fetch(urlIdWorker + info.user.email);
      const idWorker = await res.json();
      //Verificar que el usuario no tenga una cuenta activa
      if (idWorker.uuid == 0 ) {
        const urlNewWorker = 'https://lendpi-gateway.herokuapp.com/api-gateway/new-worker';
        await fetch(urlNewWorker, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            first_name: info.user.givenName,
            last_name: info.user.familyName,
            email: info.user.email,
            token: info.idToken,
            photo: info.user.photo
          })
        })
      }

    signIn([info]);

    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#FA5C61' barStyle="light-content"/>
      <View style={styles.header}>
        <Text style={styles.textheader}>Crowdlending by Rappi</Text>
      </View>
      <Animatable.View
        animation="fadeInUpBig"
        style={[styles.footer, {
          backgroundColor: colors.background
        }]}
      >
        <View style={styles.viewbottom}>
          <GoogleSigninButton
            style={{ width: 180, height: 60 }}
            size={GoogleSigninButton.Size.Wide}
            onPress={googleSignIn}
          />
          <TouchableOpacity onPress={()=>navigation.navigate('SplashScreen')} style={styles.button}>
            <LinearGradient
              colors={['#FF9295', '#FA5C61']}
              style={styles.signIn}
            >
              <MaterialIcons
                name="navigate-before"
                color="#fff"
                size={20}
              />
              <Text style={styles.textbutton}>Volver</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FA5C61'
    },
    header: {
        flex: 3.5,
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    footer: {
        flex: 2,
        backgroundColor: '#fff',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        paddingHorizontal: 30
    },
    textheader: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    viewbottom: {
        alignItems: 'center',
        marginTop: 30,
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row',
    },
    button: {
      marginLeft: -150,
      marginTop: 40,
    },
    textbutton: {
        color: 'white',
        fontWeight: 'bold'
    }
  });

export default SignInScreen;
