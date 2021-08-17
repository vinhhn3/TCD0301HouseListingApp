import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ListingItem = ({ item, navigation }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("Detail", { item })}
    >
      <Image style={styles.thumbnail} source={{ uri: item.thumbnail }} />
      <View>
        <Text style={styles.title}>{item.id}</Text>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    padding: "2%",
    backgroundColor: "#eee",
    borderRadius: 5,
    marginBottom: "5%",
  },
  thumbnail: {
    borderRadius: 5,
    height: 150,
    width: 150,
    marginRight: "5%",
  },
  title: {
    flexWrap: "wrap",
    fontSize: 18,
    width: "99%",
  },
  price: {
    fontSize: 20,
    color: "green",
    fontWeight: "bold",
  },
});

export default ListingItem;
