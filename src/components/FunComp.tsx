import React,{useState} from "react";
interface ISTATE{
    name: string;
    title: string;

}
interface IPROPS {
    name: string;
    age: number;
}
let FunComp: React.FC <IPROPS> = ({ name , age }) => {
    const [state,setstate] = useState<ISTATE>({
        name:"yo" ,
        title: "mernstack"
    })
    return(
        
        <>
        <h1 className="bd-success p-1 text-white text-center">
            Functional Component
        </h1>
        <div className="border px-4 bg-light mb-4">
            <h3>
                name : {name}<br />
                age : {age} <br />
            </h3>
        </div>
        <div className="col-md-4 bg-success">
            <h1>Values from state</h1>
            <h4>Name: {state.name}</h4>
            <h4>title: {state.title}</h4>
        </div>
        </>
    )
}
export default FunComp;