import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MediaContext } from "../Context/MediaStore";

export default function Movies() {
  let { getMovie } = useContext(MediaContext);

  return (
    <>
      <div className="title-sec mt-5">
        <Link className="xo text-start" to={"/movies"}>
          <h2 className="ms-4 fs-4 m-1 ">Home . movies</h2>
        </Link>
      </div>
      <div className="row my-3 gy-3">
        <div className="col-lg-4 col-md-6 col-sm-8">
          <div className="bord w-25 mb-4"></div>
          <h2>Trnding</h2>
          <h2>movis</h2>
          <h2>to watch now</h2>
          <span>most watching movies by days</span>
          <div className="bord w-100 mt-4"></div>
        </div>
        {getMovie.map((items, index) => (
          <div key={index} className="col-lg-2 col-md-3 col-sm-4 ">
            <Link
              className="nav-link"
              to={`/details/${items.id}/${items.media_type}`}
            >
              <div className="items position-relative">
                <img
                  className="w-100"
                  src={`https://image.tmdb.org/t/p/original${items.poster_path}`}
                  alt=""
                />
                <span className="position-absolute end-0 top-0 bg-info p-2">
                  {items.vote_average.toFixed(1)}
                </span>
                <h2 className="h6">
                  {items.title}
                  {items.name}
                </h2>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
