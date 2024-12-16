import './navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar () {
    return (
        <nav className="navbar">
            <h1 className='title'>App React</h1>
            <div className='links'>
                <Link className="navItem" to='/jokes'>Jokes</Link>
                <Link className="navItem" to='/counter'>Counter</Link>
                <Link className="navItem" to='/users'>Users</Link>
                <Link className="navItem" to='/'>Login Page</Link>
            </div>
        </nav>
    )
}