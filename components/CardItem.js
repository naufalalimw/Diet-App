import React from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";

export const SLIDER_WIDTH = Dimensions.get("window").width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.4);

console.log(SLIDER_WIDTH);
console.log(ITEM_WIDTH);
const CardItem = ({ item, index }) => {
  return (
    <View style={styles.container} key={index}>
      <Image source={{ uri: item.imgUrl }} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.header}>{item.title}</Text>
      <Text style={styles.body}>{item.body}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 8,
    width: ITEM_WIDTH,
    paddingBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    marginHorizontal: 10,
    marginBottom: SLIDER_WIDTH * 0.05
  },
  image: {
    width: ITEM_WIDTH,
    height: 150,
  },
  name: {
    color: "#9e9d89",
    fontSize: 10,
    paddingLeft: 20,
    paddingTop: 10,
  },
  header: {
    color: "#222",
    fontSize: 15,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingTop: 5,
  },
  body: {
    color: "#222",
    fontSize: 12,
    paddingLeft: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export default CardItem;
