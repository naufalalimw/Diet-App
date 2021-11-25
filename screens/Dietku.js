import * as React from "react";
import { Text, View, StyleSheet, Button, StatusBar, Image, TouchableOpacity } from "react-native";
import { Subheading, Paragraph} from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
// import uris from "../data/uri";


class DietkuPage extends React.Component {
  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.header} >Riwayat Diet</Text>

        
        <View style={{
          flexDirection: "column" }}> 
        
          <View
            style={{
            flexDirection: "row",
            height: 25,
            width : 300,
            // padding: 15,
            flex : 0.075
            }}
            >
            <Text style={{color: "#616161",
              fontSize: 18,
              fontFamily: "Roboto",
              marginBottom: 10,
              justifyContent: "center", 
              alignItems: "center",
              backgroundColor: "white", flex:0.7}}> Dietku saat ini</Text>
            {/* <Text style={{
              justifyContent: "center", 
              alignItems: "center",
              fontSize: 12,
              color: "red",
              backgroundColor: "white", flex:0.3
            }}>Cari Diet Lain</Text> */}
            <TouchableOpacity style={{alignItems: "center",
              justifyContent: "center",flex:0.3}} onPress={this._onPressButton}> 
              <Text style = {{fontSize: 12,
              color: "red",
              }}>
                Cari Diet Lain  
              </Text>
            </TouchableOpacity>
          </View>

          
          <View style={{
            flexDirection: "row",
            height: 25,
            width : 300,
            padding: 5,
            flex : 0.15
            }}>
            <Text style = {styles.subheader}>
            Diet Murah
            </Text>
          </View>


          <View
            style={{
            flexDirection: "row",
            height: 25,
            width : 300,
            // padding: 15,
            flex : 0.07
            }}
            >
            <Text style={{color: "#616161",
              fontSize: 18,
              fontFamily: "Roboto",
              // marginBottom: 10,
              justifyContent: "center", 
              alignItems: "center",
              backgroundColor: "white", flex:0.7}}> Cateringku Minggu Ini </Text>
            {/* <Text style={{
              justifyContent: "center", 
              alignItems: "center",
              fontSize: 12,
              color: "red",
              backgroundColor: "white", flex:0.3
            }}>Cari Diet Lain</Text> */}
            <TouchableOpacity style={{alignItems: "center",
              justifyContent: "center",flex:0.3}} onPress={this._onPressButton}> 
              <Text style = {{fontSize: 12,
              color: "red",
              }}>
                Cari Diet Lain  
              </Text>
            </TouchableOpacity >
          </View>
           
          <View
            style={{
            flexDirection: "row",
            height: 25,
            width : 300,
            // padding: 15,
            flex : 0.05
            }}
            >
            <Text style={{
              fontSize: 14,
              fontWeight : "bold",
              justifyContent: "center", 
              alignItems: "center",
              backgroundColor: "white", flex:0.7}}> Mie ayam bakso </Text>
            <Text style={{
              justifyContent: "center", 
              alignItems: "center",
              fontSize: 12,
              color: "green",
              backgroundColor: "white", flex:0.3
            }}>Terkirim</Text>
          </View>

          <View
            style={{
            flexDirection: "row",
            height: 25,
            width : 300,
            // padding: 15,
            flex : 0.05
            }}
            >
            <Text style={{
              fontSize: 14,
              fontWeight : "bold",
              justifyContent: "center", 
              alignItems: "center",
              backgroundColor: "white", flex:0.7}}> Bubur Ayam Special </Text>
            <Text style={{
              justifyContent: "center", 
              alignItems: "center",
              fontSize: 12,
              color: "green",
              backgroundColor: "white", flex:0.3
            }}>Terkirim</Text>
          </View>

          <View
            style={{
            flexDirection: "row",
            height: 25,
            width : 300,
            // padding: 15,
            flex : 0.05
            }}
            >
            <Text style={{
              fontSize: 14,
              fontWeight : "bold",
              justifyContent: "center", 
              alignItems: "center",
              backgroundColor: "white", flex:0.7}}> Ca-Kangkung Udang </Text>
            <Text style={{
              justifyContent: "center", 
              alignItems: "center",
              fontSize: 12,
              color: "green",
              backgroundColor: "white", flex:0.3
            }}>Terkirim</Text>
          </View>

          <View
            style={{
            flexDirection: "row",
            height: 25,
            width : 300,
            // padding: 15,
            flex : 0.1
            }}
            >
            <Text style={{
              fontSize: 14,
              fontWeight : "bold",
              justifyContent: "center", 
              alignItems: "center",
              backgroundColor: "white", flex:0.7}}> Ayam Penyet Nusantara </Text>
            <Text style={{
              justifyContent: "center", 
              alignItems: "center",
              fontSize: 12,
              color: "red",
              backgroundColor: "white", flex:0.3
            }}>Dalam Perjalanan</Text>
          </View>

        </View>
      </View>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // paddingTop: StatusBar.currentHeight,
    alignItems: 'center',
    // justifyContent: "center",
  },
  header: {
    // marginTop: 30,
    fontSize: 22,
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "bold",
    fontFamily: "Roboto",
  },
  profileImgContainer: {
    height: 120,
    width: 120,
    borderRadius: 80,
    borderWidth : 4,
    marginTop : 20,
    marginBottom : 10,
  },
  namalengkap: {
    // flex: 1, 
    justifyContent: "center", 
    alignItems: "center",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom : 0,
  },
  editBtn : {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EB5D76",
  },
  editprofile : {
    justifyContent: "center", 
    alignItems: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  editicon : {
    marginRight: 30,
    width: 15,
    height: 15, 
  },
  subheader : {
    justifyContent: "center", 
    alignItems: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  parag : {
    justifyContent: "center", 
    alignItems: "center",
    fontSize: 16,
  }
});
export default DietkuPage;
