import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const ListingDetail = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.thumbnail} source={{ uri: item.thumbnail }} />
      <View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  thumbnail: {
    borderRadius: 5,
    height: 200,
    width: "100%",
  },
  title: {
    fontSize: 30,
    margin: 5,
    color: "blue",
    fontWeight: "bold",
  },
  price: {
    fontSize: 25,
    margin: 5,
    color: "green",
    fontWeight: "bold",
  },
});

export default ListingDetail;
