import React from "react";
interface IPROPS{
    userid : number,
    username : String
}
export default class Users extends React.Component<IPROPS>{
    constructor(props: IPROPS){
        super(props);
    }
    render(){
        let {userid,username} = this.props
        return(
            <>
            <h1>Welcome to class component</h1>
            <h6>UserId : {userid}</h6>
            <h6>UserName : {username}</h6>
        </>
        )
        
    }
}