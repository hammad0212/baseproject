import React, { useEffect, useState } from 'react';
//import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import { auth } from "./components/firebase";
//import Layout from './components/Layout'; // Assuming Layout is in the components folder
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';

export default function Apps() {
  const [user, setUser] = useState(null);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setIsFetching(false);
        return;
      }

      setUser(null);
      setIsFetching(false);
    });
    return () => unsubscribe();
  }, []);

  if (isFetching) {
    return <div>Loading...</div>; // Add a loading state if necessary
  }

  return (
    <>
  <Navbar/> 
  <Outlet context={{ user }}/> 
  </>
  );
}
