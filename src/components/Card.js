import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";
import { ImBubbles } from "react-icons/im";
import { Link } from "react-router-dom";


const img_api = "https://image.tmdb.org/t/p/w1280";

const Card = ({ index, video, title, poster_path, overview }) => {
  const [liked, setLiked] = useState(false);
  const [favoredMovie, setFavoredMovie] = useState({});
  const [list, setList] = useState([]);

  const handleClick = () => {
    setLiked(true);
    setFavoredMovie({ title, poster_path });
    setList([...list, favoredMovie]);
    console.log(list);
  };

  return (
    <>
      <div className="movie_card" id={index % 2 === 0 ? "bright" : "tomb"}>
        <div className="info_section">
          <div className="movie_header">
            <img className="locandina" src={img_api + poster_path} />
            <h1>{title}</h1>
            <h4>2017, David Ayer</h4>
            <span className="minutes">117 min</span>
            <p className="type">Action, Crime, Fantasy</p>
          </div>
          <div className="movie_desc">
            <Link to={`/description/${title}`}>Show Details</Link>
<br />
<br />
            <Link to={`/trailor/${title}`}>trailor</Link>
          </div>
          <div className="movie_social">
            <ul>
              <li>
                <FiShare2 className="icons" />
              </li>
              <li>
                <FaHeart
                  className={liked ? "red" : "icons"}
                  onClick={handleClick}
                />
              </li>
              <li>
                <ImBubbles className="icons" />
              </li>
            </ul>
          </div>
        </div>
        <div
          className="blur_back "
          style={{
            background: `url(${img_api + poster_path})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
      </div>
    </>
  );
};

export default Card;
