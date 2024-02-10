import {Outlet} from 'react-router-dom';
import './App.css'
import NavItems from './components/NavItems';
import Home from './home/Home';


const App = () => {
  return (
    <>
    <NavItems/>
    <Outlet/>

    </>
  )
}

export default App