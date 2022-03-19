import logo from './logo.svg';
import './App.css';
import TodoList from './component/TodoList';
// import TodoItem from './component/TodoItem';
import TodoInput from './component/TodoInput';

function App() {
  return (
    <div className="App">
     <h3>Todo list</h3>
     <TodoInput/>
     <TodoList/>
    </div>
  );
}

export default App;
