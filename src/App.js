import './App.css';
import Home from './Website/Home'
import About from './Website/About'
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter,Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Switch> 
      <Route exact path="/" component = {Home} />     
      <Route path="/about" component = {About}/>
     </Switch>
     </BrowserRouter>
       
    </div>
  );
}

export default App;
