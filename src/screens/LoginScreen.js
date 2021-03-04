import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import Constants from 'expo-constants';
import { useNavigation } from '@react-navigation/native';


const LoginScreen = () => {
  const navigation = useNavigation();

  return <View style={styles.container}>
    <Text>SignInScreen</Text>
    <Button title='SignUp' onPress={() => navigation.navigate('SignUp')}></Button>
    <Button title='Login' onPress={() => navigation.navigate('BottomTab')}></Button>
    <Button title='Home' onPress={() => navigation.navigate('Home')}></Button>
  </View>
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
  }
})

export default LoginScreen