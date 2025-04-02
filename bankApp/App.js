import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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
  return (
    <NavigationContainer>
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

          <Tab.Screen name = "Cards" component={CardsScreen}
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
