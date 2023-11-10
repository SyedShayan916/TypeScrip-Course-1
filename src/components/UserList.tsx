import React,{useState} from "react";
import { IUser } from "./models/IUser";
import { UserService } from "./services/UserServices";


interface ISTATE{
    users:IUser[]
}
const UserList : React.FC = () =>{
    const [State,setState] = useState<ISTATE>({
        users:UserService.getAllUsers(),
        
    })
    return(
        <div className="container">
            <div className="row w-50 mt-5 mb-5">
                <h1>loop</h1>
                <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Sno</th>
                    <th scope="col">Name</th>
                    <th scope="col">Age</th>

                    </tr>
                </thead>
                <tbody>
                   {State.users.length > 0 && State.users.map(user =>(
                    <tr key ={user.sno}>
                        <td>{user.sno}</td>
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                    </tr>
                   ))}
                </tbody>
                </table>

            </div>
        </div>
    )
}
export default UserList