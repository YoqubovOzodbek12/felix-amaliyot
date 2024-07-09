
import Logo from '../../assets/logo/logo.svg'
import One from '../../assets/images/1.svg'
import User from '../../assets/images/user.svg'


import './Header.css'

const Header = () => {

  return (
    <div className='header'>
      <div className='header-left'>

        <a href="/home">

          <img className='cursor-pointer' src={Logo} alt="site-logo" width={220} height={40} />
        </a>

        <input className='header-inp' type="text" placeholder='Search for any training you want ' />

      </div>

      <div className='header-right'>
        <div>
          <img className='header-right-img' src={One} alt="" />
        </div>
        <div>
          <img src={User} alt="" />
        </div>
      </div>
    </div>
  )
}
export default Header