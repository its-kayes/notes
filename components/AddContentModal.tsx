import React from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import Modal from "react-native-modal";
import { IContentItem } from "@/app/(tabs)";

interface AddContentModalProps {
  isVisible: boolean;
  newContent: IContentItem;
  setNewContent: (content: IContentItem) => void;
  handleAddContent: () => void;
  handleClose: () => void;
}

const AddContentModal: React.FC<AddContentModalProps> = ({
  isVisible,
  newContent,
  setNewContent,
  handleAddContent,
  handleClose,
}) => {
  const handleInputChange = (key: keyof IContentItem, value: string) => {
    setNewContent({ ...newContent, [key]: value });
  };

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={handleClose}
      onSwipeComplete={handleClose}
      swipeDirection="down"
      style={styles.bottomModal}
      avoidKeyboard
    >
      <View style={styles.modalView}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Title"
            value={newContent.title}
            onChangeText={(text) => handleInputChange("title", text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Description"
            value={newContent.des}
            onChangeText={(text) => handleInputChange("des", text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Tag"
            value={newContent.tag}
            onChangeText={(text) => handleInputChange("tag", text)}
          />
        </View>
        <TouchableOpacity
          style={styles.modalAddButton}
          onPress={handleAddContent}
        >
          <Text style={styles.modalAddButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  bottomModal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 5,
    padding: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    borderColor: "#E0E0E0",
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 10,
    backgroundColor: "#F5F5F5",
    marginBottom: 10,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
  modalAddButton: {
    backgroundColor: "#007BFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  modalAddButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default AddContentModal;
