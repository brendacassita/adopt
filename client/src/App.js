import logo from './logo.svg';
import './App.css';
import Badge from "react-bootstrap/esm/Badge";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Home from './components/shared/Home';
import AllPets from './components/shared/AllPets';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import NoMatch from './components/shared/NoMatch';
import NavBar from './components/shared/NavBar';
import FetchUser from './components/auth/FetchUser';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Feed from './components/auth/Feed';
import FindPets from './components/shared/Species';
import LikedPets from './components/auth/LikedPets';
import AdoptedPets from './components/shared/AdoptedPets';
import About from './components/shared/About';


function App() {
  return (
    <div >
      <NavBar />

      <FetchUser>
      <>
       <Routes>
         {/* UNPROTECTED */}
         <Route path='/login' element={<Login/>}/>
         <Route path='/register' element={<Register/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/all_pets' element={<AllPets/>}/>
          <Route path='/find_pets' element={<FindPets/>}/>
          <Route path='/adopted_pets' element={<AdoptedPets/>}/>
          <Route path='/about' element={<About/>}/>





          {/* PROTECTED */}
        <Route element={<ProtectedRoute/>}>
          <Route path='/feed' element={<Feed/>}/>
          <Route path='/liked_pets' element={<LikedPets/>}/>

       </Route>


      <Route path='*' element={<NoMatch/>}/>
      </Routes>
      </>
      </FetchUser>

    </div>
  );
}

export default App;
