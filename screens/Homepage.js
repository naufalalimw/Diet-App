import * as React from "react";
<<<<<<< HEAD
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
=======
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Card, ListItem, Button, ThemeProvider } from "react-native-elements";
import { Picker } from "@react-native-picker/picker";

import CarouselCard from "../components/CarouselCard";
import uris from "../data/uri";

import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

const loadFonts = () => {
  return Font.loadAsync({
    mavenBold: require("../assets/fonts/maven-pro-bold.ttf"),
  });
};

function ExplorPage({ navigation }) {
  const [fontsLoaded, setFontsLoaded] = React.useState(false);
  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={(err) => {
          console.error(err);
        }}
      />
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.header}>Eksplor Catering</Text>
        <Text style={styles.topText}>Diet yang Cocok</Text>
        <Card containerStyle={styles.card}>
          <View style={styles.dropdown}>
            <Image style={styles.image} source={{ uri: uris.dish2 }} />
            <Text> </Text>
            <Picker
              style={styles.container}
              mode="dropdown"
              onValueChange={(itemValue, itemIndex) => console.log(itemValue)}
            >
              <Picker.Item label="Diet Sehat" value="Diet Sehat" />
              <Picker.Item label="Building Body" value="Building Body" />
              <Picker.Item label="Diet Santai" value="Diet Santai" />
              <Picker.Item label="Diet Murah" value="Diet Murah" />
            </Picker>
          </View>
          <View style={styles.textCard}>
            <Image style={styles.image} source={{ uri: uris.fire2 }} />
            <Text> </Text>
            <TextInput
              placeholder="Masukkan jumlah kalori"
              // onChangeText={(text) => setText("Masukkan jumlah kalori")}
              // defaultValue={null}
            />
          </View>
          <Button
            type="outline"
            style={styles.button}
            title={"Cari diet yang cocok"}
            titleStyle={{ color: "#eb5d76", fontSize: 14 }}
          />
        </Card>

        <View style={styles.filterContainer}>
          <TouchableOpacity
            style={styles.filter}
            onPress={() => {
              navigation.navigate("Kalkulasi");
            }}
          >
            <Image style={styles.filterImage} source={{ uri: uris.filter }} />
          </TouchableOpacity>
        </View>

        <Text style={styles.topText}>Diet Sehat</Text>
        <CarouselCard />
        <Text style={styles.topText}>Diet Jenis yang Lain</Text>
        <CarouselCard />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  filterContainer: {
    paddingTop: 20,
    alignItems: "baseline",
  },
  filterImage: {
    width: 20,
    height: 20,
  },
  filter: {
    width: 50,
    borderRadius: 25,
    height: 25,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 0,
    backgroundColor: "#e8ebed",
  },
  button: {
    color: "#eb5d76",
  },
  card: {
    backgroundColor: "#f2f6fc",
    // borderWidth: 5,
    paddingVertical: 0,
    paddingBottom: 10,
  },
  image: {
    marginRight: 10,
    width: 20,
    height: 25,
  },
  textCard: {
    flexDirection: "row",
    fontWeight: "bold",
    fontSize: 12,
    paddingBottom: 10,
  },
  dropdown: {
    flexDirection: "row",
    fontWeight: "bold",
    fontSize: 12,
    paddingBottom: 20,
  },
  header: {
    marginTop: 30,
    fontSize: 20,
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "bold",
    fontFamily: "Roboto",
  },
  topText: {
    color: "#616161",
    marginTop: 10,
    fontSize: 15,
    fontFamily: "Roboto",
    marginBottom: 10,
  },
  container: {
    backgroundColor: "white",
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: "white",
    marginHorizontal: 15,
  },
  text: {
    alignItems: "center",
    fontSize: 20,
    alignContent: "center",
  },
});

export default ExplorPage;
>>>>>>> eec6bcdb5385ef63e5f401b19b14013029861547
