import { useRef, useState } from "react";
import './Modal.css'

export default function Modal({setTodo, todo}) {
    const [modal, setModal] = useState(false);
    const todoName = useRef();
    const from = useRef();
    const to = useRef();

    const toggleModal = () => {
      setModal(!modal)

    };

    const handleAdd = () => {
        const data = {
            name: todoName.current.value,
            from: from.current.value,
            to: to.current.value
        }
        setTodo([...todo, data])
        toggleModal()
    }

    return(
        <>
            <button className="btn btn-warning mt-5 m-auto " onClick={toggleModal}>Add Todo</button>

            {modal && (
            <div className="m">
                <div  className="o d-flex justify-content-center align-items-center">
                    <div className="m-content">
                        <h2 className="text-center">Todo</h2>
                        <div className="divInput">
                            <label htmlFor="todo" className="label">Todo</label>
                            <input type="text" id="todo" placeholder="Todo name" ref={todoName}></input>
                        </div>
                        <div className="divInput">
                            <label htmlFor="From" className="label">From</label>
                            <input type="text" id="From" placeholder="Start Time" ref={from}></input>
                        </div>
                        <div className="divInput">
                            <label htmlFor="To" className="label">To</label>
                            <input type="text" id="To" placeholder="End Time" ref={to}></input>
                        </div>
                        <div className="sumCan d-flex justify-content-around">
                            <button className="Add" onClick={()=>handleAdd()}>Add</button>
                            <button className="Cancel" onClick={toggleModal}>Cancel</button>
                        </div>
                    
                    </div>
                </div>
            </div>
        )}
        </>
    );
}