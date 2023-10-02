import{Route, BrowserRouter, Switch} from 'react-router-dom'
import Landing from "./pages/Landig"
import Detail from "./pages/Detail"
import Home from "./pages/home"
import create from "./pages/create"
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
