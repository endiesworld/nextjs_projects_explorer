import React from 'react';
import useSWR from 'swr';

import UserCard from './UserCard.js';
import Spinner from './Spinner.js';
import style from './Spinner.module.css';

/*
  API INSTRUCTIONS
  
  This endpoint expects a GET request.
  
  To simulate an error, attach the following
  query parameter: `simulatedError=true`
*/

const ENDPOINT =
  'https://jor-test-api.vercel.app/api/get-current-user';

async function fetcher(endpoint) {
  const response = await fetch(endpoint);
  const json = await response.json();

  if (!json.ok) {
    throw json;
  }

  return json;
}

function FetchCurrentUser() {
  const { data, error, isLoading } = useSWR(ENDPOINT, fetcher)
  if (isLoading){
    return <Spinner />
  }
  if (error){
    return <p className={style.wrapper}> Something went wrong!</p>
  }
  return (
    <UserCard name={data.user.name} email={data.user.email}  />
  );
}

export default FetchCurrentUser;
