import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Dietku from "./Dietku";
import Profile from "./Profile";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Bridge from "./Bridge";

// import { KalkulasiPage } from "./KalkulasiDiet";
const Tab = createBottomTabNavigator();

function Homepage() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: "#eb5d76",
        }}
      >
        <Tab.Screen
          name={"Eksplor"}
          component={Bridge}
          options={{
            tabBarLabel: "Explore",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="compass"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name={"Dietku"}
          component={Dietku}
          options={{
            tabBarLabel: "Dietku",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="food" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name={"Profil"}
          component={Profile}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Homepage;
