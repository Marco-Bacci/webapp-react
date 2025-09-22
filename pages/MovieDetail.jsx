import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  const fetchMovie = () => {
    axios
      .get(`http://localhost:3000/movies/${id}`)
      .then((resp) => {
        console.log(resp.data);
        setMovie(resp.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(fetchMovie, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2 className="text-center my-3 c-violet fw-bold">Movie Detail</h2>
        </div>
        <div className="row">
          <div className="col-12">


          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
