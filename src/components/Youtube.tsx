import React,{useState} from "react";

interface ISTATE{
    message: string;
}

const Youtube: React.FC = ()=> {
    const [state,setState] = useState<ISTATE>({message:"Welcome"})
    const handleGreet = (greet:string) :void=> {
        setState({message:greet})
    }
    
    return(
        <>
        <h1>{state.message}</h1>
        <button onClick={()=>handleGreet("like") }>like</button>
        <button onClick={()=>handleGreet("Subscribe") }>Subscribe</button>
        <button onClick={()=>handleGreet("Comment") }>Comment</button>

        </>
    )
}
export default Youtube