// import classNames from "classnames"
import { NavLink } from "react-router-dom"
import { AiOutlineSearch } from 'react-icons/ai'
import Wrapper from "../../components/Wrapper/Wrapper"
import Logo from '../../components/Logo/Logo'

const Navbar = () => {
    return (
        <header className=' py-8 top-0 left-0 w-full md:z-[6]'>
            <Wrapper className=' flex flex-row items-center justify-between'>
                <Logo />

                <nav className="menu">
                    <NavLink to='/trending' className={`menu-items`}>Trending</NavLink>
                    <NavLink to='/popular' className='menu-items'>Popular</NavLink>
                    <NavLink to='/top_rated' className='menu-items'>Top Rated</NavLink>
                    <NavLink to='/upcoming' className='menu-items'>Upcoming</NavLink>
                    <NavLink to='/search' className='menu-items flex items-center gap-2'>
                        <AiOutlineSearch className=" text-2xl" />
                        Search
                    </NavLink>
                </nav>
            </Wrapper>
        </header>
    )
}

export default Navbar