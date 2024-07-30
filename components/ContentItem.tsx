import { IContentItem } from "@/app/(tabs)";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ContentItem: React.FC<IContentItem> = ({ title, des, tag }) => {
  return (
    <View style={styles.contentBox}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.des}>{des}</Text>
      <Text style={styles.tag}>{tag}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contentBox: {
    borderBlockColor: "#0f03ff",
    borderWidth: 1,
    minHeight: 50,
    borderRadius: 5,
    marginBottom: 10,

    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  title: {
    paddingBottom: 4,
    paddingTop: 4,
    fontWeight: "600",
  },
  tag: {
    paddingVertical: 4,
    fontSize: 14,
  },
  des: {
    textAlign: "justify",
  },
});

export default ContentItem;
