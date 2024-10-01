import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, createRoutesFromChildren, RouterProvider, Route } from 'react-router-dom';
import App from './App';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import Counter from './components/Counter';
import Todo from './components/Todo';
import Stop from './components/Stop';
import User from './components/User';
import ProtectedRoute from './components/ProtectedRoute'; // Import your ProtectedRoute component

const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route path="/" element={<App />}>
      <Route path="signup" element={<Signup />} />
      <Route path="login" element={<Login />} />
      <Route
        path="home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="counter"
        element={
          <ProtectedRoute>
            <Counter />
          </ProtectedRoute>
        }
      />
      <Route path="todo" element={
        <ProtectedRoute>
        <Todo />
        </ProtectedRoute>
        } 
        />
      <Route
        path="stop"
        element={
          <ProtectedRoute>
            <Stop />
          </ProtectedRoute>
        }
      />
      <Route
        path="user/:name"
        element={
          <ProtectedRoute>
            <User />
          </ProtectedRoute>
        }
      />
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
