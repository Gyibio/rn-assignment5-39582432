import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import themeContext from './theme/ThemeContext';
import theme from './theme/theme';
import {EventRegister} from 'react-native-event-listeners';
import React, {useState, useEffect} from 'react';


import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import StatisticsScreen from './screens/StatisticsScreen';
import CardsScreen from './screens/CardsScreen'; 

import home from './assets/home.png';
import myCards from './assets/myCards.png';
import statistics from './assets/statictics.png';
import settings from './assets/settings.png';

const Tab= createBottomTabNavigator();

export default function App() {
  const [darkMode, setDarkMode]= useState(false)

  useEffect(()=> {
    const listener = EventRegister.addEventListener('ChangeTheme', (data)=>{
      setDarkMode(data)
    })
    return()=>{
      EventRegister.removeAllListeners(listener)
    }
  },[darkMode])
  return (
    <themeContext.Provider value ={darkMode === true ? theme.dark: theme.light}>
      <NavigationContainer theme={darkMode === true ? DarkTheme : DefaultTheme}>
        <Tab.Navigator screenOptions={{
          headerShown: false,
          tabBarInactiveTintColor: 'gray',}}>
            <Tab.Screen name = "Home" component={HomeScreen}
            options={{
              tabBarIcon: ({color})=> (
                <Image source={home}
                style={{tintColor: color,
                  width: 20,
                  height: 20
                }}/>
              )
            }}/>

            <Tab.Screen name = "MyCards" component={CardsScreen}
            options={{
              tabBarIcon: ({color}) => (
                <Image source={myCards} 
                style={{tintColor: color,
                  width: 20,
                  height: 20
                }}
                />
              )
            }}/>

            <Tab.Screen name = "Statistics" component={StatisticsScreen}
            options={{
              tabBarIcon: ({color})=> (
                <Image source={statistics}
                style={{tintColor: color,
                  width: 20,
                  height: 20
                }}
                />
              )
            }}/>

            <Tab.Screen name = "Settings" component={SettingsScreen}
            options={{
              tabBarIcon: ({color})=> (
                <Image source={settings}
                style={{tintColor: color,
                  width: 20,
                  height: 20
                }} />
              )
            }} />
        </Tab.Navigator>
      </NavigationContainer>
    </themeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
