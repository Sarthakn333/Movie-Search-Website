import React from 'react'
import { globalUseContext } from './context';
import { NavLink } from 'react-router-dom';

const Movies = ()=>{
    const {movie,isLoading} = globalUseContext();
    if(isLoading){
        return(
            <div >
            <div className='loading'>Loading...</div>
        </div>
        )
    }
    return (
        <>
        <section className='movie-page'>
            <div className='container grid grid-4-col'>
        { movie.map((currMovie)=>{
            const{Title,Poster,imdbID} = currMovie;
           const movieName = Title.substring(0,20)
          return(
            <NavLink to={`movie/${imdbID}`} key={imdbID}>
            <div className='card'>
                <div className='card-info'>
                 <h2>{movieName.length >=20 ? `${movieName}...` : movieName}</h2>
                    <img src={Poster} alt={imdbID}></img>
                </div>
            </div>
            </NavLink>
          )
        })}
         </div>
        </section>
        </>
    )
}
export default Movies;
