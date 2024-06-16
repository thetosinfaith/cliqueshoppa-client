import Home from './Home'; 
import Blog from './Blog'; 
import './App.css'
import { Outlet } from 'react-router-dom';
import NavItems from './components/NavItems';

const App = () => {


  return (
    <>
      <NavItems/>
      <Outlet/>
    </>
  )
}

export default App
