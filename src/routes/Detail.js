import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import style from "../css/Detail.module.css";

function Detail() {
    const [ data, setData ] = useState({});
    const { id } = useParams();
    const getMovie = async() => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setData(json.data.movie);
    }
/*
background_image_original, small_cover_image, genres
, medium_cover_image, title_english, runtime, rating, year

*/
    useEffect(() => {
        getMovie();
    }, []);

    return(
        <div className={style.body}>
            <div className={style.wrapper} style={{"backgroundImage": `url(${data.background_image_original})`}}>
                <h1>
                    <Link to="/react-movie/">x</Link>
                </h1>
                <img className={style.poster} src={data.large_cover_image} alt="영화 포스터"/>
                <div className={style.parah}>
                    <p className={style.title}>{data.title_english}</p>
                    <div className={style.etc}>
                        <p className={style.runtime}>상영 길이: {data.runtime}분</p>
                        <p className={style.year}>개봉: {data.year}년</p>
                        <p className={style.ratin}>vud점: {data.rating} / 10</p>
                    </div>
                    <p className={style.genres}>
                        장르: {data.genres && data.genres.map((g) => <span key={g}>{g}</span> )}
                    </p>
                    <p className={style.description}>{data.description_full}</p>
                </div>
            </div>
        </div>
    )
}

export default Detail;