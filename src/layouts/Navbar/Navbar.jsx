// import classNames from "classnames"
import { NavLink } from "react-router-dom"
import Wrapper from "../../components/Wrapper/Wrapper"
import Logo from '../../components/Logo/Logo'
import SearchBox from "../../components/SearchBox/SearchBox"
import { useEffect, useState } from "react"
import { HiMiniArrowTrendingUp } from 'react-icons/hi2'
import { BsFire } from 'react-icons/bs'
import { MdAccessTimeFilled } from 'react-icons/md'
import { BiSolidStar } from 'react-icons/bi'

const Navbar = () => {
    const [closeResults, setCloseResults] = useState(true);
    const [navScroll, setNavScroll] = useState({
        show: true,
        scrollPos: 0,
        scrollDirection: null,
    });

    useEffect(() => {
        window.addEventListener("scroll", handleScrollDocument);

        return () => window.removeEventListener("scroll", handleScrollDocument);
    }, []);

    function handleScrollDocument() {
        setNavScroll((prev) => {
            return {
                scrollDirection:
                    document.body.getBoundingClientRect().top > prev.scrollPos
                        ? "up"
                        : "down",
                scrollPos: document.body.getBoundingClientRect().top,
            };
        });
    }

    return (
        <header className={`navbar py-8 top-0 left-0 w-full z-[99] sticky bg-grey-900 shadow-2xl
        ${!closeResults
                ? "show"
                : navScroll.scrollDirection === "down"
                    ? "hide"
                    : navScroll.scrollDirection === "up"
                        ? "show"
                        : ""
            }`}>
            <Wrapper className=' w-full flex-row items-center justify-between'>
                <Logo />

                <nav className="mobile-nav w-screen px-4 flex flex-col text-center">
                    <SearchBox closeResults={closeResults} setCloseResults={setCloseResults} />
                    <div className=" w-full flex items-center mt-6">
                        <NavLink to='/trending/1' className=' w-1/4 menu-items '>
                            <HiMiniArrowTrendingUp className=" w-6 h-6 mx-auto" />
                        </NavLink>
                        <NavLink to='/popular/1' className=' w-1/4 menu-items'>
                            <BsFire className=" w-6 h-6 mx-auto" />
                        </NavLink>
                        <NavLink to='/top_rated/1' className=' w-1/4 menu-items'>
                            <BiSolidStar className=" w-6 h-6 mx-auto" />
                        </NavLink>
                        <NavLink to='/upcoming/1' className=' w-1/4 menu-items'>
                            <MdAccessTimeFilled className=" w-6 h-6 mx-auto" />
                        </NavLink>
                    </div>
                </nav>

                <nav className="tablet-nav menu">
                    <SearchBox closeResults={closeResults} setCloseResults={setCloseResults} />
                    <NavLink to='/trending/1' className={`menu-items`}>Trending</NavLink>
                    <NavLink to='/popular/1' className='menu-items'>Popular</NavLink>
                    <NavLink to='/top_rated/1' className='menu-items'>Top Rated</NavLink>
                    <NavLink to='/upcoming/1' className='menu-items'>Upcoming</NavLink>
                </nav>
            </Wrapper>
        </header >
    )
}

export default Navbar