import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";

const ShowScreen = ({ route }) => {
  const { id } = route.params;
  const { state } = useContext(Context);

  const blogPost = state.find((post) => post.id === id);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{blogPost?.title}</Text>
      <Text style={styles.content}>Post ID: {blogPost?.id}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  content: {
    fontSize: 18,
  },
});

export default ShowScreen;
