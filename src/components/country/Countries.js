import React, { useState, useEffect } from "react"
import useFetch from "../useFetch";
import Loading from "../loading";

export default function Countries() {
  const url = "https://restcountries.com/v3.1/all";
  const { data, loading } = useFetch(url); //getting data by custom hook, and Object destructuring to save data and loading state

  console.log("After: ", data);
  return <div>
    {loading ?
      (<div><h1>List of all countries</h1>
        {data.map((item) => { return <div>{item.name.common}</div> })}
      </div>)
      :
      (<Loading />)}
  </div>;

}
