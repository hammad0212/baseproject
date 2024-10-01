import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from './firebase'
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";


const Signup = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");


  const handlesignup = async (e) => {
    e.preventDefault()
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      const user = auth.currentUser
      console.log(user)
      console.log('user succesfully signup')
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: firstname,
          lastName: lastname,

        });
        toast.success("user succesfully created account",{
          position:'top-center'
        })
      }
      
    } catch (error) {
      toast.success(error.message,{
        position:'top-center'
      })    }
  }

  return (

    <div className="signup-container">

      <h2>Sign Up</h2>
      <form className="signup-form" onSubmit={handlesignup}>
        <div className="form-group">
          <label htmlFor="firstname">First Name</label>
          <input type="text" id="firstname" name="firstname" onChange={(e) => setfirstname(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="lastname">Last Name</label>
          <input type="text" id="lastname" name="lastname" onChange={(e) => setlastname(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required onChange={(e) => setemail(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required onChange={(e) => setpassword(e.target.value)} />
        </div>
        <button type="submit" className="signup-button">Sign Up</button>
      </form>
      <p>
        Already have an account? <Link to="/Login">Login</Link>
      </p>
    </div>
  );
};

export default Signup;
