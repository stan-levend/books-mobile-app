import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const BookDetail = ({ book }) => {
  //const authors = book.volumeInfo.authors
  //const images = book.volumeInfo.imageLinks
  //const pages = book.volumeInfo.pageCount
  // const category = book.volumeInfo.categories
  // const publishedDate = book.volumeInfo.publishedDate
  // console.log(category)
  //console.log(images)
  //console.log(images.thumbnail)
  return (
    <View style={styles.container}>
      {book.volumeInfo.imageLinks ? <Image style={styles.image} source={{ uri: `${book.volumeInfo.imageLinks.thumbnail}` }} />
        : <Image style={styles.image} source={require('../images/image-placeholder.jpg')} />}
      <View style={styles.content}>
        {book.volumeInfo.categories ? <Text style={styles.category}>{book.volumeInfo.categories[0]}</Text> : null}
        {book.volumeInfo.publishedDate ? <Text style={styles.title}>{book.volumeInfo.title} - {book.volumeInfo.publishedDate.substring(0, 4)}</Text> : null}
        {book.volumeInfo.authors ? <Text style={styles.author}>{book.volumeInfo.authors[0]}</Text> : null}
        {/* {book.volumeInfo.pageCount ? <Text style={styles.pages}>{book.volumeInfo.pageCount} pages</Text> : null} */}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 280,
    backgroundColor: 'lightgray',
    margin: 15,
    borderRadius: 5,
    flexDirection: 'row',
  },
  content: {
    justifyContent: 'space-between',
    flex: 1,
    padding: 5,
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
  // pages: {
  //   fontSize: 12,
  //   flex: 3
  // },
  category: {
    marginTop: 5,
    color: 'gray'
  }
})

export default BookDetail