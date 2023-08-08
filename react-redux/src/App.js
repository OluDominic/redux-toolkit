import logo from './logo.svg';
import './App.css';
import CakeView from './features/cake/cakeView';
import IceCreamView from './features/iceCream/iceScreamView';
import UserView from './features/user/userView';
import Todo from './todo/todoList/todo';

function App() {
  return (
    <div className="App">
      <Todo />
    </div>
  );
}

export default App;
