// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
// import axios from "axios";

// const URL = "https://api.themoviedb.org/3";
// const API_KEY = "e666a2cfa890d8a2bb19db4ca078ae7f";

function Movie() {
//   const { movieId } = useParams();
//   const [movie, setMovie] = useState({});

//   axios
//     .get(`${URL}`, {
//       params: {
//         api_key: API_KEY,
//         movie_id: movieId,
//       },
//     })
//     .then((res) => setMovie(res.data.results));

//   useEffect(() => {}, []);
  return (
    <div>
        <h1>Success!</h1>
      {/* <h1>{movie.name}</h1>
      <p>{movie.overview}</p> */}
    </div>
  );
}

export default Movie;
