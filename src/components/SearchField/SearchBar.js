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
    const handlerOnChange = (event) => {
        console.log(event.target.value)
    }
    
    const [title, setTitle] = useState('')

    cosnt [userResults, setUserResults] = useState('')

    return (
        <div>
        <label htmlFor="search">Search a movie you like!</label>
        <input id="search" onChange={handlerOnChange}/>
        </div>
    )
}





export default SearchBar;