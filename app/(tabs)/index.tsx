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

const Index: React.FC = () => {
  const [contentItems, setContentItems] = useState<string[]>([
    "Content 1",
    "Content 2",
    "Content 3",
    "Content 4",
    "Content 5",
  ]);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [newContent, setNewContent] = useState<string>("");
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
    if (newContent) {
      setContentItems([...contentItems, newContent]);
      setNewContent("");
      setIsModalVisible(false);
    }
  };

  const filteredContentItems = contentItems.filter((item) =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
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
