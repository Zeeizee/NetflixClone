import React,{useState,useEffect} from 'react'
import axios from './axios';
import "./Row.css";
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer'


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
        console.log(movies);
        const opts={
            height:"390",
            width:"100%",
            playerVars:{
                autoplay:1,
            },

        }
        const handleClick=(movie)=>{
            if(traileUrl){
                setTraileUrl("");
            }
            else{
                movieTrailer(movie?.name || "")
                .then((url)=>{
                    const urlParams= new URLSearchParams(new URL(url).search)
                    setTraileUrl(urlParams.get('v'))
                    console.log("TrailerURL>>>>>>>>>>>>>>>>>>>>>>>>>",traileUrl);
                })
                .catch((error)=>console.log(error))
            }

        }
        console.log(props.title,movies);
    
    return (
        <div className="row">
            <h2>{props.title}</h2>
            <div className="row__posters">
                {
                
                    movies.map(movie=>(
                      <img key={movie.id} onClick={()=>{handleClick(movie)}}
                      className={`row__poster ${props.isLargeRow && "row__posterLarge"}`} 
                      src={`${baseURL}${props.isLargeRow? movie.poster_path:movie.backdrop_path}`}  
                      alt={movie.name} />
                    ))
                }

            </div>
            {traileUrl && <YouTube videoId={traileUrl} src="" opts={opts}/>}
        </div>
    )
}

export default Row
