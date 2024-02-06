import { MovieCard } from "../MovieCard";
import {PropTypes} from "prop-types"
import "./styles.css"

const MovieList = ({movies}) => {
    // console.log(movies)
    return(
        <main className="movielist backgroundList">
            {movies.map(({imdbID,Title,genre,Year,rating,Poster}) => 
                    <MovieCard
                    key={imdbID}
                    title={Title}
                    genre={genre}
                    releaseYear={Year}
                    rating={rating}
                    img={Poster}
                     />)}
                    {/* {movies.map(({id,title,genre,releaseYear,rating,img}) => 
                    <MovieCard
                    key={id}
                    id={id}
                    title={title}
                    genre={genre}
                    releaseYear={releaseYear}
                    rating={rating}
                    img={img}
                     />)} */}
        </main>
    )
}

MovieList.propTypes = {
    movies: PropTypes.array.isRequired
}

export {MovieList}