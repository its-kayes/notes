import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import ContentItem from "./ContentItem";

interface ContentListProps {
  contentItems: string[];
}

const ContentList: React.FC<ContentListProps> = ({ contentItems }) => {
  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      {contentItems.map((item, index) => (
        <ContentItem key={index} item={item} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 20,
  },
});

export default ContentList;
