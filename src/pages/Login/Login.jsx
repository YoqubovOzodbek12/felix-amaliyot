import { useState } from 'react'

import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../componenst/firebase'


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './Login.css'

const Login = () => {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await signInWithEmailAndPassword(auth, email, password)
      window.location.href = '/home'
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
      <div className='auth-wrapper'>
        <div className='auth-inner'>
          <form onSubmit={handleSubmit}>
            <h1 className='text-center mb-9'>Sign in</h1>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" >
                Email address
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>


            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" >
                Password
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>

            <div className="md:flex md:items-center">
              <button className="shadow bg-violet-800 w-full mt-2 mb-2 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit ">
                Button
              </button>

            </div>

            <p className="forgot-password text-center">
              Already signed up?  <a href="/register">Go to sign up.</a>
            </p>

          </form>
        </div>
      </div>

    </div>
  )
}
export default Login

