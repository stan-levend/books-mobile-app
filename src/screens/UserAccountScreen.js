import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import Constants from 'expo-constants';
import { useNavigation } from '@react-navigation/native';

const UserAccountScreen = () => {
  const navigation = useNavigation();

  return <View style={styles.container}>
    <Text>UserAccountScreen</Text>
    <Button title='LogOut' onPress={() => navigation.navigate('Home')}></Button>
  </View>
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
  }
})

export default UserAccountScreen