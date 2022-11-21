import { useSelector } from 'react-redux';
import { AddTask } from './AddTask';
import './App.css';
import TodoList from './TodoList';

function App() {
  return (
    <div className="App">
      <AddTask/>
      <TodoList/>
    </div>
  );
}

export default App;
