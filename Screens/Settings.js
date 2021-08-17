import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Settings = () => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        House Listing App
      </Text>
      <Text>Version 0.1</Text>
      <Text>Author: Vinh Hoang</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Settings;
