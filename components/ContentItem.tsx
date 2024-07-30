import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface ContentItemProps {
  item: string;
}

const ContentItem: React.FC<ContentItemProps> = ({ item }) => {
  return (
    <View style={styles.contentBox}>
      <Text>{item}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contentBox: {
    backgroundColor: "#f0f0f0",
    padding: 20,
    borderRadius: 5,
    marginBottom: 20,
    alignItems: "center",
  },
});

export default ContentItem;
