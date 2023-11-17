import React from 'react';
import useSWR from 'swr'; //Stale while revalidated

import style from './fetch.module.css';

const ENDPOINT =
  'https://jor-test-api.vercel.app/api/get-temperature';


// Remember: we manage the network request! Our fetcher function is responsible for retrieving the data, and 
// passing it along to SWR. If we want this to count as an error, we need to throw it:

async function fetcher(endpoint) {
  const response = await fetch(endpoint);
  const json = await response.json();

  if (!json.ok) {
    throw json;
  }

  return json;
}

function FetchOnMount() {
  const { data, isLoading, error } = useSWR(ENDPOINT, fetcher);

  if (isLoading) {
    return <p className={style.wrapper}>Loading…</p>;
  }

  if (error) {
    return <p className={style.wrapper}>Something's gone wrong</p>;
  }
  
  return (
    <p className={style.wrapper}>
      Current temperature:
      {typeof data?.temperature === 'number' && (
        <span className={style.temperature}>
          {data.temperature}°C
        </span>
      )}
    </p>
  );
}

export default FetchOnMount;
