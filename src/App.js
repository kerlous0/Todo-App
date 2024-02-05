import { useState } from 'react';
import './App.css';
import Modal from './components/Modal/Modal';

function App() {
  const [todo, setTodo] = useState([]);
  // kero
  const completeTodo = (id) => {
    console.log(id)
    const complete = todo.filter((el) => {
      return(
        el.name + el.from + el.to !== id
      )
    })
    setTodo(complete)
  }

  const todoData = todo.map((el)=> {
    return (
      <div className="listgroupitem " key={el.name + el.from + el.to}>
        <p className="text-center mb-5">{el.name}</p>
        <div className="d-flex justify-content-around">
          <p>from: {el.from}</p>
          <p>to: {el.to}</p>
        </div>
        <p className="right" onClick={()=>completeTodo(el.name + el.from + el.to)}>✔️</p>
      </div>
    )
  })

  return (
    <div className="d-flex container justify-content-center  vh-100">

      <div className="d-flex flex-direction: row justify-content-center w-50 ">

        <Modal setTodo={setTodo} todo={todo} />

        <div className="list-group mt-5 gap-4">

          {todoData}
          
        </div>
      </div>

    </div>
  );
}

export default App;
