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
import AntDesign from "@expo/vector-icons/AntDesign";
import { MakeTag } from "@/utils/MakeTag";

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
    if (key === "tag") value = MakeTag(value);

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
            style={styles.titleInput}
            placeholder="Title _"
            value={newContent.title}
            onChangeText={(text) => handleInputChange("title", text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Description _ "
            value={newContent.des}
            onChangeText={(text) => handleInputChange("des", text)}
            multiline
            numberOfLines={4}
            textAlignVertical="top"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="#tag _"
            value={newContent.tag}
            onChangeText={(text) => handleInputChange("tag", text)}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.modalAddButton}
            onPress={handleAddContent}
          >
            <AntDesign name="checkcircleo" size={24} color="black" />
          </TouchableOpacity>
        </View>
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
    padding: 10,
    // alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "100%",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    borderColor: "#E0E0E0",
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    height: "auto",
    minHeight: 40,
    fontSize: 16,
  },
  titleInput: {
    flex: 1,
    height: "auto",
    minHeight: 40,
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonContainer: {
    alignItems: "flex-end",
  },
  modalAddButton: {
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#1b1680",
  },
});

export default AddContentModal;
