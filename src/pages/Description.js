import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { data } from "../data";

const Description = () => {
    
    const { title } = useParams();
    const [titl, setTitle] = useState('');

  useEffect(() => {
    const item = data.find((el) => {
      return el.title === title;
    });
    setTitle(item.overview);
  }, []);
  return (
    <div className="description">
      <h1>Description</h1>
      <p className="text">{titl}</p>

      <Link to = '/'>back to movie list</Link>
    </div>
  );
};

export default Description;
