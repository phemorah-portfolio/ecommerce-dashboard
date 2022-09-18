import { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Login() {
    useEffect(() => {
        if(localStorage.getItem('userInfo'))
        {
            navigate("/add")
        }
    },[])

    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")

    const navigate = useNavigate()

    async function login() {
        let data = {email, password}

        let result = await fetch('http://localhost:8000/api/login', {
            method : 'POST',
            body: JSON.stringify(data),
            headers:
            {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json'
            }
        })

        result = await result.json()
        // console.log("Result", result);
        localStorage.setItem("userInfo", JSON.stringify(result))
        navigate("/add")
    }

    return (
        <div>
            <h1>Login Page</h1>
            <div className="col-sm-4 offset-sm-4">
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control mb-2" placeholder="email" />
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control mb-3" placeholder="password" />
                <Button className='btn btn-primary' onClick={login}>Sign Up</Button>
            </div>
        </div>
    )
}

export default Login