import React from 'react';
import Users from './components/User';
import './App.css';
import {Routes,Route} from 'react-router-dom'
// import Counter from './components/Counter';
// import FunComp from './components/FunComp';
// import Customer from './components/Customer';
// import Youtube from './components/Youtube';
import Login from './components/Login';
// import AuthUser from './components/AuthUser';
import UserList from './components/UserList';
import Navabr from './components/NavBar';
import About from './components/About';
import UserDetail from './components/UserDetail';
import User from './components/User';
// import User from './components/User';


function App() {
  return (
    
    <>
    <Navabr/>
    <Routes>

      <Route path='/about'element={<User/>}/>
      <Route path='/users/:id' element= {<UserDetail/>}/>
      <Route path='/login'element={<Login/>}/>
      {/* <Youtube/>
      <Counter/>
      <Login/>
      <AuthUser/>
      <UserList/>
      <User/> */}

   </Routes>
   </>
  );
}

export default App;
