import React,{useState,useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import { IUsers } from "./models/IUsers";
import { UserService } from "./services/UserServices";
import { UsersService } from "./services/UsersService";

interface IParams{
    id:string,

}
interface ISTATE{
    loading:boolean,
    user:IUsers
    errorMsg:string
}

const UserDetail: React.FC = () =>{
    const {id} = useParams<IParams |any>()

    const [state,setState] = useState<ISTATE>({
        loading:false,
        user: {} as IUsers,
        errorMsg:''
    })
    useEffect(()=>{
        if(id){
            setState({...state, loading:true})
            UsersService.getUser(id)
            .then(res => setState({
                ...state, loading:false, user:res.data
            }))
            .catch(error => setState({
                ...state, loading:false, errorMsg:error.message
            }))
        }
    },[id])

    const {loading, user,errorMsg} = state
    return(
        <>
        <div className="container">
            <h1>Sigle User Detail</h1>
            <div className="row">
            {loading && <h1>Loading...</h1> }
            {errorMsg && <h1>{errorMsg}</h1> }
            {
                 Object.keys(user).length > 0 && 
                <div className="row">
                    <ul className="list-group">
                        <li className="list-group-item">
                            Name : <b>{user.name}</b>
                        </li>
                        <li className="list-group-item">
                            Username : <b>{user.username}</b>
                        </li>
                        <li className="list-group-item">
                            Phone : <b>{user.phone}</b>
                        </li>
                        <li className="list-group-item">
                            Address : <b>{user.address.city}</b>
                        </li>
                        <li className="list-group-item">
                            Website : <b>{user.website}</b>
                        </li>
                        <li className="list-group-item">
                            Company : <b>{user.company.name}</b>
                        </li>
                    </ul>
                </div>
            }

            </div>
            <div className="mt-4">
                <Link to={'/about'} className="btn btn-info"> Go Back</Link>
            </div>
        </div>
        </>
    )
        
    
}
export default UserDetail;