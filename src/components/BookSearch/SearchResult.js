import React from 'react';
import style from './bookSearch.module.css';

function SearchResult({ result }) {
    console.log(result.coverSrc)
    return (
        <article className={style.search_result}>
        <div className={style.image_container}>
            <img className={style.search_result_img}
            alt=""
            src={result.coverSrc}
            />
        </div>
        <div className={style.description}>
            <p className="name">
            {result.name}
            </p>
            <p className="author">
            By <b>{result.author}</b>
            </p>
            <p className="abstract">
            {result.abstract}
            </p>
        </div>
        </article>
    );
}

export default SearchResult;