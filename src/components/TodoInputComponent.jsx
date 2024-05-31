import React, { useState } from 'react';
import { toast } from 'react-toastify';

function TodoInputComponent({ todoItems, setTodoItems }) {

    const [currentTodo, setCurrentTodo] = useState('');

    function handleTodoInput(event){
        // da vidim vrednost
        setCurrentTodo(event.target.value);
    }

    function handleTodo(){
        if(currentTodo){
            setTodoItems([...todoItems, {title: currentTodo, id: new Date().getTime()}]);
            setCurrentTodo('');
            toast.success('Uspesno dodat TASK!')
        }else{
            toast.warn('Hej unesi neki TODO');
        }
      
    }

	return (
		<div className='flex gap-[20px]'>
			<input
				type='text'
				placeholder='Insert Your Task'
				className='border-2 rounded-lg px-[20px] py-[10px] outline-none'
                onChange={handleTodoInput}
                value={currentTodo}
			/>
			<button onClick={handleTodo} className='px-[20px] py-[10px] bg-green-600 text-white rounded-lg'>
				Add Task
			</button>
		</div>
	);
}

export default TodoInputComponent;
