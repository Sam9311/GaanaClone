import React,{useState} from 'react'
import axios from 'axios'
import Songs from '../components/Songs';
import { Navigate } from 'react-router-dom';

const MyMusic = () => {
    const [song, setSongs]=useState([]);
    const url = 'http://localhost:4000/'

    const getsongs=()=>{
        axios.get(url+'songs').then((result)=>{
            result=result.data;
            if(result){
                console.log(result.data)
            setSongs(result.data);
           // Navigate('/songs','../compnents',song)
            }
            else{
                console.log("the error has occurred")
            }
        })

    }


  return (
    <div>
      <button className='btn btn-success' type='button' onClick={getsongs}>Get Songs</button>
       <Songs items={song}></Songs>
    </div>
  )
}

export default MyMusic
