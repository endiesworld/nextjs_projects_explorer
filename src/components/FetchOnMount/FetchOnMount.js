import React from 'react';
import useSWR from 'swr'; //Stale while revalidated

import style from './fetch.module.css';

const ENDPOINT =
  'https://jor-test-api.vercel.app/api/get-temperature';

async function fetcher(endpoint) {
  const response = await fetch(endpoint);
  const json = await response.json();
  
  return json;
}

function FetchOnMount() {
  const { data, error } = useSWR(ENDPOINT, fetcher);
  
  console.log(data, error);
  
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
