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
  ] = React.useState(null);

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

      <main>
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
          <div className="search-results">
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


export default BookSearch;
