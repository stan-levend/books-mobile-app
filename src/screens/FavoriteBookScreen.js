import React, { useState, useEffect } from 'react'
import { View, Image, Text, StyleSheet, TouchableOpacity, Button, Alert } from 'react-native'
import BookDetail from '../components/BookDetail'
import { Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Constants from 'expo-constants';
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'

const baseURL = 'https://www.googleapis.com/books/v1/volumes'

const FavoriteBookScreen = ({ route, navigation }) => {
  const [image, setImage] = useState('https://mrtns.eu/tovar/_l/315/l315272.jpg?v=1587882319')
  // const [book, setBook] = useState({})
  //const id = navigation.getParam('id')
  // const book = navigation.getParam('item')
  // const { book } = route.params
  // console.log(book)
  // const getMovie = async () => {
  //   try {
  //     let response = await fetch(
  //       `${baseURL}/${id}`,
  //     );
  //     let responseJson = await response.json()
  //     console.log('\n', responseJson.volumeInfo)
  //     setBook(responseJson)
  //   } catch (error) {
  //     console.error(error)
  //     setError(error)
  //   }
  // }

  useEffect(() => {
    //getMovie()
  }, [])

  const pickFromGallery = async () => {
    const { granted } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
    if (granted) {
      const data = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        allowsEditing: true,
        aspect: [2, 3]
      })
      console.log(data)
      setImage(data.uri)
    } else {
      Alert.alert("You need to give permissions to access storage.")
    }
  }

  const pickFromCamera = async () => {
    const { granted } = await Permissions.askAsync(Permissions.CAMERA)
    if (granted) {
      const data = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        allowsEditing: true,
        aspect: [2, 3]
      })
      console.log(data)
      setImage(data.uri)
    } else {
      Alert.alert("You need to give permissions to access camera.")
    }
  }

  return <View>
    <Image style={styles.image} source={{ uri: image }} />
    <Button title='Camera' onPress={() => pickFromCamera()} />
    <Button title='Gallery' onPress={() => pickFromGallery()} />
  </View>
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width - 30,
    // height: Dimensions.get('window').height,
    // backgroundColor: 'lightgray',
    margin: 10,
    borderRadius: 5,
    flexDirection: 'column',
  },
  content: {
    justifyContent: 'space-between',
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  author: {
    fontSize: 14,
    flex: 1
  },
  image: {
    margin: 5,
    height: 150,
    width: 100,
    borderRadius: 5
  },
  pages: {
    fontSize: 12,
    flex: 3
  },
  category: {
    marginTop: 5,
    color: 'gray'
  },
  secondaryInfo: {
    textAlign: 'justify'
  },
  secondary: {
    fontSize: 12,
    padding: 10,
  },
  button: {
    backgroundColor: 'green',
    justifyContent: 'center',
    alignContent: 'center',
    marginHorizontal: 10,
    marginTop: 10,
    flex: 1,
    height: 30,
    padding: 5,
    borderRadius: 20,
  },
  buttonText: {
    alignSelf: 'center',
    color: 'white'
  }
})

export default FavoriteBookScreen