import axios from "axios";
import React, { useState } from "react";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleWordChanges(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <h2>What word do you want to look up?</h2>
        <input
          type="search"
          placeholder="search for a word..."
          onChange={handleWordChanges}
        />
      </form>
      <Results results={results} />
    </div>
  );
}
