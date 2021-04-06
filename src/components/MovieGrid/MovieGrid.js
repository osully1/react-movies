import MovieCard from '../MovieCard/MovieCard'

const MovieGrid = (props) => {
    return props.currentMovieData.map((movie, idx) => {
        return(
            <MovieCard movieCardData={movie} key={idx}/>
        )
    })
}

export default MovieGrid;