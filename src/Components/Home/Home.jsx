import React, { useContext } from "react";
import { MediaContext } from "../Context/MediaStore";
import { Link } from "react-router-dom";

export default function Home() {
  let { getMovie } = useContext(MediaContext);
  let { getTvShows } = useContext(MediaContext);
  let { getPepole } = useContext(MediaContext);

  return (
    <>
      {/* ...................................movies ...............................*/}
      <div className="title-sec mt-5">
        <Link className="xo" to={"/movies"}>
          <h2>movies</h2>
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
        {getMovie.slice(0, 10).map((items, index) => (
          <div key={index} className="col-lg-2 col-md-3 col-sm-4">
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
      <div className="show-more text-center ">
        <Link
          className="xo btn btn-outline-info text-info px-5 rounded-pill "
          to={"/movies"}
        >
          <h4 className="fw-semibold">show more</h4>
        </Link>
      </div>
      {/* ...................................end movies ...............................*/}
      {/* ...................................TvShows ...............................*/}
      <div className="title-sec mt-5">
        <Link className="xo" to={"/tvshows"}>
          <h2>Tv shows</h2>
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
        {getTvShows.slice(0, 10).map((items, index) => (
          <div key={index} className="col-lg-2 col-md-3 col-sm-4">
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
      <div className="show-more text-center ">
        <Link
          className="xo btn btn-outline-info text-info px-5 rounded-pill "
          to={"/tvshows"}
        >
          <h4 className="fw-semibold">show more</h4>
        </Link>
      </div>
      {/* ...................................end TvShows ...............................*/}
      {/* ...................................Pepole ...............................*/}
      <div className="title-sec mt-5">
        <Link className="xo" to={"/people"}>
          <h2>People</h2>
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
        {getPepole.slice(0, 10).map((items, index) => (
          <div key={index} className="col-lg-2 col-md-3 col-sm-4">
            <Link
              className="nav-link"
              to={`/details/${items.id}/${items.media_type}`}
            >
              <div className="items position-relative">
                {items.profile_path ? (
                  <img
                    className="w-100"
                    src={`https://image.tmdb.org/t/p/original${items.profile_path}`}
                    alt=""
                  />
                ) : (
                  <img
                    className="w-100"
                    src={"/src/image/image not found.jpg"}
                    alt=""
                  />
                )}
                <h2 className="h6 mt-2">
                  {items.title}
                  {items.name}
                </h2>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="show-more text-center ">
        <Link
          className="xo btn btn-outline-info text-info px-5 rounded-pill "
          to={"/people"}
        >
          <h4 className="fw-semibold">show more</h4>
        </Link>
      </div>
      {/* ...................................end Pepole ...............................*/}
    </>
  );
}
