import './App.css';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import TodosContextProvider from './store/todos.context';

function App() {

  // const todos = [
  //   new Todo('I play'),
  //   new Todo('I eat')
  // ]

  // const [todos, setTodos] = useState<Todo[]>([]);

  // const handleAddTodo = (todoText: string) => {
  //   const newTodo = new Todo(todoText);

  //   setTodos((prevTodo) => {
  //     return prevTodo.concat(newTodo);
  //   });
  // };

  // const removeTodoHandler = (todoId: string) => {
  //   setTodos((prevTodos) => {
  //     return prevTodos.filter(todo => todo.id !== todoId);
  //   })
  // }

  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
