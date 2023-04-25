import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../Provider/AuthProviders'

const Header = () => {
    const { user, logout} = useContext(AuthContext)
    const handlelogout=()=>{
    logout()
        .then(()=>{})
        .catch(error=>console.log(error))
    }
return (
<div>
    <div className="navbar bg-neutral text-neutral-content">
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        <Link className="btn btn-ghost normal-case text-xl" to="/">Home</Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/login">Login</Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/orders">Orders</Link>
        {user && <Link className="btn btn-ghost normal-case text-xl" to="/profile">Profile</Link>}
        <Link className="btn btn-ghost normal-case text-xl" to="/registration">Registration</Link>
        {
        user ? <div>
            <span>{user.email}</span>
            <button onClick={handlelogout} className="btn btn-primary">Logout</button>
        </div> 
        : 
        <div>
            
            <button className="btn btn-primary"><Link to="/login">Login</Link></button>
        </div> 

    }
    </div>
</div>
)
}

export default Header