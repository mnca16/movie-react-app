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
    const handlerOnChange = (event) => {
        const result = movieData.filter((movie) => {
          // want to get user input not static code
          movie.title.startsWith(event.target.value);
          //console.log(movie.title);
        })


        console.log(`result on the filter method => ${result}`);
    }
    
    const [title, setTitle] = React.useState('')

    const [userResults, setUserResults] = React.useState('')

    return (
        <div>
        <label htmlFor="search">Search a movie you like!</label>
        <input id="search" onChange={handlerOnChange}/>
        </div>
    )




}





export default SearchBar;