import React from 'react'
import { View, StyleSheet, TextInput, Text } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SearchBar = ({ search, onSearchChange, onSearchSubmit }) => {

  return (
    <View style={styles.background}>
      <TextInput
        style={styles.input}
        //size={20}
        placeholder='Search'
        placeholderTextColor="white"
        autoCorrect={false}
        autoCapitalize='none'
        autoCompleteType='off'
        value={search}
        onChangeText={newText => onSearchChange(newText)}
        onEndEditing={() => onSearchSubmit()}
      />
      <FontAwesome 
        name="search" size={24} style={styles.icon} 
        onPress={() => onSearchSubmit()}/>
    </View>
  )
}
const styles = StyleSheet.create({
  background: {
    backgroundColor: 'gray',
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 1,
    height: 40,
    padding: 5,
    margin: 10,
    flexDirection: 'row',
  },
  icon: {
    color: 'white',
    alignSelf: 'center',
    paddingHorizontal: 5,
  },
  input: {
    color: 'white',
    paddingHorizontal: 5,
    flex: 1,
  },

})

export default SearchBar