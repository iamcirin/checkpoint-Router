import React, { useState } from "react";
import { data } from "../data";
import Card from "../components/Card";

const Movies = () => {
  const [movies, setMovies] = useState(data);
  return (
    <div>
      <div className="App">
        {movies.map((movie, index) => {
          return <Card key={index} {...movie} index={index} />;
        })}
      </div>
    </div>
  );
};

export default Movies;
