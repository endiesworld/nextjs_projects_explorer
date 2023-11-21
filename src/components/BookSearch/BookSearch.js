import React from 'react';

import TextInput from './TextInput.js';
import SearchResult from './SearchResult.js';
import style from './bookSearch.module.css';

const ENDPOINT =
  'https://jor-test-api.vercel.app/api/book-search';

function BookSearch() {
  const [
    searchTerm,
    setSearchTerm,
  ] = React.useState('');
  const [
    searchResults,
    setSearchResults,
  ] = React.useState([EXAMPLE]);

  // idle | loading | success | error | empty
  const [status, setStatus] = React.useState(
    'idle'
  );

  async function handleSearch(event) {
    event.preventDefault();

    setStatus('loading');

    const url = `${ENDPOINT}?searchTerm=${searchTerm}`;
    const response = await fetch(url);
    const json = await response.json();

    if (json.ok) {
      setSearchResults(json.results);
      setStatus(
        json.results.length > 0
          ? 'success'
          : 'empty'
      );
    } else {
      setStatus('error');
    }
  }

  return (
    <div className={style.wrapper}>
      <header className={style.header}>
        <form onSubmit={handleSearch} className={style.form}>
          <TextInput
            required={true}
            label="Search"
            placeholder="The Fifth Season"
            value={searchTerm}
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
          <button>Go!</button>
        </form>
      </header>

      <main className={style.search_result_container}>
        {status === 'idle' && (
          <p>Welcome to book search!</p>
        )}
        {status === 'loading' && (
          <p>Searching...</p>
        )}
        {status === 'error' && (
          <p>Something went wrong!</p>
        )}
        {status === 'empty' && (
          <p>No results</p>
        )}
        {status === 'success' && (
          <div className={style.search_results}>
            <h2>Search Results:</h2>
            {searchResults?.map((result) => (
              <SearchResult
                key={result.isbn}
                result={result}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

const EXAMPLE = {
  isbn: '9781473621442',
  name: 'A Closed and Common Orbit',
  author: 'Becky Chambers',
  coverSrc: 'https://sandpack-bundler.vercel.app/img/book-covers/common-orbit.jpg',
  abstract:
    "Lovelace was once merely a ship's artificial intelligence. When she wakes up in an new body, following a total system shut-down and reboot, she has no memory of what came before. As Lovelace learns to negotiate the universe and discover who she is, she makes friends with Pepper, an excitable engineer, who's determined to help her learn and grow.",
};


export default BookSearch;
