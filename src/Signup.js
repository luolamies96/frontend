import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Constants from './Constants.json'

export default function Signup() {

    const [username, Setusername] = useState('')
    const [password, SetPassword] = useState('')
    const [email, SetEmail] = useState('')
    
    var searchURL;
    


    const navigate = useNavigate();

    const handleSignupSubmit = async (event) =>{
        event.preventDefault();
        Setusername(event.target.username.value);
        SetPassword(event.target.password.value);
        SetEmail(event.target.email.value);
        
        searchURL = Constants.API_ADDRESS+ "register?username=" + username + "&password=" + password + "&email=" + email
      
       try{
         await axios.post(searchURL);
        navigate('/', {replace: true});
       
       }
       catch (error){
        console.error(error);
       }
       
    }



  return (
    <div>
        <h2>Signup</h2>
        <form onSubmit={handleSignupSubmit}>
            <div>
                Username <br/>
                <input type="text" name="username" />
            </div>
            <div>
                Password <br/>
                <input type="text" name="password" />
            </div>
            <div>
                Email <br/>
                <input type="text" name="email" />
            </div>
            <div>
                <button type="submit">Signup</button>
            </div>
        </form>
    </div>
  )
}
