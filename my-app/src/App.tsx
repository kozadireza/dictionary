import { useEffect, useState } from "react";
import { wordDefinitionSearch } from "../utils/apiRequest";
import "./App.css";
import React from "react";
import WordDefinition from "./components/wordDefiniton";

function App() {
  interface Definitions {
    definition: string;
    example?: string;
    synonyms: string[];
    antonyms: string[];
  }

  interface Meaning {
    partOfSpeech: string;
    definitions: Definitions[];
    synonyms: string[];
    antonyms: string[];
  }

  const [meanings, setMeanings] = useState<Meaning[] | null>(null);
  const [word, setWord] = useState<string | null>(null);
  const [input, setInput] = useState<string>("");

  function submitSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    async function searchWordDefinition() {
      const result = await wordDefinitionSearch(input);
      setMeanings(result.meanings);
      setWord(result.word);
    }
    searchWordDefinition();
    setInput("");
  }
  // useEffect(() => {}, [searchData]);
  return (
    <>
      <div>
        <div
          style={{
            borderBottomColor: "grey",
            borderBottomStyle: "solid",
            borderBottomWidth: "3px",
          }}
        >
          <h2>LexiFind — Discover the meaning of any word</h2>
        </div>
        <div className="searchContainer">
          <form onSubmit={submitSearch}>
            <label htmlFor="">Type a word to explore its meaning </label>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit">Search</button>
          </form>
        </div>
        <h1>{word ? word : null}</h1>
        {meanings
          ? meanings.map((definition, index) => {
              return (
                <WordDefinition key={100 - index} definition={definition} />
              );
            })
          : null}
        <h2></h2>
      </div>
    </>
  );
}

export default App;
