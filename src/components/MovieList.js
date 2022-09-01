function MovieList(props) {
  const FavouriteComponent = props.favouriteComponent;
  return (
    <>
      {props.movies.map((movie, idx) => {
        return (
          <div
            key={idx}
            className="image-container d-flex justify-content-start m-3"
          >
            <img src={"https://image.tmdb.org/t/p/w300" + movie.poster_path} alt="movie"></img>
            <div
              onClick={() => props.handleFavouritesClick(movie)}
              className="overlay d-flex align-items-center justify-content-center"
            >
              <FavouriteComponent />
            </div>
          </div>
        );
      })}
    </>
  );
}

export default MovieList;
