import { AddTask } from './AddTask';
import './App.css';
import FilterTask from './FilterTask';
import TodoList from './TodoList';

function App() {
  return (
    <div className="App">
      <AddTask/>
      <FilterTask/>
      <TodoList/>
      
    </div>
  );
}

export default App;
