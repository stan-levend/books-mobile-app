import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import Constants from 'expo-constants';
// import { useTranslation } from 'react-i18next';
// import '../localization/i18n'
import { t } from '../localization/i18n';
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {
  const navigation = useNavigation();

  return <View style={styles.container}>
    <Text>{t('Welcome')}</Text>
    <Text>{t('Testing the language')}</Text>
    <Button title='SignUp' onPress={() => navigation.navigate('SignUp')}></Button>
    <Button title='Login' onPress={() => navigation.navigate('Login')}></Button>
  </View>
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
  }
})

export default WelcomeScreen