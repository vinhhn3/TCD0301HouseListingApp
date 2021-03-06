import React from "react";
import { View } from "react-native";
import ListingDetail from "../components/ListingDetail";

const Detail = ({ route }) => {
  const { item } = route.params;

  return (
    <View>
      <ListingDetail item={item} />
    </View>
  );
};

export default Detail;
