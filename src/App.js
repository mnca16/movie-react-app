import React, { useState } from "react";
import SearchBar from "components/SearchField/SearchBar";
import PageHeader from "components/Homepage/PageHeader";
import "./App.css";
import Instructions from "components/Homepage/Instructions";


// const fetchData = async (searchTerm) => {
// const response = await axios.get("http://www.omdbapi.com/", {
//     params: {
//       s: searchTerm,
//     },
//   })};



const App = () => {
return(
  <div>
    <PageHeader/>

    <SearchBar />
  

    <Instructions/>


  </div>
)



}



export default App;