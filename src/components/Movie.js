import PropTypes from "prop-types";
import "./Movie.css";
function Movie(props) {
  return (
    <div className="movie_data">
      <img
        className="movie_poster"
        width={100}
        src={`https://image.tmdb.org/t/p/original/${props.poster_path}`}
        alt="loading"
      ></img>
      <h3 className="movie_title">{props.title}</h3>
      <div className="movie_overview">{props.overview.slice(0, 100)}</div>
      <div className="movie_vote">{props.vote_average}</div>
      <div className="movie_adult">{props.adult.toString()}</div>
      <div className="movie_lang">{props.original_language}</div>
      <div className="movie_date">{props.date}</div>
      <div className="movie_id">영화ID :{props.id}</div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
  adult: PropTypes.bool.isRequired,
  original_language: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Movie;
