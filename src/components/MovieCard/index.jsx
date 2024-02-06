import "./styles.css"
import {PropTypes} from "prop-types"

const MovieCard = ({
    id,title,genre,releaseYear,rating,img
}) => {
    return (
        <section className="MovieCardContainer background" id={id}>
            <article className="MovieCard">
                <img src={img}  />
                {/* <img src="https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg" alt="poster from {title}" /> */}
                <h2>Nome: {title}</h2>
                <p>Genero: {genre}</p>
                <p>Ano: {releaseYear}</p>
                <p>Nota: {rating}</p>
            </article>
        </section>
    )
}

MovieCard.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseYear: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired
}

export {MovieCard}
