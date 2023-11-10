import React,{useState}from "react";
interface ISTATE{
    user:{
        email:string;
        password:string;
    }
}

const Login: React.FC = () => {
    const [state,setState] = useState <ISTATE>({
        user:{
            email:"",
            password:""
        }
    })
    const handleChange = (event:React.ChangeEvent<HTMLInputElement>):void => {
        setState({
            user:{
                ...state.user,
                [event.target.name]: event.target.value,
            }
        })
    }
    const handleSubmit = (event:React.FormEvent<HTMLFormElement>):void => {
        event.preventDefault()
        console.log(state.user)
    }
    return(
        <>
        <div className="container">
            <h1>Login form</h1>
            <div>
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" name= "email" onChange={handleChange} value = {state.user.email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" name= "password" onChange={handleChange} value = {state.user.password} className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>

            </div>
            <div className="mt-4 bg-light p-2">
                <p>{JSON.stringify(state.user)}</p>
            </div>
        </div>
        </>
    )
}
export default Login;