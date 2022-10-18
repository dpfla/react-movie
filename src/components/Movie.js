import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function Movie ({cover_image, title, summary, genres}) {
    return(
        <div>
            <img src={cover_image} alt="movie poster"/>
            <h2>
                <Link to="/movie">{title}</Link>
            </h2>
            <p>{summary}</p>
            {<ul>
                {genres && genres.map(g => <li key={g}>{g}</li>)}
            </ul>}
          </div>
    )
}

Movie.prototype = {
    cover_image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string)
}

export default Movie