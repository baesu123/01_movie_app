export default function MovieList({ movies, handleClick, addMovie }) {
  return (
    <>
      {movies.map((movie) => (
        <div className="image-container d-flex m-3" key={movie.imdbID}>
          <img className="img-thumbnail" src={movie.Poster} alt="movie"></img>
          <p>{movie.Title}</p>
          <div
            onClick={() => handleClick(movie)}
            className="overlay d-flex align-items-center justify-content-center"
          >
            <span className="me-2">
              {addMovie ? "선호작 추가 " : "선호작 제거 "}
            </span>
            <span>{addMovie ? "❤️" : "❌"}</span>
          </div>
        </div>
      ))}
    </>
  );
}
