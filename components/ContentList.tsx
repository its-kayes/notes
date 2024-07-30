import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import ContentItem from "./ContentItem";
import { IContentItem } from "@/app/(tabs)";

interface ContentListProps {
  contentItems: IContentItem[];
}

const ContentList: React.FC<ContentListProps> = ({ contentItems }) => {
  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      {contentItems.map((item, index) => (
        <ContentItem key={index} {...item} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 10,
  },
});

export default ContentList;
