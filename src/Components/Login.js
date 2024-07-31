import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import Data from './Login.json'
import './Login.css'
 
export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate();
  const a = (e) => {
    e.preventDefault();
    const user = Data.find((user) => user.userid === username && user.password === password);
    if (user) {
      navigate('/Home')
    }
    else {
      alert("Invalid");
    }
  };
  return (
    <center>
    
<body className='login' >
<div className='a1'>
<form action='' onSubmit={a}id='v'>
<h1 className='a2'>Login</h1>
<div className='input-box'>
<input type='text' placeholder='Username' required value={username} onChange={(e) => setUsername(e.target.value)} className='a3' />
</div>
<div className='input-box'>
<input type='password' placeholder='Password' required value={password} onChange={(e) => setPassword(e.target.value)} className='a3'/>
</div>
<div className='remember-forget'>
<label><input type='checkbox' />Remember me</label>
<a href='#'>Forget password</a>
</div>
<button type='submit' id="button1" >Login</button>
<div className='register-link'>
<p>Don't have an account? <a href='#'>Register</a></p>
</div>
</form>
</div>

</body>
</center>
  )
}