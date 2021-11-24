/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

<<<<<<< HEAD
import { Ionicons } from '@expo/vector-icons';
=======
import { MaterialCommunityIcons } from '@expo/vector-icons';
>>>>>>> eec6bcdb5385ef63e5f401b19b14013029861547
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import HomeScreen from '../screens/Homepage';
import DietScreen from '../screens/Dietku';
import ProfileScreen from '../screens/Profile';
<<<<<<< HEAD
import { BottomTabParamList, TabParamList, TabTwoParamList } from '../types';
=======
import { BottomTabParamList } from '../types';
>>>>>>> eec6bcdb5385ef63e5f401b19b14013029861547

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="HOME"
<<<<<<< HEAD
      screenOptions={{ tabBarActiveTintColor: Colors[colorScheme].tint, tabBarHideOnKeyboard: true }} >
=======
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint, keyboardHidesTabBar: true }}>
<<<<<<< HEAD
      <BottomTab.Screen
        name="Explore"
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="person" color={color} />,
=======
>>>>>>> 77fc5474861a7dfa9b03ac62f726847605ffc26b
      <BottomTab.Screen 
        name="Explore"
        options={{
          tabBarIcon: ({size, color }) => <MaterialCommunityIcons name="compass" color={color} size={size} />,
>>>>>>> eec6bcdb5385ef63e5f401b19b14013029861547
        }}
        component={HomeScreen}
      />
      <BottomTab.Screen
        name="Dietku"
        options={{
<<<<<<< HEAD
          tabBarIcon: ({ color }) => <TabBarIcon name="fast-food" color={color} />,
=======
          tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="food" color={color} size={size}/>,
>>>>>>> eec6bcdb5385ef63e5f401b19b14013029861547
        }}
        component={DietScreen}
      />
      <BottomTab.Screen
        name="Profile"
        options={{
<<<<<<< HEAD
          tabBarIcon: ({ color }) => <TabBarIcon name="planet" color={color} />,
        }}
        component={ProfileScreen}
      />
    </BottomTab.Navigator>
=======
          tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="account" color={color} size={size} />,
        }}
        component={ProfileScreen}
      />
    </BottomTab.Navigator >
>>>>>>> eec6bcdb5385ef63e5f401b19b14013029861547
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
<<<<<<< HEAD
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

function SearchBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name'];}) {
  return <Ionicons size={30} style={
=======
function TabBarIcon(props: { name: React.ComponentProps<typeof MaterialCommunityIcons>['name']; color: string }) {
  return <MaterialCommunityIcons size={30} style={{ marginBottom: 3 }} {...props} />;
}

function SearchBarIcon(props: { name: React.ComponentProps<typeof MaterialCommunityIcons>['name'];}) {
  return <MaterialCommunityIcons size={30} style={
>>>>>>> eec6bcdb5385ef63e5f401b19b14013029861547
    { 
      marginBottom: 40,
      borderRadius: 20, 
      backgroundColor: '#319CEC',
      padding: 15,
      color: '#FFFFFF',
    }
  } {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabSearchNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Search Something' }}
      />
    </TabTwoStack.Navigator>
  );
}
