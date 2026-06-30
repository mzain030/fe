import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import AddNewUser from './components/AddNewUser';
import Xyz from './components/Xyz';

function App() {
  return (
    <div className="App">
    <HomePage/>
    <AddNewUser/>
    <Xyz/>
    </div>
  );
}

export default App;
