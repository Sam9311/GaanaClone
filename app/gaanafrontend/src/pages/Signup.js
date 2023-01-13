import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const Signup = () => {

    console.log(" This is being called")
    const navigate = useNavigate();
    //const { id } = useParams();
    const url = 'http://localhost:4000/'
    const [user, setUser] = useState([{ fname: "", lname: "", email: "", pwd: "" }]);
    const [uid,setUid]=useState([{id:0}]);
    console.log(user)

    //handle change
    const handleChange = (event) => {

        //declaring variables
        const value = event.target.value;
        const name = event.target.name;

        setUser({ ...user, [name]: value });
    }
    const idchange=(event)=>{
        const value = event.target.value;
        const name = event.target.name;
setUid({...uid,[name]:value});
    }
    const deleteuser = () => {
        axios.delete(url + `user/delete/${uid.id}`).then((rslt) => {
            console.log(rslt);
        })
    }
    //submit data
    const submitme = (event) => {
        axios.post(url + 'user/signup', user).then((result) => {
            console.log(result);
            console.log("success");

        })
    }
    return (
        <div className='container'>
            This is being called
            <form className="form-group">
                Fname : <input type="text" name="fname" id="fname" placeholder='enter fname' onChange={handleChange} /><br />
                Lname : <input type="text" name="lname" id="lname" placeholder='enter lname' onChange={handleChange} /><br />
                email : <input type="email" name="email" id="email" placeholder='enter email' onChange={handleChange} /><br />
                password : <input type="password" name="pwd" id="pwd" placeholder='enter pwd' onChange={handleChange} /><br />
                <button type='button' onClick={submitme}>SignUp</button>
            </form>
            <form>
                <input type="Number" name="id" id="id" placeholder='enter id' onChange={idchange} />
                <button type='button' onClick={deleteuser}>DeleteUser</button>
            </form>
        </div>
    )

}
export default Signup;
