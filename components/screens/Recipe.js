import * as React from "react";
import { View, Text, ScrollView, StyleSheet, Dimensions } from "react-native";
import RecipeComponent from "../customComponents/RecipeComponent";

const Recipe = () => {
  const [recipes, setRecipes] = React.useState([
    {
      name: "French Toast",
      imgUri:
        "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfDF8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Pancakes",
      imgUri:
        "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfDF8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "MeatBalls",
      imgUri:
        "https://images.unsplash.com/photo-1529042410759-befb1204b468?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZHxlbnwwfDF8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Pastry",
      imgUri:
        "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Zm9vZHxlbnwwfDF8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
  ]);
  return (
    <View style={styles.outerContainer}>
      <Text style={styles.heading}>Recipes</Text>
      <ScrollView style={styles.container} horizontal={true}>
        {recipes.map((item, index) => (
          <RecipeComponent name={item.name} imgUri={item.imgUri} key={index} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    backgroundColor: "#d2d2d2",
    marginVertical: "auto",
    borderRadius: 10,
  },
  outerContainer: {
    display: "flex",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  heading: {
    fontSize: 35,
    fontFamily: "karlaBold",
    alignSelf: "flex-start",
    marginBottom: 20,
  },
});

export default Recipe;
