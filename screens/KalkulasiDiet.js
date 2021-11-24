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
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { Picker } from "@react-native-picker/picker";
import {useState} from "react";
// import { Checkbox } from "react-native-paper";
import CheckBox from "expo-checkbox";

// const App = () => {
//   const [isSelected, setSelection] = useState(false);
// // const isSelected = useState(false);
// // const setSelection = useState('');

const KalkulasiPage = () => {
  const [isSelected, setSelection] = useState(false);
  // render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false} >
          <Text style={styles.header}>Rencana Dietku</Text>
          <Text style={styles.topText}>Jenis Kelamin</Text>
          <View style={styles.dropdown}>         
            <Picker
              style={styles.container}
              mode="dropdown"
              onValueChange={(itemValue, itemIndex) => console.log(itemValue)}
            >
              <Picker.Item label="Pilih Jenis Kelamin" enabled={false} />
              <Picker.Item label="Laki-Laki" value="Laki-Laki" />
              <Picker.Item label="Perempuan" value="Perempuan" />
            </Picker>
          </View>
          <Text style={styles.topText}>Program Diet</Text>
          <View style={styles.dropdown}>         
            <Picker
              style={styles.container}
              mode="dropdown"
              onValueChange={(itemValue, itemIndex) => console.log(itemValue)}
            >
              <Picker.Item label="Pilih Program Diet" enabled={false} />
              <Picker.Item label="Makanan Sehat" value="DietMakanan Sehat" />
              <Picker.Item label="Menaikkan Berat Badan" value="Menaikkan Berat Badan" />
              <Picker.Item label="Menurunkan Berat Badan" value="Menurunkan Berat Badan" />
            </Picker>
          </View>
          <Text style={styles.topText}>Jangka Waktu</Text>
          <View style={styles.dropdown}>         
            <Picker
              style={styles.container}
              mode="dropdown"
              onValueChange={(itemValue, itemIndex) => console.log(itemValue)}
            >
              <Picker.Item label="Pilih Jumlah Hari" enabled={false} />
              <Picker.Item label="1 Hari" value="1 Hari" />
              <Picker.Item label="2 Hari" value="2 Hari" />
              <Picker.Item label="3 Hari" value="3 Hari" />
              <Picker.Item label="4 Hari" value="4 Hari" />
              <Picker.Item label="5 Hari" value="5 Hari" />
              <Picker.Item label="6 Hari" value="6 Hari" />
              <Picker.Item label="7 Hari" value="7 Hari" />
            </Picker>
          </View>
          <Text style={styles.topText}>Batasan/Pantangan</Text>
          {/* <View style={{flexDirection: "column"}, {alignContent: "center"}}> */}
          <View style={styles.checkboxContainerTop}>
            <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              style={styles.checkbox}
            />
            {console.log(isSelected)}
          <Text style={styles.label}>Hanya Makanan Halal</Text>
          </View>
          <View style={styles.checkboxContainerTop}>
            <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              style={styles.checkbox}
            />
            {console.log(isSelected)}
          <Text style={styles.label}>Tanpa Produk Susu</Text>
          </View>
          <View style={styles.checkboxContainerTop}>
            <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              style={styles.checkbox}
            />
            {console.log(isSelected)}
          <Text style={styles.label}>Hanya Makanan Vegan</Text>
          </View>
          <View style={styles.checkboxContainerBottom}>
            <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              style={styles.checkbox}
            />
            {console.log(isSelected)}
          <Text style={styles.label}>Tidak Mengandung Kacang</Text>
          </View>
          {/* </View> */}
          <Text style={styles.topText}>Berat Badan Saat ini</Text>
        <View style={{ flexDirection: "row" }}>
          <TextInput
            style={styles.textbox}
            placeholder="Masukkan Berat Badan"
          ></TextInput>
          <Text style={styles.satuan}>kg</Text>
        </View>
        <Text style={styles.topText}>Tinggi Badan</Text>
        <View style={{ flexDirection: "row", alignContent: "center" }}>
          <TextInput
            style={styles.textbox}
            placeholder="Masukkan Tinggi Badan"
          />
          <Text style={styles.satuan}>cm</Text>
        </View>
        {/* <Text style={styles.topText}>Target Tercapai</Text>
        <View style={{ flexDirection: "row" }}>
          <TextInput
            style={styles.textbox}
            placeholder="Masukkan Jumlah Hari"
          ></TextInput>
          <Text style={styles.satuan}>Hari</Text>
        </View> */}
        <Text style={styles.topText}>Tingkat Aktivitas dalam Seminggu</Text>
          <View style={styles.dropdown}>         
            <Picker
              style={styles.container}
              mode="dropdown"
              onValueChange={(itemValue, itemIndex) => console.log(itemValue)}
            >
              <Picker.Item label="Pilih Tingkat Aktivitas Anda" enabled={false} />
              <Picker.Item label="Rendah (Sedikit Olahraga, Pekerja Kantor)" value="Sedentary" />
              <Picker.Item label="Cukup Rendah (Olahraga 1-3 kali/minggu)" value="Lightly Active" />
              <Picker.Item label="Sedang (Olahraga 6-7 kali/minggu)" value="Moderate Active" />
              <Picker.Item label="Cukup Tinggi (Olahraga 2x sehari)" value="Very Active" />
              <Picker.Item label="Tinggi (Olahraga lebih dari 2x sehari)" value="Very Active" />
            </Picker>
          </View>
        <View style={styles.containerbutton}>
        <TouchableOpacity style={styles.filter}>
          <Text style={styles.button}>Cari Menu Diet</Text>
        </TouchableOpacity>
        </View>
        </ScrollView>
        
      </View>
    );
  }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // paddingTop: StatusBar.currentHeight,
    // alignContent: "center",
    // alignItems: "center"
    // justifyContent: "center",
  },
  containerbutton: {
    // flex: 1,
    backgroundColor: "#fff",
    // paddingTop: StatusBar.currentHeight,
    alignContent: "center",
    alignItems: "center",
    
    // justifyContent: "center",
  },
  filter: {
    width: 300,
    borderRadius: 25,
    height: 40,
    // flexDirection: "row",
    position:"relative",
    // marginLeft: 30,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    marginTop: 10,
    backgroundColor: "#FBAA18",
  },
  header: {
    marginTop: 10,
    fontSize: 24,
    textAlign: "center",
    marginBottom: 10,
    fontWeight: "bold",
    fontFamily: "Roboto",
  },
  button: {
    // marginTop: 10,
    // marginLeft: 10,
    fontSize: 18,
    color: "white",
    fontFamily: "Roboto",
  },
  textbox: {
    height: 40,
    width: 200,
    marginLeft: 10,
    // backgroundColor: "grey",
    // color:"white",
    textDecorationColor: "white",
    fontSize: 15,
  },
  topText: {
    // color: "#616161",
    marginTop: 10,
    marginLeft: 10,
    fontSize: 18,
    fontFamily: "Roboto",
    fontWeight: "bold",
    // marginBottom: 5,
  },
  satuan: {
    // color: "#616161",
    marginTop: 10,
    fontSize: 15,
    fontFamily: "Roboto",
    marginBottom: 10,
  },
  scrollView: {
    backgroundColor: "white",
    marginHorizontal: 15,
  },
  dropdown: {
    flexDirection: "row",
    fontWeight: "bold",
    fontSize: 12,
    paddingBottom: 10,
  },
  checkboxContainerTop: {
    flexDirection: "row",
    // marginBottom: 20,
    alignContent: "stretch",
    marginTop: 10,
    marginLeft: 10,
  },
  checkboxContainerMid: {
    flexDirection: "row",
    // marginBottom: 20,
    alignContent: "stretch",
    marginTop: 10,
    marginLeft: 10,
  },
  checkboxContainerBottom: {
    flexDirection: "row",
    marginBottom: 20,
    alignContent: "stretch",
    marginTop: 10,
    marginLeft: 10,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
});
export default KalkulasiPage;
