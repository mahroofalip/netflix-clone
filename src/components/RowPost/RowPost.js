
import React, { useEffect, useState } from 'react'
import Youtube from 'react-youtube'
import './RowPost.css'
import { imgURL,API_KEY } from '../../constents/Constents'
import axios from '../../axios'

function RowPost(props) {
  const [movies, setMovies] = useState([])
  const [urlId,setUrlId]=useState('')
  useEffect(() => {

    axios.get(props.url).then((response) => {
      console.log(response.data);
      setMovies(response.data.results)
    }).catch(err => {
      // alert(err)
    })

  }, [])



  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleTrailer=(id)=>{
  console.log(id);
  axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
  
    if(response.data.results.length!==0){
      setUrlId(response.data.results[0])
    }else{
      console.log('array is Emty');
    }
  })
  }
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {movies.map((movie) =>
          <img onClick={()=>handleTrailer(movie.id)} className={ props.isSmall ? 'smallPoster':'poster' }src={`${imgURL+movie.backdrop_path}`} alt="poster" />

        )}

      </div>
    {  urlId &&   <Youtube opts={opts} videoId={urlId.key}/>   }
    </div>  
  )
}

export default RowPost