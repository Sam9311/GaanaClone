/* eslint-disable jsx-a11y/anchor-is-valid */

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link,BrowserRouter,Route,Routes } from 'react-router-dom';
import Artist from './pages/Artist';
import Album from './pages/Album';
import User from './pages/User';
import Home from './pages/Home';
import AddArtist from '../src/components/AddArtist'


function App() {
  return (
    <div className="App">
 <h2>
  This is the admin side of Gaana.com</h2>

<BrowserRouter>
<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <Link class="navbar-brand" >AdminPanel</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/artist">Artist</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to='/album'>Album</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to='/user'>User</Link>
        </li>
         
      </ul>
    </div>
  </div>
</nav>







<Routes>
<Route path="/artist" element={<Artist/>}></Route>
<Route path="/album" element={<Album/>}></Route>
<Route path="/user" element={<User/>}></Route>
<Route path="/" element={<Home/>}></Route>
<Route path="/addartist" element={<AddArtist/>}></Route>
</Routes>
</BrowserRouter> 

    </div>
  );
}

export default App;
