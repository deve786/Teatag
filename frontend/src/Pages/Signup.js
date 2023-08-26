import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
function Signup() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [location, setLocation] = useState('')
    const handleSubmit=async e=>{
        console.log("s")
        e.preventDefault();
        try {
            console.log("sadasdas")
            await axios.post('http://localhost:5000/api/createuser',{name,email,location,password})
            console.log("first")
            console.log("Successfully Registered")
        } catch (error) {
            console.log("Error in Registering",error)
        }
    }
   
  return (
    <div className='container'>
        <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" id="name" aria-describedby="emailHelp" value={name} onChange={e=>setName(e.target.value)}/>
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={email} onChange={e=>setEmail(e.target.value)}/>
  </div>
  <div className="mb-3">
    <label htmlFor="location" className="form-label">Location</label>
    <input type="text" className="form-control" id="location" aria-describedby="emailHelp" value={location} onChange={e=>setLocation(e.target.value)}/>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password" value={password} onChange={e=>setPassword(e.target.value)}/>
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
  <Link to='/login' className='m-3 btn btn-danger'>Already User</Link>
</form>
    </div>
  )
}

export default Signup