import "./searchFormCSS.css"


function SearchFormInput({searchTerm, setSearchTerm}) {
    
    function runSearch(event) {
        event.preventDefault();
        
        // Actual search stuff omitted from
        // this example.
    }
    
    return (
        <form onSubmit={runSearch} className="form-container">
        <label
            className="visually-hidden"
            htmlFor="search-input"
        >
            Search term:
        </label>
        <input
            type="text"
            id="search-input"
            className="form-search-input"
            value={searchTerm}
            onChange={event => {
            setSearchTerm(event.target.value);
            }}
        />
        <button>
            Search
        </button>
        </form>
    );
}

export default SearchFormInput;