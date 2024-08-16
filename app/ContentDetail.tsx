import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";

const ContentDetail: React.FC = () => {
  const params = useLocalSearchParams();

  if (!params || typeof params !== "object") {
    return <Text>No item data available</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{params.title}</Text>
      <Text style={styles.description}>{params.des}</Text>
      <Text style={styles.tag}>{params.tag}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  tag: {
    fontSize: 14,
    color: "#666",
  },
});

export default ContentDetail;
