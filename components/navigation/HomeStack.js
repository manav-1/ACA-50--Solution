import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Recipe from "../screens/Recipe";
import Profile from "../screens/Profile";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#CC0000",
        tabBarInactiveTintColor: "#000",
        headerShown: false,
      }}
    >
      <Tab.Screen
        options={{
          tabBarLabel: "Recipes",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="fast-food" color={color} size={size} />
          ),
        }}
        name="Recipe"
        component={Recipe}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
};

export default HomeStack;
