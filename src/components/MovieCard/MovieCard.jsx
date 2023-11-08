import { Link } from "react-router-dom";

export default function MovieCard(props) {
  return (
    <>
      <Link to={`/movies/${props.movie.title}`}>
        <div>
          <div>
            <h1>{props.movie.title}</h1>
            <h4>Released: {props.movie.release_date}</h4>
          </div>
        </div>
      </Link>
    </>
  );
}