import logo from './logo.svg';
import React,{component} from 'react';
import {BrowserRouter,Link,Route,Routes} from 'react-router-dom';
import './App.css';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Home from './pages/Home';
import MyMusic from './pages/MyMusic';
import Songs from './components/Songs';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
<Link to="/signup">Signup</Link><br/>
<Link to="/signin">Signin</Link><br/>
<Link to="/browse">MyMusic</Link><br/>
<Link to="/home">Home</Link><br/>
<Routes>
<Route path='/signin' element={<Signin/>}></Route>
  <Route path='/signup' element={<Signup/>}></Route>
  <Route path='/browse' element={<MyMusic/>}></Route>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/home' element={<Home/>}>Home</Route>
  <Route path='/song' element={<Songs/>}>Home</Route>
  
</Routes>
    </BrowserRouter>
     
   
    </div>
  );
}

export default App;
