import React from 'react';

import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';

import { AuthContextProvider } from './context/AuthContext';

import Home from './pages/Home';

import Login from './pages/Login';

import Signup from './pages/Signup';

import Account from './pages/Account';

import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/account"
            element={
              /* A component that checks if the user is logged in. If they are, it renders the
              component passed to it. If not, it redirects to the login page. */
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
