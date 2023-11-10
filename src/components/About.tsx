import React,{useEffect, useState} from "react";
import { IUsers } from "./models/IUsers";
import { UsersService } from "./services/UsersService";
interface ISTATE{
    loading:boolean,
    users: IUsers[],
    errorMsg:string
}
const About: React.FC = () =>{
    const [state,setState] = useState<ISTATE>({
        loading:false,
        users: [] as IUsers[],
        errorMsg:''
    })

useEffect(()=>{
    setState({...state, loading:true})
    UsersService.getAllUsers()
        .then((res) => setState({
            ...state, loading:false, users:res.data
        }))
        .catch(err => setState({
            ...state, loading:false, errorMsg:err.message
        }))

    }, []);

const {loading,users,errorMsg} =state

    return(
        <>
        <div className="container">
            <h1>Data from APIS</h1>
            {errorMsg && (<p>{errorMsg}</p>)}
            {loading && <h1>loading</h1>}
            <table className="table table-striped">
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Username</td>
                        <td>Email</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.length > 0 && users.map( user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>

                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
        </>
    )
}
export default About;