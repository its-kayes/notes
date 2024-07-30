import AddButton from "@/components/AddButton";
import AddContentModal from "@/components/AddContentModal";
import ContentList from "@/components/ContentList";
import SearchBox from "@/components/SearchBox";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Platform,
  BackHandler,
} from "react-native";

export interface IContentItem {
  title?: string;
  des: string;
  tag?: string;
}

const Index: React.FC = () => {
  const [contentItems, setContentItems] = useState<IContentItem[]>([]);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [newContent, setNewContent] = useState<IContentItem>({
    title: "",
    des: "",
    tag: "",
  });
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    const backAction = () => {
      if (isModalVisible) {
        setIsModalVisible(false);
        return true;
      }
      return false;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, [isModalVisible]);

  const handleAddContent = () => {
    if (newContent.title || newContent.des || newContent.tag) {
      setContentItems([...contentItems, newContent]);
      setNewContent({
        title: "",
        des: "",
        tag: "",
      });
      setIsModalVisible(false);
    }
  };

  const filteredContentItems = contentItems.filter(
    (item) =>
      (item.title?.toLowerCase().includes(searchQuery.toLowerCase()) ??
        false) ||
      (item.des?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false) ||
      (item.tag?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false)
  );

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <SearchBox searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <ContentList contentItems={filteredContentItems} />
      <AddButton onPress={() => setIsModalVisible(true)} />
      <AddContentModal
        isVisible={isModalVisible}
        newContent={newContent}
        setNewContent={setNewContent}
        handleAddContent={handleAddContent}
        handleClose={() => setIsModalVisible(false)}
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
  },
});

export default Index;
