import { Notes } from "@/server/apis/notes";
import React, { useEffect } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface AddButtonProps {
  onPress: () => void;
}

const AddButton: React.FC<AddButtonProps> = ({ onPress }) => {
  useEffect(() => {
    Notes()
      .then((data) => console.log(data))
      .catch((err: Error) => console.log(err.message));
  }, []);

  return (
    <TouchableOpacity style={styles.addButton} onPress={onPress}>
      <Text style={styles.addButtonText}>+</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  addButton: {
    position: "absolute",
    bottom: 30,
    right: 30,
    backgroundColor: "#007BFF",
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  addButtonText: {
    color: "#fff",
    fontSize: 30,
  },
});

export default AddButton;
