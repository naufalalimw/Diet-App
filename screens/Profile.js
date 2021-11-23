import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";
import { Subheading, Paragraph } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import uris from "../data/uri";
class ProfilePage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Profile</Text>
        <Image
          style={styles.profileImgContainer}
          source={{
            uri:
              "https://qodebrisbane.com/wp-content/uploads/2019/07/This-is-not-a-person-2-1.jpeg",
          }}
          resizeMode={"cover"}
        />
        <Text style={styles.namalengkap}>Dolores Haze</Text>

        <TouchableOpacity style={styles.editBtn} onPress={this._onPressButton}>
          <Text style={styles.editprofile}>
            <Image style={styles.editicon} source={{ uri: uris.pencil }} />
            <Text> </Text>
            Edit Profile
          </Text>
        </TouchableOpacity>

        <View
          style={{
            flexDirection: "column",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              height: 100,
              width: 350,
              padding: 15,
              flex: 0.25,
            }}
          >
            <Image
              source={{ uri: uris.phone }}
              resizeMode={"contain"}
              style={{
                height: 40,
                width: 40,
                backgroundColor: "white",
                flex: 0.3,
              }}
            />
            <View style={{ backgroundColor: "white", flex: 0.8 }}>
              <Text style={styles.subheader}>Nomor Telepon</Text>
              <Text style={styles.parag}>085xxxxxxxxx</Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              height: 100,
              width: 350,
              padding: 15,
              marginBottom: 10,
            }}
          >
            <Image
              source={{ uri: uris.home }}
              resizeMode={"contain"}
              style={{
                height: 40,
                width: 40,
                backgroundColor: "white",
                flex: 0.3,
              }}
            />
            <View style={{ backgroundColor: "white", flex: 0.8 }}>
              <Text style={styles.subheader}>Alamat Rumah</Text>
              <Text style={styles.parag}>
                Jl.In aja dulu no 1, Kel. Lama Sekali, Kec. Kamu, Kab. Armu
                Bagaimana
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: StatusBar.currentHeight,
    alignItems: "center",
    // justifyContent: "center",
  },
  header: {
    marginTop: 30,
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "bold",
    fontFamily: "Roboto",
  },
  profileImgContainer: {
    height: 120,
    width: 120,
    borderRadius: 80,
    borderWidth: 4,
    marginTop: 20,
    marginBottom: 10,
  },
  namalengkap: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 0,
  },
  editBtn: {
    width: 120,
    borderRadius: 25,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EB5D76",
    marginBottom: 30,
  },
  editprofile: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  editicon: {
    marginRight: 30,
    width: 15,
    height: 15,
  },
  subheader: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 22,
    fontWeight: "bold",
  },
  parag: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 16,
  },
});
export default ProfilePage;
