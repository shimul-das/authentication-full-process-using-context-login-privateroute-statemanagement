import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../Provider/AuthProviders'

const Registration = () => {
const { user, createuser } = useContext(AuthContext)
console.log(user,createuser);
const handleregister=(event)=>{
event.preventDefault();
const form=event.target;
const name=form.name.value;
const email=form.email.value;
const password=form.password.value;
console.log(name,password,email);
createuser(email,password)
.then(result=>{
    const loggeduser = result.user;
    console.log(loggeduser)
    form.reset();

})
.catch(error=>{
    console.log(error)
})

}
return (
<div>
    <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Please Register now!</h1>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleregister} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name='password' type="password" placeholder="password" className="input input-bordered"
                            required />
                        <label className="label">
                            <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Registration</button>
                    </div>
                </form>
                <Link to="/login">
                <button className="btn btn-active btn-link">Already have an account Login!</button>
                </Link>
            </div>
        </div>
    </div>
</div>
)
}

export default Registration