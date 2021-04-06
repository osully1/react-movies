const MovieCard = (props) => {
    return (
        <div className="movie-card">
            <img src={`https://image.tmdb.org/t/p/w300${props.movieCardData.poster_path}`}></img>
            <p>{props.movieCardData.title}</p>
        </div>
    )
}

export default MovieCard;