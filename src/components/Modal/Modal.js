import './Modal.css'
import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import TextField from '@mui/material/TextField';

export default function Modal({editodo, edit, toggleModal, handleAdd, handleFrom, handleTo, modal, todoName, setTodoName, from, to}) {
 

    

    return(
        
        <LocalizationProvider dateAdapter={AdapterDayjs}>

            {modal && (
            <div className="m">
                <div  className="o d-flex justify-content-center align-items-center">
                    <div className="m-content">
                        <h2 className="text-center">Todo</h2>
                        <div className="divInput">
                            
                            <TextField autoFocus   required id="outlined-basic" className="input" label="Todo Name" variant="outlined" value={todoName} onChange={(event) => setTodoName(event.target.value)} />
                        </div>
                        <div className="divInput">
             
                            <TimePicker label="Start Time" id="From" className="input"   value={from} onChange={handleFrom} />
            
                        </div>
                        <div className="divInput">
                            <TimePicker label="End Time" id="To" className="input" value={to} onChange={handleTo} />
                        </div>
                        <div className="sumCan d-flex justify-content-around">
                            {todoName&&<button type="submit" className="Add" onClick={edit ? editodo : handleAdd}>{edit ? "Edit" : "Add"}</button>}
                            <button className="Cancel" onClick={toggleModal}>Cancel</button>
                        </div>
                    
                    </div>
                </div>
            </div>
        )}
        </LocalizationProvider>
        
    );
}