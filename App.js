import { AntDesign, Feather, MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Detail from "./Screens/Detail";
import Home from "./Screens/Home";
import Settings from "./Screens/Settings";

const Stack = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            if (route.name === "Home") {
              return <AntDesign name="home" size={24} color="black" />;
            } else if (route.name === "Settings") {
              return <Feather name="settings" size={24} color="black" />;
            } else if (route.name === "Detail") {
              return <MaterialIcons name="details" size={24} color="black" />;
            }
          },
        })}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
