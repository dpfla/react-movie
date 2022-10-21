import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function Movie ({id, cover_image, title, summary, genres}) {
    return(
        <div>
            <img src={cover_image} alt="movie poster"/>
            <h2>
                <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
            <p>{summary}</p>
            {<ul>
                {genres && genres.map(g => <li key={g}>{g}</li>)}
            </ul>}
          </div>
    )
}

Movie.prototype = {
    id: PropTypes.number.isRequired,
    cover_image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string)
}

export default Movie