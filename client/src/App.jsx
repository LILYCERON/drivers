import{Route, BrowserRouter, Switch} from 'react-router-dom'
import Landing from "./redux/pages/Landig"
import Detail from "./redux/pages/Detail"
import Home from "./redux/pages/home"
import create from "./redux/pages/create"
import './App.css'

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path = "/" component = {Landing}/>
      <Route exact path= "/home" component = {Home}/>
      <Route path= "/home/:id" component = {Detail}/>
      <Route path= "/create" component = {create}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App
