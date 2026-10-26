import { useState } from "react";
import {Link, useNavigate} from "react-router-dom"
import{API_URL} from "./Api";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e)=> {
    e.preventDefault();
  

    try {
      const response = await fetch(`${API_URL}/login`,{
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({email, password}),

      });

      const data = await response.json();

      if(response.ok){
        //save the token in the browser so we stay looged in
        localStorage.setItem("token", data.token);
        navigate("/");
      } else {
        setMessage(data.message);
      };
        } catch {
          setMessage("cannot connect to sever")
        };
      
      }

    return (
      <div className= "container">
        <form className= "card" onSubmit={handleSubmit}>
          <h2>Login</h2>

          {message && <p className= "error">{message}</p> }

          <input
          type="email"
          placeholder= "Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required/>
          <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          />

          <button type="submit">Login</button>


          <p>
            Don't have account? <Link to="/register">Register</Link>
          </p>

        </form>
      </div>
    )
  
}

export default Login;
