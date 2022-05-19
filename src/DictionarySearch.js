import React, { useState } from "react";
import axios from "axios";

export default function DictionarySearch() {
  let [searchTerm, setSearchTerm] = useState("");

  function handleResponse(response) {
    let word = response.data[0].word;
    let noun = response.data[0].meanings[0].partOfSpeech;
    let verb = response.data[0].meanings[1].partOfSpeech;
    let interjection = response.data[0].meanings[2].partOfSpeech;
    let textAudio = response.data[0].phonetics[1];
    // console.log(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSearchTerm(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <div className="dictionarySearch">
      <h1>Dictionary App</h1>
      <form onSubmit={search}>
        <input
          type="search"
          className="dictionary"
          placeholder="Type a word..."
          onChange={handleSearchTerm}
        ></input>
        <span className="search-btn" onClick={search}>
          🔍
        </span>
      </form>
    </div>
  );
}
