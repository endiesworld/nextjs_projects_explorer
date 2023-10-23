import React, {useState} from 'react';

import SearchFormInput from './searchFormInput';
import SearchResult from './searchResult';

function SearchFormParent() {
    const [searchTerm, setSearchTerm] = useState('');
    return (
        <div className= 'wrapper' style={{
            width: "45%",
            height: "50vh",
            border: "thick double #32a1ce"
        }}>
        <header>
            <a className="logo" href="/">
            Wanda’s Fruits
            </a>
            <SearchFormInput searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        </header>
        <main>
            <SearchResult searchTerm={searchTerm}/>
        </main>
        </div>
    );
}

export default SearchFormParent ;