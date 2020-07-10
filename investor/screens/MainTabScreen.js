import React from 'react';
import HomeScreen from './HomeScreen';
import InversionesScreen from './InversionesScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const HomeStack = createStackNavigator();
const InversionesStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#FA5C61',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Inversiones"
        component={InversionesStackScreen}
        options={{
          tabBarLabel: 'Inversiones',
          tabBarColor: '#FA5C61',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-cash" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
<HomeStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#FA5C61',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <HomeStack.Screen name="Home" component={HomeScreen} options={{
        title:'Home',
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#FA5C61" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} />
</HomeStack.Navigator>
);

const InversionesStackScreen = ({navigation}) => (
<InversionesStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#FA5C61',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <InversionesStack.Screen name="Inversiones" component={InversionesScreen} options={{
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#FA5C61" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} />
</InversionesStack.Navigator>
);
