import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ListingItem from "../components/ListingItem";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  // useEffect: when the component is loaded, it will call the function fetchApi()
  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    setLoading(true);
    const data = await fetch(
      "https://my-json-server.typicode.com/PacktPublishing/React-Projects/listings"
    );
    const dataJSON = await data.json();
    setData(dataJSON);
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <Text style={styles.loading}>Loading ...</Text>
      ) : (
        <FlatList
          keyExtractor={(item) => String(item.id)}
          data={data}
          renderItem={({ item }) => <ListingItem item={item} />}
        />
      )}
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
  loading: {
    fontSize: 30,
    fontWeight: "bold",
    color: "blue",
  },
});

export default Home;
