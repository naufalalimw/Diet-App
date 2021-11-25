/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { MaterialCommunityIcons } from '@expo/vector-icons';
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
import { BottomTabParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="HOME"
      screenOptions={{tabBarActiveTintColor: Colors[colorScheme].tint, tabBarHideOnKeyboard: true }}>
      <BottomTab.Screen 
        name="Explore"
        options={{
          tabBarIcon: ({size, color }) => <MaterialCommunityIcons name="compass" color={color} size={size} />,
        }}
        component={HomeScreen}
      />
      <BottomTab.Screen
        name="Dietku"
        options={{
          tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="food" color={color} size={size}/>,
        }}
        component={DietScreen}
      />
      <BottomTab.Screen
        name="Profile"
        options={{
          tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="account" color={color} size={size} />,
        }}
        component={ProfileScreen}
      />
    </BottomTab.Navigator >
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof MaterialCommunityIcons>['name']; color: string }) {
  return <MaterialCommunityIcons size={30} style={{ marginBottom: 3 }} {...props} />;
}

function SearchBarIcon(props: { name: React.ComponentProps<typeof MaterialCommunityIcons>['name'];}) {
  return <MaterialCommunityIcons size={30} style={
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

// const TabTwoStack = createStackNavigator<TabTwoParamList>();

// function TabSearchNavigator() {
//   return (
//     <TabTwoStack.Navigator>
//       <TabTwoStack.Screen
//         name="TabTwoScreen"
//         component={TabTwoScreen}
//         options={{ headerTitle: 'Search Something' }}
//       />
//     </TabTwoStack.Navigator>
//   );
// }
