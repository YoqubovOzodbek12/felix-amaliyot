import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { ToastContainer } from 'react-bootstrap'
import { useEffect, useState } from 'react';

import { Home, Login, NotFound, Register } from './pages/'

import { auth } from './componenst/firebase';
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css'

function App() {

  const [user, setUser] = useState();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  });

  return (
    <Router>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Register />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <ToastContainer />
      </div>
    </Router>
  )
}

export default App
