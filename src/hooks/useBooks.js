import React, { useEffect, useState } from 'react'

const baseURL = 'https://www.googleapis.com/books/v1/volumes'
const API_key = 'AIzaSyAnu71GtPO5IZXR9BGHM9jumZbE0_b2T3U'

export default () => {
  const [books, setBooks] = useState([])
  const [error, setError] = useState('')

  const getMoviesFromApi = async (query) => {
    const updatedQuery = query.trim().replace(/\s/g, '+')
    try {
      let response = await fetch(
        `${baseURL}?q=${updatedQuery}&key=${API_key}&maxResults=${30}`,
      );
      let responseJson = await response.json()
      //console.log('\n', responseJson.items)
      setBooks(responseJson.items)
    } catch (error) {
      console.error(error)
      setError(error)
    }
  }

  useEffect(() => {
    getMoviesFromApi('Nesbo')
  }, [])

  return [getMoviesFromApi, books, error]
}
