
import { useState } from 'react'

import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../../componenst/firebase'
import { doc, setDoc } from 'firebase/firestore'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './Register.css'


const Register = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [fname, setFname] = useState("")
  const [laname, setlname] = useState("")

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user)
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: fname,
          lastName: laname
        })
        window.location.href = '/login'
      }
      toast.success("User Registered Successfully", {
        position: "top-right"
      })
    } catch (error) {
      console.log(error.message)
      toast.error(error.message, {
        position: "top-right"
      })
    }
  }



  return (
    <div className='App'>
      <ToastContainer />
      <div className='auth-wapper'>
        <div className='auth-inner'>
          <form onSubmit={handleRegister}>
            <h3 className='text-center font-bold mt-2 mb-4'>Sing Up</h3>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                First name
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="First name" onChange={(e) => setFname(e.target.value)} required />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" >
                Last name
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Last name" onChange={(e) => setlname(e.target.value)} required />
            </div>


            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" >
                Email
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} required />
            </div>


            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" >
                Password
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} required />
            </div>


            <div className="md:flex md:items-center">
              <button className="shadow bg-violet-800 focus:shadow-outline w-full focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                Sign Up
              </button>
            </div>

            <p className="forgot-password text-center mt-1">
              Already signed up? <a href="/login">Go to sign in.</a>
            </p>

          </form>
        </div>
      </div>
    </div>
  )
}
export default Register