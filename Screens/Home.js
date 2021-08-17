import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ListingItem from "../components/ListingItem";

const Home = () => {
  const [data, setData] = useState([
    {
      id: 1,
      title: "Canalside house",
      thumbnail: "https://picsum.photos/id/164/400/400",
      price: "$350,000",
    },
    {
      id: 2,
      title: "Old center townhouse",
      thumbnail: "https://picsum.photos/id/405/400/400",
      price: "$800,000",
    },
    {
      id: 3,
      title: "Centrally located appartment",
      thumbnail: "https://picsum.photos/id/1065/400/400",
      price: "$280,000",
    },
    {
      id: 4,
      title: "Downtown apartment",
      thumbnail: "https://picsum.photos/id/1076/400/400",
      price: "$1,200,000",
    },
    {
      id: 5,
      title: "Fairytale castle",
      thumbnail: "https://picsum.photos/id/1040/400/400",
      price: "$5,000,000",
    },
  ]);
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => String(item.id)}
        data={data}
        renderItem={({ item }) => <ListingItem item={item} />}
      />
      <Text>Home Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});

export default Home;
