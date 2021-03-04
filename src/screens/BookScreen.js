import React, { useState, useEffect } from 'react'
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native'
import BookDetail from '../components/BookDetail'
import { Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Constants from 'expo-constants';
import * as Linking from 'expo-linking';
import { Link } from '@react-navigation/native';

const baseURL = 'https://www.googleapis.com/books/v1/volumes'

const BookScreen = ({ route, navigation }) => {
  // const [book, setBook] = useState({})
  //const id = navigation.getParam('id')
  // const book = navigation.getParam('item')
  const { book } = route.params
  console.log(book)
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


  return <View>
    <ScrollView>
      <View style={styles.container}>
        <View style={{ flexDirection: "row" }}>
          {book.volumeInfo.imageLinks ? <Image style={styles.image} source={{ uri: `${book.volumeInfo.imageLinks.thumbnail}` }} />
            : <Image style={styles.image} source={require('../images/image-placeholder.jpg')} />}
          <View style={{ flex: 1 }}>
            {book.volumeInfo.categories ? <Text style={styles.category}>{book.volumeInfo.categories[0]}</Text> : null}
            {book.volumeInfo.publishedDate ? <Text style={styles.title}>{book.volumeInfo.title} - {book.volumeInfo.publishedDate.substring(0, 4)}</Text> : null}
            {book.volumeInfo.authors ? <Text style={styles.author}>{book.volumeInfo.authors[0]}</Text> : null}
            {book.volumeInfo.pageCount ? <Text style={styles.pages}>{book.volumeInfo.pageCount} pages</Text> : null}
            {book.volumeInfo.averageRating ? <Text style={styles.pages}>Average rating: {book.volumeInfo.averageRating}</Text>
              : null}
            {book.saleInfo.retailPrice ? <Text style={styles.pages}>Retail price: {book.saleInfo.retailPrice.amount} {book.saleInfo.retailPrice.currencyCode} </Text>
              : <Text style={styles.pages}>No available prices found.</Text>}
            {book.saleInfo.buyLink
              ? <TouchableOpacity style={styles.button} onPress={() => Linking.openURL(`${book.saleInfo.buyLink}`)}>
                <Text style={styles.buttonText}>Buy this book</Text>
              </TouchableOpacity>
              : null}
          </View>
        </View>
        <View style={styles.secondaryInfo}>
          <Text style={{ marginHorizontal: 10, marginTop: 10, fontSize: 14, fontWeight: 'bold', }}>Description:</Text>
          <Text style={styles.secondary}>{book.volumeInfo.description}</Text>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Add to favourites</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
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

export default BookScreen