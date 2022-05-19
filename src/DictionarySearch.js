import React, { useState } from "react";
import axios from "axios";

export default function DictionarySearch() {
  let [searchTerm, setSearchTerm] = useState("");
  let [results, setResults] = useState("");

  function handleResponse(response) {
    // let word = response.data[0].word;
    // let defnition1 = response.data[0].meanings[0].definitions[0].definition;
    // let defnition2 = response.data[0].meanings[0].definitions[1].definition;
    // let defnition3 = response.data[0].meanings[0].definitions[2].definition;
    // let example1 = response.data[0].meanings[0].definitions[0].example;
    // let example2 = response.data[0].meanings[0].definitions[1].example;
    // let example3 = response.data[0].meanings[0].definitions[2].example;
    // let synonym1 = response.data[0].meanings[0].synonyms[0];
    // let synonym2 = response.data[0].meanings[0].synonyms[1];
    // let synonym3 = response.data[0].meanings[0].synonyms[2];
    // let synonym1 = response.data[0].meanings[1].synonyms[0];
    // let synonym2 = response.data[0].meanings[1].synonyms[1];
    // let synonym3 = response.data[0].meanings[1].synonyms[2];
    // let noun = response.data[0].meanings[0].partOfSpeech;
    // let verb = response.data[0].meanings[1].partOfSpeech;
    // let interjection = response.data[0].meanings[2].partOfSpeech;
    // let audio = response.data[0].phonetics[0];
    // let text = response.data[0].phonetics[2];
    // console.log(response.data[0].meanings[1].synonyms[0]);
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
