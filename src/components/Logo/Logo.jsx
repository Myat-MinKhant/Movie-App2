import { Link } from "react-router-dom"
import logo from '../../assets/icon.png'

const Logo = () => {
    return (
        <Link to='/'>
            <img src={logo} alt="Logo" className=" w-10 h-10 hidden md:block"/>
        </Link>
    )
}

export default Logo