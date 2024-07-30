import React from "react";
import { TextInput, StyleSheet } from "react-native";

interface SearchBoxProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({
  searchQuery,
  setSearchQuery,
}) => {
  return (
    <TextInput
      style={styles.searchBox}
      placeholder="Search..."
      value={searchQuery}
      onChangeText={setSearchQuery}
    />
  );
};

const styles = StyleSheet.create({
  searchBox: {
    height: 40,
    borderColor: "#E0E0E0",
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    marginBottom: 20,
    backgroundColor: "#F5F5F5",
    fontSize: 16,
  },
});

export default SearchBox;
