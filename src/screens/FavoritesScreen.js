import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Constants from 'expo-constants';
import { FontAwesome } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

const FavoritesScreen = () => {

  return <View style={styles.container}>
    <Text>Favorites</Text>
  </View>
}

FavoritesScreen.navigationOptions = () => {
  return {
    headerShown: false,
    tabBarLabel: "Saved Books",
    tabBarIcon: ({ tintColor }) => (
      <Fontisto name="favorite" size={24} color="black" />
    ),
    showIcon: true,
  };
};

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
  }
})

export default FavoritesScreen