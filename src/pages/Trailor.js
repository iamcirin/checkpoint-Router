import React, {useState, useEffect} from 'react';

import { Link, useParams } from "react-router-dom";
import { data } from "../data";
 

const Trailor = () => {
    const {video} = useParams()
    const [film, setFilm] = useState('')

    useEffect(()=>{
        const newMovie = data.find(el =>{
            return el.title === video
        })
        setFilm(newMovie.video)
    }, [])
  return (
      
    <div className="App">
      <h3>
        Trailor
      </h3>
      <iframe width="560" height="315" src={`https://www.youtube.com/embed/${film}`} 
       title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

       <Link to = '/'>back to homr</Link>
    </div>
  );
}
 


export default Trailor