import * as React from 'react'
import { useEffect, useState } from "react";
// import { View, Text } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import DeatailsScreen from './screens/DeatailsScreen';
import { Button, TouchableOpacity, View, Text } from 'react-native';
import { SafeAreaProvider,useSafeAreaInsets } from 'react-native-safe-area-context';
import Splash from './components/Splash';
const Stack = createNativeStackNavigator();
// import HomeScreen from './screens/HomeScreen'
// import SettingsScreen from './screens/SettingsScreen'
// import DeatailsScreen from './screens/DeatailsScreen'

const homeName = "Home"
const settingsName = "Settings"
const detailsName = "Ahadees"
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const MainContainer = () => {
const inset = useSafeAreaInsets();
const [appReady, setAppReady] = useState(false);
useEffect(() => {
  const prepareApp = async () => {
    try {
      await SplashScreen.preventAutoHideAsync(); // Prevent the splash from hiding
      setTimeout(() => {
        setAppReady(true);
        SplashScreen.hideAsync(); // Hide splash screen after the app is ready
      }, 3000); // Show splash screen for 3 seconds
    } catch (e) {
      console.warn(e);
    }
  };

  prepareApp();
}, []);

if (!appReady) {
  return <Splash /> ;
}

return (
  <NavigationContainer>
  {/* <Tab.Navigator
  initialRouteName={homeName}
  screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let rn = route.name;
          if(rn === homeName){
              iconName = focused ? 'home' : 'home-outline'
          }else if(rn === detailsName){
              iconName = focused ? 'list' : 'list-outline'
          }else if(rn === settingsName){
              iconName = focused ? 'settings' : 'settings-outline'
          }
          return <Ionicons name={iconName} size={size} color={color} />
      }
  })}
  tabBarOptions={{
    activeTintColor: 'green',
    inactiveTintColor: 'black',
    labelStyle: {  fontSize: 10 },
    style: { padding: 50, height: 170}
  }}
  >
  <Tab.Screen name={homeName} component={HomeScreen} />
  <Tab.Screen name={detailsName} component={DeatailsScreen} />
  <Tab.Screen name={settingsName} component={SettingsScreen} />
  </Tab.Navigator> */}
  
  <Stack.Navigator initialRouteName='Home' screenOptions={{
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
}}>
    <Stack.Screen name='Root' component={Root} 
    options={{
     headerShown: false
      // headerTitle: (props) => <LogoTitle {...props} />,
      // headerRight: () => (
      //   <TouchableOpacity 
      //    onPress={() => alert("This is a button!")}
      //   style={{color: "white"}}
      //   >Inc Count</TouchableOpacity>
      // ),
    }} 
    />
    {/* <Stack.Screen name='Settings' component={SettingsScreen}
      options={{
              headerBackTitle: 'Custom Back',
              headerBackTitleStyle: { fontSize: 30 },
            }}
     />
    <Stack.Screen name='Details' component={DeatailsScreen}
    options={{
              headerBackTitle: 'Custom Back',
              headerBackTitleStyle: { fontSize: 300 },
            }}
     /> */}
  </Stack.Navigator> 
  {/* <Drawer.Navigator initialRouteName='HomeScreen'>
      <Drawer.Screen name='Home' component={HomeScreen} />
      <Drawer.Screen name='Settings' component={SettingsScreen} />
      <Drawer.Screen name='Details' component={DeatailsScreen} />
  </Drawer.Navigator> */}
</NavigationContainer>
);
}

export default MainContainer

function Root() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Ahadees" component={DeatailsScreen} />
      {/* <Stack.Screen name="Settings" component={SettingsScreen} / */}
    </Drawer.Navigator>
  );
}
