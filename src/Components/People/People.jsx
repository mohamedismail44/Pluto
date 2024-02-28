import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MediaContext } from "../Context/MediaStore";

export default function People() {
  let { getPepole } = useContext(MediaContext);

  return (
    <>
      <div className="title-sec mt-5">
        <Link className="xo text-start" to={"/people"}>
          <h2 className="ms-4 fs-4 m-1 ">Home - People</h2>
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
        {getPepole.map((items, index) => (
          <div key={index} className="col-lg-2 col-md-3 col-sm-4 ">
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
    </>
  );
}
