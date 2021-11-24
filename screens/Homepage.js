import * as React from "react";
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
import { createStackNavigator } from "@react-navigation/stack";
import { useIsFocused } from "@react-navigation/core";
// import mavenBold from "../assets/fonts"
import CarouselCard from "../components/CarouselCard";
import uris from "../data/uri";
import KalkulasiPage from "./KalkulasiDiet";
import { Dimensions } from "react-native";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

import CardItem, { SLIDER_WIDTH, ITEM_WIDTH } from "../components/CardItem";
import data from "../data/source";

const loadFonts = () => {
  return Font.loadAsync({
    mavenBold: require("../assets/fonts/maven-pro-bold.ttf"),
  });
};


const HomeStack = createStackNavigator();

export default function HomeScreen() {
  const isFocused = useIsFocused()

  return (
    <>
    {isFocused? <StatusBar translucent={true} barStyle="light-content" /> : null}
    <HomeStack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="Homepage" component={ExplorPage} />
      <HomeStack.Screen name="Kalkulasi Diet" component={KalkulasiPage} />
      {/* <HomeStack.Screen name="Beli" component={BeliPaketScreen} />
      <HomeStack.Screen name="Paket" component={PaketScreen} />
      <HomeStack.Screen name="Pengaturan" component={PengaturanScreen} /> */}
    </HomeStack.Navigator>
    </>
  )
}

function ExplorPage({ navigation }) {
  const [fontsLoaded, setFontsLoaded] = React.useState(false);
  const[valueKalori,setValueKalori] = React.useState(2000);
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
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false} >
        {/* <Text style={styles.header}>Eksplor Catering</Text> */}
        <Text style={styles.topTopText}>Diet yang Cocok</Text>
        <Card containerStyle={styles.card}>
          <View style={styles.textCard}>
            <Image style={styles.image} source={{ uri: uris.fire2 }} />
            <View style={styles.valueCard}>
              <View style={{flexDirection:"row", alignItems:"center"}}>
              <Text style={{fontSize:15, fontFamily:"mavenBold"}}>Kalori yang dibutuhkan per hari</Text>
              {/* <Text style={{fontSize:15}}>per hari</Text> */}
              </View>
              <View style={{flexDirection:"row", marginLeft:13, alignItems:"baseline"}}>
              <Text style={{fontSize:18, fontWeight:"bold", color:"#eb5d76"}}>{valueKalori}</Text>
              <Text style={{paddingLeft: 2, fontSize:16, fontWeight:"bold", color:"#eb5d76"}}>Kkal</Text>
              </View>
              </View>
            
            {/* <TextInput
              placeholder="Masukkan jumlah kalori"
              // onChangeText={(text) => setText("Masukkan jumlah kalori")}
              // defaultValue={null}
            /> */}
          </View>
          <Button
            onPress={() => {
              navigation.navigate('Kalkulasi Diet');
            }}
            type="outline"
            style={styles.button}

            title={"Hitung Jumlah Kalori"}
            titleStyle={{ color: "#eb5d76", fontSize: 14 }}
          />
          
        </Card>

        {/* <View style={styles.filterContainer}>
          <TouchableOpacity
            style={styles.filter}
            onPress={() => {
              navigation.navigate('Kalkulasi Diet');
            }}
          >
            <Image style={styles.filterImage} source={{ uri: uris.filter }} />
          </TouchableOpacity>
        </View> */}

        <Text style={styles.topText}>Rekomendasi Menu</Text>
        <View style={{flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between"}}>
          {data.map((d,i)=>{
            return (<CardItem item ={d} index = {i} key = {i}></CardItem>)
          })}
        </View>
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
    color:"#F2F6FC",
    // width: Dimensions.get("window").width,
    marginHorizontal:2,
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
    alignItems:"center"
  },
  textCard2: {
    fontWeight: "bold",
    fontSize: 14,
    // paddingBottom: 10,
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
  topTopText: {
    color: "#616161",
    marginTop: 10,
    fontSize: 16,
    fontFamily: "Roboto",
    marginBottom: 5,
    fontWeight: "bold",
  },
  container: {
    backgroundColor: "white",
    flex: 1,
    // paddingTop: StatusBar.currentHeight,
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
  valueCard:{
    flexDirection:"row",
    paddingTop:10
  }
});

