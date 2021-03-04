import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import Constants from 'expo-constants';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
  const navigation = useNavigation();

  return <View style={styles.container}>
    <Text>SignUpScreen</Text>
    <Button title='SignUp' onPress={() => navigation.navigate('')}></Button>
    <Button title='Go Login' onPress={() => navigation.navigate('Login')}></Button>
    <Button title='Home' onPress={() => navigation.navigate('Home')}></Button>
  </View>
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
  }
})

export default SignUpScreen