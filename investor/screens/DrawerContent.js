import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { useTheme, Avatar, Title, Caption, Drawer, Text, TouchableRipple, Switch } from 'react-native-paper';

import{ AuthContext } from '../components/context';

export function DrawerContent(props) {

  const paperTheme = useTheme();
  const { signOut, toggleTheme, getDataUser } = React.useContext(AuthContext);
  const urlPhotoUser = getDataUser().userPhoto;
  const nameUser = getDataUser().userName;

  return(
    <View style={{flex:1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection:'row',marginTop: 15}}>
              <Avatar.Image
                source={{
                  uri: urlPhotoUser
                }}
                size={50}
              />
              <View style={{marginLeft:15, flexDirection:'column'}}>
                <Title style={styles.title}>{nameUser}</Title>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.section}>
                <Title style={[styles.paragraph, styles.caption]}>Inversor</Title>
              </View>
            </View>
          </View>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({color, size}) => (
                <Icon
                  name="home-outline"
                    color={color}
                      size={size}
                />
              )}
              label="Home"
              onPress={() => {props.navigation.navigate('Home')}}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon
                  name="cash"
                  color={color}
                  size={size}
                />
              )}
              label="Historial de Inversiones"
              onPress={() => {props.navigation.navigate('Inversiones')}}
            />
          </Drawer.Section>
          <Drawer.Section title="Preferencias">
            <TouchableRipple onPress={() => {toggleTheme()}}>
              <View style={styles.preference}>
                <Text>Dark Theme</Text>
                <View pointerEvents="none">
                  <Switch value={paperTheme.dark}/>
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <Icon
              name="exit-to-app"
              color={color}
              size={size}
            />
          )}
          label="Sign Out"
          onPress={() => {signOut()}}
        />
      </Drawer.Section>
    </View>
    );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 17,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
