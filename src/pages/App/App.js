import { Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  const responseGoogle = (response) => {
    console.log(response);
  }

  return (
    <div className="App">
      <a href="http://localhost:3001/auth/google">Log In</a>
    </div>
  );
}

export default App;
