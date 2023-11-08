import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';

const SearchBar = ({ search, onSearchChange, onSearchSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <AntDesign name="search1" style={styles.iconStyle} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder="Search"
        value={search}
        onChangeText={onSearchChange}
        onEndEditing={onSearchSubmit}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#e4e4e4',
    height: 50,
    borderRadius: 15,
    marginTop: 15,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginBottom: 10,
  },
  iconStyle: {
    color: '#000',
    fontSize: 36,
    alignSelf: 'center',
    marginHorizontal: 15,
  },
  inputStyle: {
    flex: 1,
    fontSize: 20,
  },
});
