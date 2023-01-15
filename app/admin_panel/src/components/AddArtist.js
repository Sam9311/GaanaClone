
import React from 'react';
import axios from'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const AddArtist = () => {
  const navigate=useNavigate();
  const url='http://localhost:4000/artist/'
  const [artist, setartist] = useState([{ fname: "", lname: "", file: "" }]);
 console.log(artist)

  const handleChange = (event) => {

    //declaring variables
    const value = event.target.value;
    const name = event.target.name;

    setartist({ ...artist, [name]: value });
}
const submitdata = (event) => {
    axios.post(url + 'add', artist).then((result) => {
        console.log(result);
        console.log("success");

    })
  }


  return (
    <div>
      {/* //${fname}','${lname}','${file} */}
      <form className="form-group">
                Fname : <input type="text" name="fname" id="fname" placeholder='enter fname' onChange={handleChange} /><br />
                Lname : <input type="text" name="lname" id="lname" placeholder='enter lname' onChange={handleChange} /><br />
                file : <input type="email" name="email" id="email" placeholder='enter email' onChange={handleChange} /><br />
                {/* password : <input type="password" name="pwd" id="pwd" placeholder='enter pwd' onChange={handleChange} /><br /> */}
                <button type='button' onClick={submitdata}>SignUp</button>
            </form>
    </div>
  )
}
export default AddArtist
