import React from 'react'
import { useParams, NavLink} from 'react-router-dom';
import {useState,useEffect} from 'react';
import { API_URL } from './context';

const SingleMovie = ()=>{
    const{id} = useParams();
    const[isLoading,setIsLoading] = useState(true)
    const [movie,setMovie] = useState("")

     const getMovies = async(url) =>{
        setIsLoading(true);
         try{ 
      const res = await fetch(url);
      const data = await res.json()
      console.log(data)
      if(data.Response === 'True'){
         setIsLoading(false)
         setMovie(data)
         setIsError({
             show: false,
         })
      }
         }catch(Error){
           console.log(Error)
         } 
     }
     useEffect(()=>{
        let timerOut = setTimeout(()=>{
            getMovies(`${API_URL}&i=${id}`) 
        },1000)
        return () => clearTimeout(timerOut)
       },[id])
    
    if(isLoading){
        return(
            <div className='movie-section app-correction'>
                <div className='loading'>Loading...</div>
            </div>
        )
    }
  return (
      <section className='movie-section app-correction'>
        <div className='movie-card'>
            <figure>
                <img src={movie.Poster} alt=''></img>
            </figure>
            <div className='card-content'>
                <p className='title'>{movie.Title}</p>
                <p className='card-text'>{movie.Released}</p>
                <p className='card-text'>{movie.Genre}</p>
                <p className='card-text'>{movie.imdbRating}</p>
                <p className='card-text'>{movie.Country}</p>
                <NavLink to={'/'} className='back-btn'>Go Back</NavLink>
            </div>
        </div>
      </section>
  )
}
export default SingleMovie;
