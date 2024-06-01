
import "./movies-card.css"
import poster from "../assets/poster1.jpg"



export default function MoviesCard({ movie, titel, description, url, ratings }) {

    return (
        <>
            <div className='movie'>
                <div className="movie-img" >
                  <img src={url} alt={movie} />
                </div>
                <div className="movie-detail">
                    <img src= {poster} alt="" />
                    <h2>{movie}</h2>
                    <p>{titel}</p>
                    <p>{description}</p>
                    <h5>⭐⭐⭐ {ratings}</h5>
                </div>
            </div>
        </>
    )


}