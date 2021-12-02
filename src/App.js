import "./App.css";
import { BrowserRouter, Link, Route } from "react-router-dom";
import {Todo} from './components/Todo/Todo'
import {Weather} from './components/Weather/Weather'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav className="navigation">
          <Link to="/todo">Todo</Link>
          <Link to="/weather">Weather</Link>
        </nav>
        <Route path="/todo" exact component={() => <Todo />}></Route>
        <Route path="/weather" exact component={() => <Weather />}></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
