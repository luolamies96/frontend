import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Constants from './Constants.json'

export default function Signup() {
    var searchURL;
    const [ signupRrocessState, SetSignupProcessState] = useState("idle")





    const navigate = useNavigate();

    const handleSignupSubmit = async (event) =>{
        event.preventDefault();

        SetSignupProcessState("processing");



        searchURL = Constants.API_ADDRESS+ "register?username=" + event.target.username.value + "&password=" + event.target.password.value + "&email=" + event.target.email.value

       try{
         const result =  await axios.post(searchURL);
            console.log(result);
            SetSignupProcessState("signupSuccess")
             navigate('/login', {replace: true});

       }
       catch (error){
        console.error(error);
        SetSignupProcessState("signupFailure")
       }

    }
    let signupUIControls = null;
    switch(signupRrocessState){
        case "idle":
            signupUIControls =   <button type="submit">Signup</button>
            break;

        case "processing":
                signupUIControls = <span> Processing....</span>
                break;
        case "signupSuccess":
            signupUIControls = <span style={{color:"green"}  } >signup success</span>
            break;
        case "signupFailure":
        signupUIControls = <span style={{color:"red"}}>Error</span>
        break;
    }


    return (
        <div>
            <h2>Signup</h2>
            <form onSubmit={handleSignupSubmit}>
                <div>
                    Username <br />
                    <input type="text" name="username" />
                </div>
                <div>
                    Password <br />
                    <input type="text" name="password" />
                </div>
                <div>
                    Email <br />
                    <input type="text" name="email" />
                </div>
                <div>
                    {signupUIControls}
                </div>

            </form>
        </div>
    )
}
