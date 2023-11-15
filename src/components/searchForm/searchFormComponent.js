import React, {useState} from 'react';

import SearchFormInput from './searchFormInput';
import SearchResult from './searchResult';

function SearchFormParent() {
    const [searchTerm, setSearchTerm] = useState('');
    return (
        <div  style={{
            width: "45%",
            height: "50vh",
            border: "thick double #32a1ce",
            position: "relative",
            display: "flex",
            flexDirection: "column",

        }}>
        <header style={{
            width: "100%",
            height: "20%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
        }}>
            <a className="logo" href="/">
            Emmanuel’s Fruits
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