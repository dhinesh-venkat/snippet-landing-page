import logo from '../assets/Logo.svg'
import search from '../assets/Search.svg'
import GetStarted from './GetStarted'

function Header() {
    return (
      <div className="flex justify-between">

        <img className="pl-36 pt-16" src={logo} alt="logo"></img>

        <div className="flex justify-around items-center pr-36 pt-16">
          <img className="pr-10" src={search} alt="search"></img>
          <span className="pr-10 hover:underline">Sign in</span>
          <GetStarted />
        </div>

      </div>
    );
  }
  
  export default Header;