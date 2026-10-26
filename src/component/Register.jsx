import { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import {API_URL} from "./Api";
import "../test/Registers.css"


function Register() {

  const [name, setName] = useState("");
  const [email, setEmail]= useState("");
  const [password, setPassword]= useState("");
  const [message, setMessage]= useState("");

  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      const response = await fetch(`${API_URL}/register`,{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({name, email, password}),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Registered successfully! Please login");
        navigate("/login");

      } else {
        setMessage(data.message);
      }

    }catch {
      setMessage("Cannot connect to server");
    }

  };

return (
  <div className= "container">
    <form className= "card" onSubmit={handleSubmit}>
      <h2>Register</h2>

      {message && <p className="error">{message}</p> }

      <input
      type="text"
      placeholder="Name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      required
       />

       <input
       type="email"
       placeholder="Email"
       value={email}
       onChange={(e) => setEmail(e.target.value)}
       required
       />

       <input
       type="password"
       placeholder="Password"
       value={password}
       onChange={(e) => setPassword(e.target.value)}
       required 
       />

       <button type ="submit">Register</button>

       <p>
        Already have an account? <Link to="/login">Login</Link>
       </p>

    </form>


  </div>
);


}

export default Register;
