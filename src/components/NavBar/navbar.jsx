import Logo from '../../assets/logo.svg';
import './navbar.css'


export default function NavBar() {
    return (
        <header>
            <div className='menu flex justify-around items-center py-2'>
                <div className="logo">
                    <img src={Logo} className='h-16' />
                </div>
                    <ul className='hidden md:flex gap-20 items-center'>
                    <li><a className='text-white hover:text-py' href='#home'>Home</a></li>
                    <li><a className='text-white hover:text-py' href='#about'>About</a></li>
                    <li><a className='text-white hover:text-py' href='#whatwedo'>What We Do</a></li>
                    <li><a className='text-white hover:text-py' href='#ourteam'>Our Team</a></li>
                    </ul>
                <button className='text-cyan-950 py-1.5 bg-py shadow-md hover:text-cc'>Contact</button>
            </div>
        </header>
    )
}
