import React ,{useState}from "react";
interface ISTATE {
    count:number;
}
interface IPROPS {}

const Counter: React.FC = () => {
    const [state,setState] = useState<ISTATE>({ count:0})

    const handleIncrement = () => {
        setState( { count :state.count+1})
    }
    const handledecrement = () => {
        setState( { count :state.count-1})
    }
    return(
        <>
            <h1>Event Handling</h1>
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="display-3">{state.count}</h2>
                            <button className="btn btn-success ms-4" onClick={handleIncrement}>up</button>
                            <button className="btn btn-success ms-4" onClick={handledecrement}>down</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Counter;