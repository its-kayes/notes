import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { IContentItem } from "@/app/(tabs)";

interface ContentItemProps extends IContentItem {
  onPress: () => void;
}

const ContentItem: React.FC<ContentItemProps> = ({
  title,
  des,
  tag,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.des}>{des}</Text>
        <Text style={styles.tag}>{tag}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "#f9f9f9",
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  des: {
    fontSize: 14,
    marginTop: 5,
  },
  tag: {
    fontSize: 12,
    color: "#666",
    marginTop: 5,
  },
});

// const styles = StyleSheet.create({
//   contentBox: {
//     borderBlockColor: "#0f03ff",
//     borderWidth: 1,
//     minHeight: 50,
//     borderRadius: 5,
//     marginBottom: 10,

//     paddingHorizontal: 10,
//     justifyContent: "center",
//     alignItems: "flex-start",
//   },
//   title: {
//     paddingBottom: 4,
//     paddingTop: 4,
//     fontWeight: "600",
//   },
//   tag: {
//     paddingVertical: 4,
//     fontSize: 14,
//   },
//   des: {
//     textAlign: "justify",
//   },
// });

export default ContentItem;
