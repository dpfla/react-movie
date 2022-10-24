import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import style from "../css/Movie.module.css";

function Movie ({id, cover_image, title, summary, genres}) {
    return(
        <div className={style.movie}>
            <div className={style.image}>
                <img src={cover_image} alt="movie poster"/>

                <div className={style.parah}>
                    <Link className={style.link} to={`/movie/${id}`}>{title}</Link>
                    <div>{summary.length > 150 ? `${summary.slice(0, 150)}...`:summary}</div>
                    
                </div>
            </div>
            
            <h2>
                <Link className={style.title} to={`/movie/${id}`}>{title}</Link>
            </h2>
            
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