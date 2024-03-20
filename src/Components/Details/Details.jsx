import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Details() {
  const [itemsDetails, setItemsDetails] = useState({});
  let Params = useParams();

  let getItemsDetails = async () => {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/${Params.dataType}/${Params.id}?api_key=c636ed7787cc302d96bf88ccf334e0d8`
    );
    setItemsDetails(data);
  };

  useEffect(() => {
    getItemsDetails();
  }, []);

  return (
    <>
      <div className="row my-5">
        <div className="col-md-4">
          {Params.dataType === "person" ? (
            <img
              className="w-100"
              src={`https://image.tmdb.org/t/p/original${itemsDetails.profile_path}`}
              alt=""
            />
          ) : (
            <img
              className="w-100"
              src={`https://image.tmdb.org/t/p/original${itemsDetails.poster_path}`}
              alt=""
            />
          )}
        </div>
        <div className="col-md-8">
          <h2>
            {itemsDetails.title}
            {itemsDetails.name}
          </h2>
          <p className="my-3 text-info">
            {itemsDetails.overview}
            {itemsDetails.biography}
          </p>
        </div>
      </div>
    </>
  );
}
