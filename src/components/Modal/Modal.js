import { useState } from "react";
import './Modal.css'
import * as React from 'react';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import TextField from '@mui/material/TextField';

export default function Modal({setTodo, todo}) {
    const [modal, setModal] = useState(false);
    const [todoName, setTodoName] = useState("");
    const [from, setFrom] = useState(dayjs());
    const [to, setTo] = useState(dayjs());
    const [realFrom, setRealFrom] = useState(dayjs().format('h:mm A'));
    const [reaTo, setRealTo] = useState(dayjs().format('h:mm A'));

    const toggleModal = () => {
        setModal(!modal)
        setTodoName("")
        setFrom(dayjs())
        setTo(dayjs())
        setRealFrom(dayjs().format('h:mm A'))
        setRealTo(dayjs().format('h:mm A'))
    };

    const handleAdd = () => {
        const data = {
            name: todoName,
            from: realFrom,
            to: reaTo
        }
        setTodo([...todo, data])
        toggleModal()
        setTodoName("")
        setFrom(dayjs())
        setTo(dayjs())
        setRealFrom(dayjs().format('h:mm A'))
        setRealTo(dayjs().format('h:mm A'))
    }

    const handleFrom = (newValue) => {
        setFrom(newValue)
        setRealFrom(newValue.format('h:mm A'))
      };

    const handleTo = (newValue) => {
        setTo(newValue)
        setRealTo(newValue.format('h:mm A'))
      };

    return(
        
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <button className="btn btn-warning mt-5 m-auto " onClick={toggleModal}>Add Todo</button>

            {modal && (
            <div className="m">
                <div  className="o d-flex justify-content-center align-items-center">
                    <div className="m-content">
                        <h2 className="text-center">Todo</h2>
                        <div className="divInput">
                            
                            <TextField required id="outlined-basic" className="input" label="Todo Name" variant="outlined" value={todoName} onChange={(event) => setTodoName(event.target.value)} />
                        </div>
                        <div className="divInput">
             
                            <TimePicker label="Start Time" id="From" className="input" value={from} onChange={handleFrom} />
            
                        </div>
                        <div className="divInput">
                            <TimePicker label="End Time" id="To" className="input" value={to} onChange={handleTo} />
                        </div>
                        <div className="sumCan d-flex justify-content-around">
                            {todoName&&<button type="submit" className="Add" onClick={()=>handleAdd()}>Add</button>}
                            <button className="Cancel" onClick={toggleModal}>Cancel</button>
                        </div>
                    
                    </div>
                </div>
            </div>
        )}
        </LocalizationProvider>
        
    );
}