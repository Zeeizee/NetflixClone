import React,{useState,useEffect} from 'react'
import axios from './axios';
import "./Row.css";
import YouTube from 'react-youtube';


function Row(props) {
    const baseURL="https://image.tmdb.org/t/p/original/"
    const [movies,setMovies]=useState([]);
    const [traileUrl,setTraileUrl]=useState("");
    useEffect(()=>{
        async function fetchData(){
            const request=await axios.get(props.fetchURL);
            setMovies(request.data.results);
            return request;
        }

        fetchData();
        },[props.fetchURL]);
        const opts={
            height:"390",
            width:"100%",
            playVars:{
                autoplay:1,
            },

        }
        const handleClick=(movie)=>{
            if(traileUrl){
                setTraileUrl("");
            }
            else{
                // movieTrailer(movie?.name || "")
                // .then((url)=>{

                // })
                // .catch((error)=>console.log(error))
            }

        }
        console.log(movies);
    
    return (
        <div className="row">
            <h2>{props.title}</h2>
            <div className="row__posters">
                {
                    movies.map(movie=>(
                      <img key={movie.id} 
                      className={`row__poster ${props.isLargeRow && "row__posterLarge"}`} 
                      src={`${baseURL}${props.isLargeRow? movie.poster_path:movie.backdrop_path}`}  
                      alt={movie.name} />
                    ))
                }

            </div>
            {traileUrl && <YouTube videoId="trailerUrl" src="" opts={opts}/>}
        </div>
    )
}

export default Row
