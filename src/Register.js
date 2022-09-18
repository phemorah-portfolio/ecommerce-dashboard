import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Register() {

    const navigate = useNavigate()

    useEffect(() => {
        if(localStorage.getItem('userInfo'))
        {
            navigate("/add")
        }
    }, [])

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function signUp() {
        let data = {name, email, password}

        let result = await fetch("http://localhost:8000/api/register",{
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type":'application/json',
                "Accept":'application/json'
            }
        })
        result = await result.json()
        localStorage.setItem("userInfo", JSON.stringify(result))
        navigate("/add")

    }

    return (
        <div className="col-sm-4 offset-sm-4">
            <h1>Registeration Page</h1>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control mb-2" placeholder="name" />
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control mb-2" placeholder="email" />
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control mb-3" placeholder="password" />

            <Button className='btn btn-primary' onClick={signUp}>Sign Up</Button>
        </div>
    )
}

export default Register