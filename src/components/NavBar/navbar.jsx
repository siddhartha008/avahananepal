import Logo from '../../assets/logo.svg';
import { Link } from 'react-scroll'
 
import './navbar.css'


export default function NavBar() {
    return (
        <header>
            <div className='menu flex justify-around items-center py-2'>
                <div className="logo">
                    <img src={Logo} className='h-16' />
                </div>
                <Link className='hidden md:flex gap-20 items-center '>
                <Link className='text-white hover:text-py desktopNavBarItem' to="about" smooth={true} duration={900} >About</Link>
                <Link  className='text-white hover:text-py desktopNavBarItem' to="whatwedo" smooth={true} duration={900} >What We Do</Link>
                <Link className='text-white hover:text-py desktopNavBarItem' to="ourteam" smooth={true} duration={900}>Our Team</Link>
              </Link>
                <Link to="footer" smooth={true} duration={1200} ><button className='text-cyan-950 py-1.5 bg-py shadow-md hover:text-cc' >Contact</button></Link>
            </div>
        </header>
    )
}

