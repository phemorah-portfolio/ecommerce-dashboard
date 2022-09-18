import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Protected(props) {
    let Component = props.Component
    const navigate = useNavigate()

    useEffect(() => {
        if(!localStorage.getItem('userInfo'))
        {
            navigate("/login")
        }
    }, []);

    return (
        <div>
            <Component />
        </div>
    )
}

export default Protected