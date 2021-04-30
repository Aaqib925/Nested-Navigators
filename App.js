import React from 'react';
import {
  View,
  Text,
  useWindowDimensions
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/Homescreen';
import SettingsScreen from './src/Settings';


const Tab = createBottomTabNavigator();
const MyTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

const App = () => {

  return (
    <>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </>
  );
};



export default App;
