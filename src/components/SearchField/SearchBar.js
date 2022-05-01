import React, { useState } from "react";
// search field

const movieData = [
    {
      id:'i1',
      title: 'Batman Dark Knight',
      awards: '6',
      releaseDate: '2016'
    },{
      id:'i2',
      title: 'Brother Bears',
      awards: '9',
      releaseDate: '2000'
    },{
      id:'i3',
      title: 'Star Wars Phantom Menace',
      awards: '5',
      releaseDate: '2003'
    },{
      id:'i4',
      title: 'Purge Forever',
      awards: '2',
      releaseDate: '2022'
    },
  ]


const SearchBar = () => {
  // search for content in array object
  //  I want to search for the movie titles that are in data
  // I want the user to be able to search find the movie data based of the intial spelling of the movies
 
  // const [title, setTitle] = React.useState('')

  // const [userResults, setUserResults] = React.useState('')

  // const filter = (event) => {
  //   const keyword = event.target.value

  //   if(keyword !== '') {
  //     const result = movieData.filter((movie) => {
  //     return movie.title.toLocaleLowerCase().startsWith(keyword.toLocaleLowerCase())
  //   });
  //   setUserResults(result)

   
  }
   

    return (
        <div>
        <label htmlFor="search">Search a movie you like!</label>
        <input id="search" onChange={handlet}/>
        </div>
    )




}





export default SearchBar;