import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export let MediaContext = createContext(null);
export default function MediaContextProvider(props) {
  const [getMovie, setGetMovie] = useState([]);
  const [getPepole, setGetPepole] = useState([]);
  const [getTvShows, setGetTvShows] = useState([]);

  let getTrindingItems = async (mediaType, collback) => {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=c636ed7787cc302d96bf88ccf334e0d8`
    );
    collback(data.results);
  };

  useEffect(() => {
    getTrindingItems("movie", setGetMovie);
    getTrindingItems("person", setGetPepole);
    getTrindingItems("tv", setGetTvShows);
  }, []);

  return (
    <MediaContext.Provider value={{ getMovie, getPepole, getTvShows }}>
      {props.children}
    </MediaContext.Provider>
  );
}
