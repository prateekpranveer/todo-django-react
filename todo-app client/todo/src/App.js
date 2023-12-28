import './App.css';
import AddTask from './components/AddTask';
import TaskView from './components/TaskView';

function App() {
  return (
    <div className="App">
      <div className=''>
        <h1 className='mt-4'>TODO APP</h1>
        <AddTask/>
        <TaskView/>
      </div>
    </div>
  );
}

export default App;
