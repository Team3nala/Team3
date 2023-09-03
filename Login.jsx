import React, { useState } from "react";
export const Login = (props) => {
    const [email, setEmail]=useState('');
    const [pass, setPass]=useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(email);
    }

    return(
        <form>
        <center><h1>LOGin</h1></center>
            <br></br>
            <label htmlFor="email">&#160; Email &#160;</label>&#160;
            &#160;
            &#160;<input type="email" placeholder="user@gmail.com" id="email" name="email"/>
        <center> <br></br>
            <label htmlFor="password">Password </label>
            &#160;<input type="password" placeholder="*********" id="password" name="password"/>
        </center><br></br>
            <button>Login</button>
        <center>
                <p>Don't have an account...?<button onClick={() => props.onFormSwitch('register')}>Register</button></p>
        </center>
        </form>
    )
}