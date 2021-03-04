import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import BookDetail from './BookDetail'
import { withNavigation } from 'react-navigation'
import { useNavigation } from '@react-navigation/native';

const BooksList = ({ title, books }) => {
  const navigation = useNavigation();

  return (
    <View>
      {books ? <Text style={styles.title}>{title} - {books.length} results</Text> : null}
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={books}
        keyExtractor={book => book.id}
        renderItem={({ item }) => {
          return <TouchableOpacity onPress={() => navigation.navigate('Book', { book: item })}>
            <BookDetail book={item} />
          </TouchableOpacity>
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    marginHorizontal: 15,
    fontSize: 20
  }
})

// export default withNavigation(BooksList)
export default BooksList