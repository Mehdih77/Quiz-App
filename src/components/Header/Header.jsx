import './header.css'
import { Link } from "react-router-dom";


export default function Header() {
    return (
        <header className='header'>
            <Link to='/' className='title'>Quiz Hub</Link>
            <hr className='divider' />
        </header>
    )
}
