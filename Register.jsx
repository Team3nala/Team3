import React, { useState } from "react";
export const Register = (props) => {
    const [email, setEmail]=useState('');
    const [pass, setPass]=useState('');
    const [name, setName]=useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(email);
    }

    return(
    <form>
      <center><h1>REGISTER</h1></center>
        <label htmlFor="name">Full Name </label>
        <input type="name" placeholder="Username" id="name" name="name"/>
      <center><br></br>
        &#160;
        <label htmlFor="email"> Email &#160;</label>
        &#160;
        &#160;<input type="email" placeholder="user@gmail.com" id="email" name="email"/>
      </center>
      <center> <br></br>
        <label htmlFor="password">Password </label>
        <input type="password" placeholder="*********" id="password" name="password"/>
      </center>
        <br></br><button>Register</button>
      <center>
        <p>Already have an account? <button  onClick={() => props.onFormSwitch('Login')}>Sign-in</button></p>
      </center>
    </form>
    )
}