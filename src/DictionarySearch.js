import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function DictionarySearch() {
  let [searchTerm, setSearchTerm] = useState("dictionary");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState("");
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handleResponsePexels(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`;
    axios.get(apiUrl).then(handleResponse);

    const pexelsApiKey =
      "563492ad6f91700001000001ea08491625914e17ac77af6d4470fad2";
    let pexelsUrl = `https://api.pexels.com/v1/search?query=${searchTerm}&per_page=6`;
    axios
      .get(pexelsUrl, { headers: { Authorization: `Bearer ${pexelsApiKey}` } })
      .then(handleResponsePexels);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleSearchTerm(event) {
    setSearchTerm(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="dictionarySearch">
        <h1>Dictionary App</h1>
        <section>
          <form onSubmit={handleSubmit}>
            <span className="WordSearch">What are you looking for?</span>
            <input
              type="search"
              className="dictionary form"
              placeholder="Type a word..."
              onChange={handleSearchTerm}
            ></input>
            <span className="search-btn" onClick={search}>
              🔍
            </span>
          </form>
        </section>
        <Results results={results} />
        <br />
        <Photos photos={photos} />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/elisabeth-wolfram-8736441a8/"
            target="_blank"
            rel="noreferrer"
          >
            Elisabeth Wolfram
          </a>{" "}
          and is <a href="">open-sourced on GitHub</a> and hosted on Netlify
        </footer>
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
