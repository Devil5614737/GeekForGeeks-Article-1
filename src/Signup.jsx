import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import './app.css';
import { auth } from './firebase';

function Signup({setShowSignup}) {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup=(e)=>{
    e.preventDefault();
    
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user)

  })
  .catch((error) => {
    const errorMessage = error.message;
    alert(errorMessage)
  });

  }

  return (
    <div className="container">
      <div className="card">
        <h4>Signup</h4>
        <form onSubmit={handleSignup}>
          <label>Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button>Signup</button>
        </form>
        <p onClick={()=>setShowSignup(false)} style={{marginTop:12}}>Have an account? <span style={{cursor:'pointer',fontWeight:'bold'}}>Login</span></p>
      </div>
    </div>
  )
}

export default Signup