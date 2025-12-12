import React from "react";
import { useState } from "react";
import "./signup.css"

const Signup = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault ();
    }
    return (
        <>
        <div className = "Signup Form">
        <form onSubmit ={handleSubmit}>
            <div
                className="Username">
                    <label> Username:</label>
                    <input type = "Username" name ="Username" id="Username"/>
            </div>
            <div className="Password">
                <label> Password:</label>
                <input type = "Password" name = "Password" id="Password"/>  
            </div>
            <div className="Email">
                <label>Email:</label>
                <input type ="Email" name="Email" id="Email"/>
            </div>
            <button type ="submit">Sign Up </button>
        </form> 
        </div>  
        </>
    )
}
export default Signup;
