//add get edit delete


import React from 'react';
import axios from'axios';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Artist = () => {
  const url='http://localhost:4000/artist/'

  const navigate=useNavigate();
     const [uid,setUid]=useState(0);
  const idchange=(event)=>{
    const value = event.target.value;
    console.log(value+'value')
    //const name = event.target.name;
setUid(value);
console.log(uid)
}
   

     //adding user using addartist component
  const adduser=()=>{

        navigate('/addArtist')
  }


    
    const edituser=()=>{

        
    }
    
    const deleteuser=()=>{
axios.delete(url+`/delete/${uid}`).then((result)=>{
  if(result)
    console.log("The user has been deleted...");
    else
      console.log("some error occurred")
    
})
        
    }



  return (
    <div>
      <ul>
        <li>
            <button className='btn btn-success' type="button" onClick={adduser}>
AddUser
            </button>
            <br></br>
            <br></br>
          
        </li>
        <li>
            <button className='btn btn-warning'type="button" onClick={edituser}>
          EditUser
            </button>
            <br></br>
            <br></br>
     
        </li>
        <li>
          <input type="Number" name="id" id="id" onChange={idchange}></input>
            <button className='btn btn-danger'type="button" onClick={deleteuser}>
DeleteUser
            </button>
        </li>
      </ul>
    </div>
  )
}

export default Artist
