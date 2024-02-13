import { useState } from 'react';
import './App.css';
import Modal from './components/Modal/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPen} from '@fortawesome/free-solid-svg-icons'
import dayjs from 'dayjs';


function App() {
  const [todo, setTodo] = useState([]);
  const [id , seId] = useState(0);
  const [modal, setModal] = useState(false);
  const [todoName, setTodoName] = useState("");
  const [from, setFrom] = useState(dayjs());
  const [to, setTo] = useState(dayjs());
  const [realFrom, setRealFrom] = useState(dayjs().format('h:mm A'));
  const [reaTo, setRealTo] = useState(dayjs().format('h:mm A'));
  const [edit, setEdit] = useState(false);
  const [index, seIndex] = useState(0);
  const [points, setPoints] = useState(0);
  // kero

  const point = () => {
    setPoints(points + 10);
  };

  const completeTodo = (id) => {
    const complete = todo.filter((el) => {
      return(
        el.id !== id
      )
    })
    setTodo(complete)
    point()

  }

  const toggleModal = () => {
    setModal(!modal)
    setTodoName("")
    setFrom(dayjs())
    setTo(dayjs())
    setRealFrom(dayjs().format('h:mm A'))
    setRealTo(dayjs().format('h:mm A'))
  };

  const handleAdd = () => {
    seId(id + 1)
      const data = {
          name: todoName,
          from: from,
          to: to,
          realFrom: realFrom,
          realTo: reaTo,
          id: id
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


  const openEdit = (id) => {
    setEdit(true);
    const index = todo.findIndex(item => item.id === id);
    seIndex(index);
    toggleModal();
    setTodoName(todo[index].name);
    setFrom(todo[index].from);
    setTo(todo[index].to);
    setRealFrom(todo[index].realFrom);
    setRealTo(todo[index].realTo);
  };

  const editodo = () => {
    const updatedTodo = {
      ...todo[index],
      name: todoName,
      from: from,
      to: to,
      realFrom: realFrom,
      realTo: reaTo,
      // id remains the same
    };

    console.log(index, updatedTodo);

    // Create a new todo array with the updated item
    const newTodo = [...todo];
    newTodo[index] = updatedTodo;

    // Update the todo state with the new todo array
    setTodo(newTodo);

    // Assuming toggleModal() closes the modal and resets the form
    toggleModal();
    setTodoName("");
    setFrom(dayjs());
    setTo(dayjs());
    setRealFrom(dayjs().format('h:mm A'));
    setRealTo(dayjs().format('h:mm A'));
    setEdit(false);
  };


  const todoData = todo.map((el)=> {
    return (
      <div className="listgroupitem w-50" key={el.id}>
        <p className="text-center mb-5">{el.name}</p>
        <div className="d-flex justify-content-around">
          <p>from: {el.realFrom}</p>
          <p>to: {el.realTo}</p>
        </div>
        <p className="right" onClick={()=>completeTodo(el.id)}>✔️</p>
        <FontAwesomeIcon className="left" icon={faPen} onClick={()=>openEdit(el.id)} />
      </div>
    )
  })

  return (
    <div className="container">
 
    <div className="d-fdlex  justify-conternt-center  ">

    <p className="d-flex fs-4 align-items-start ">points: {points}</p>
      <div className="d-flex flex-column justify-content-center">

         
        <button className="w-50 btn btn-warning mt-5 m-auto " onClick={toggleModal}>Add Todo</button>
        <Modal editodo={editodo} edit={edit} toggleModal={toggleModal} handleAdd={handleAdd} handleFrom={handleFrom} handleTo={handleTo} modal={modal} todoName={todoName} setTodoName={setTodoName} from={from} to={to} />
        

        <div className="list-group justify-content-center mt-5 gap-4">

          {todoData}
          
        </div>
      </div>

    </div>
    </div>
  );
}

export default App;
