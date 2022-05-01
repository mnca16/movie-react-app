import React, { useState, useEffect } from "react";
import MovieData from "./MovieData";
import axios from "axios";
// search field

const SearchBar = () => {
<<<<<<< HEAD
  const [searchInput, setSearchInput] = useState("");
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    // axios
    //   .get("http://www.omdbapi.com/", {
    //     params: {
    //       // personal key needed to use api, 1000 data collection attempts a day
    //       apikey: "15385f9a",
    //     },
    //   })
    //   .then((response) => {
    //     setMovieData(response.data);
    //   });
    axios.get("https://www.swapi.tech/api/people/").then((response) => {
      setMovieData(response.data);
      console.log(response); //causes infinite data collection
    }); // the [] prevents the issue above
  }, []);
=======
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
   
>>>>>>> main

  const searchMovies = (searchValue) => {
    // const movieData = searchValue.target.value;
    // console.log(searchValue.target.value);
    setSearchInput(searchValue);
    const filteredData = movieData.filter((movie) => {
      return Object.values(movie)
        .join("")
        .toLocaleLowerCase()
        .includes(searchInput.toLocaleLowerCase());
    });
    console.log(searchValue); //testing functionality of search
    console.log(filteredData);
  };

  return (
    <div>
      <div className="search-field">
        <label htmlFor="search">Search a movie you like!</label>
<<<<<<< HEAD
        <input
          type="search"
          onChange={(event) => searchMovies(event.target.value)}
          // onChange={searchMovies}
          className="input-field"
        />
        <span>
          <button type="button">Enter</button>
        </span>
      </div>
=======
        <input id="search" onChange={handlet}/>
        </div>
    )




}
>>>>>>> main

      {/* <div className="movie-list">
        {userResults && userResults.legnth > 0 ? (
          userResults.map((movie) => (
            <li key={movie.id} className="movie">
              <span>{movie.id}</span>
              <span>{movie.title}</span>
            </li>
          ))
        ) : (
          <h1>No Results Discovered</h1>
        )}
      </div> */}
    </div>
  );
};

export default SearchBar;
