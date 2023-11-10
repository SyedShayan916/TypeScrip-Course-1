import React,{useState} from "react";
interface ISTATE{
    isLogin:boolean
}


const AuthUser : React.FC = () =>{
    const[state,setState] = useState<ISTATE>({
        isLogin: false
    })
    const handleLogin = ():void =>{
        setState({isLogin:true})
    }
    const handleLogout = ():void =>{
        setState({isLogin:false})
    }
    return(
        <>
        <div className="container">
            <div className="row card p-4 mt-4">
                <div className="col-md-10">
                    {state.isLogin && state.isLogin ? (
                        <h1>Welcome user</h1>              
                    ) : (
                        <h1>please login</h1>
                    )}
                    
                    {state.isLogin && state.isLogin ? (
                        <button className="btn btn-danger" onClick={handleLogout}>Logout</button>  
                    ) : (
                        <button className="btn btn-primary" onClick={handleLogin}>Login</button>
                    )}
                </div>
            </div>
        </div>
        </>
    )
}
export default AuthUser;