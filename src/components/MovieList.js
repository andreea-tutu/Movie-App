function MovieList(props) {
  return (
    <>
      {props.movies.map((movie, idx) => (
        <div className="image-container d-flex justify-content-start m-3">
          <img src={movie.Poster} alt="movie"></img>
        </div>
      ))}
    </>
  );
}

export default MovieList;
