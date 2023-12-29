import React, {useState} from 'react';

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();

        let todo = document.getElementById('todoAdd').value
        const newTodo = {
            id: new Date().getTime(),
            text: todo.trim(),
            completed: false,
        };
        if (newTodo.text.length > 0 ) {
            setTodos([...todos].concat(newTodo));
        } else {

            alert("Enter Valid Task");
        }
        document.getElementById('todoAdd').value = ""
    }

    return (
        <div id="todo-list">
            <h1>Todo List</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    id = 'todoAdd'
                />
                <button type="submit">Add Todo</button>
            </form>
            {todos.map((todo) => <div className="todo" key={todo.id}>
                <div className="todo-text">{todo.text}</div>

            </div>)}
        </div>
    );
};

export default TodoList;