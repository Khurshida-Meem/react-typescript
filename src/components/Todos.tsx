import React, { useContext } from 'react';
import { TodosContext } from '../store/todos.context';
import TodoItem from './TodoItem';
import classes from './Todos.module.css';

// FC= Functional component
// {items: string[]} we can make this optional as {items?: string[]}
const Todos: React.FC = () => {
    
    const todosCtx = useContext(TodosContext);
    
    return (
        <ul className={classes.todos}>
            {todosCtx.items.map((item) => (
                <TodoItem key={item.id} todoText={item.text} onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)} />
            ))}
        </ul>
    );
};

export default Todos;