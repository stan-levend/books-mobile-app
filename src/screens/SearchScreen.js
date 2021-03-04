import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Alert, SafeAreaView } from 'react-native'
import SearchBar from '../components/SearchBar'
import useBooks from '../hooks/useBooks'
import BooksList from '../components/BooksList'
import { ScrollView } from 'react-native-gesture-handler'
import Constants from 'expo-constants';


const SearchScreen = () => {
  const [search, setSearch] = useState('')
  const [getMoviesFromApi, books, error] = useBooks()

  const filterBooksByLength = (length, books) => {
    if (!books) return
    const lowerLimit = 200
    const upperLimit = 500
    let filteredBooks = []

    if (length == 'short')
      filteredBooks = books.filter(book => {
        return (book.volumeInfo.pageCount <= lowerLimit)
      })
    else if (length == 'average')
      filteredBooks = books.filter(book => {
        return (book.volumeInfo.pageCount > lowerLimit && book.volumeInfo.pageCount < upperLimit)
      })
    else if (length == 'long')
      filteredBooks = books.filter(book => {
        return (book.volumeInfo.pageCount >= upperLimit)
      })
    else
      filteredBooks = books.filter(book => {
        return (book.volumeInfo.pageCount == null)
      })
    return filteredBooks
  }

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar
        search={search}
        onSearchChange={newSearchText => setSearch(newSearchText)}
        onSearchSubmit={() => getMoviesFromApi(search)}
      />
      {/* {books.length ? <Text>{books.length}</Text> : null} */}
      {!error ? <ScrollView>
        <BooksList books={filterBooksByLength('short', books)} title={'Short Books'} />
        <BooksList books={filterBooksByLength('average', books)} title={'Average length Books'} />
        <BooksList books={filterBooksByLength('long', books)} title={'Long Books'} />
        <BooksList books={filterBooksByLength('', books)} title={'Unknown length Books'} />
      </ScrollView> : <Text style={styles.error}>{error.message}</Text>}

    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  error: {
    margin: 15,
    color: 'red'
  },
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1
  }
})

export default SearchScreen