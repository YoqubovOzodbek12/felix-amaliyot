
import Notfound from '../../assets/images/notfound.png'

import './NotFound.css'

const NotFound = () => {
  return (
    <div>
      <img className='m-auto mt-4 mb-4' src={Notfound} alt="" />

      <div className="md:flex md:items-center">
        <button className="shadow bg-violet-800 w-48 m-auto mb-2 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit ">
          <a className='text-white no-underline' href="/home">Go Home Page</a>
        </button>
      </div>
    </div>
  )
}
export default NotFound