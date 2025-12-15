import React from "react";
import { useState } from "react";
import "./signup.css"

const Signup = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const handleSubmit = async(e) => {
        e.preventDefault();
        //  console.log("SUBMIT CLICKED");

        
        setError("");
        try {
            const response = await fetch ("http://localhost:5000/api/signup",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"},
               body: JSON.stringify({username: username, password: password, email: email})
        
                
            });
            const data = await response.json();
            if(!response.ok){
                throw new Error(data.message || "Something went wrong!");
            }
            console.log("User have registered");
            alert("Form Submitted!")
             setUsername("");
        setPassword("");
        setEmail("");
            
        }
        catch (error)
        { 
        console.error("Error:" , error.message);}
        
        finally{
            console.log("Request finished (success or error)");
            
        }
    };
    return (
        <>
            <div className="signup-form">
                <form onSubmit={handleSubmit}>
                    <div
                        className="Username">
                        <label> Username:</label>
                        <input type="text" name="Username" id="Username" value={username} onChange={(e)=>setUsername(e.target.value)}required/>
                    </div>
                    <div className="Password">
                        <label> Password:</label>
                        <input type="password" name="Password" id="Password" value={password} onChange={(e)=>setPassword(e.target.value)}required />
                    </div>
                    <div className="Email">
                        <label>Email:</label>
                        <input type="email" name="Email" id="Email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                    </div>
                    <button type="submit"> {"Signup"}</button>
                </form>
            </div>
        </>
    )
}
export default Signup;
