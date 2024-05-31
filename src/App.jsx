
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TodoInputComponent from './components/TodoInputComponent';
import TodoListComponent from './components/TodoListComponent';
import { useEffect, useState } from 'react';


function App() {
  // smesti sve TODOS!!!
  const [todoItems, setTodoItems] = useState([]);

  useEffect(() => {
    console.log(todoItems);
  }, [todoItems])

  return (
    <div className='container mx-auto flex flex-col items-center justify-center'>
        <h1 className='text-[60px] text-green-600 font-extrabold my-[30px]'>LODO APP</h1>

        <TodoInputComponent todoItems={todoItems} setTodoItems={setTodoItems} />
        <TodoListComponent todoItems={todoItems} setTodoItems={setTodoItems}/>


        <ToastContainer />
    </div>
  )
}

export default App
