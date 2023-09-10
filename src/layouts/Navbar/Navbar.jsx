// import classNames from "classnames"
import { NavLink } from "react-router-dom"
import Wrapper from "../../components/Wrapper/Wrapper"
import Logo from '../../components/Logo/Logo'
import SearchBox from "../../components/SearchBox/SearchBox"
import { useEffect, useState } from "react"

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
        <header className={`navbar py-8 top-0 left-0 w-full z-[99] sticky bg-grey-900 
        ${!closeResults
                ? "show"
                : navScroll.scrollDirection === "down"
                    ? "hide"
                    : navScroll.scrollDirection === "up"
                        ? "show"
                        : ""
            }`}>
            <Wrapper className=' flex flex-row items-center justify-between'>
                <Logo />

                <nav className="menu">
                    <NavLink to='/trending/1' className={`menu-items`}>Trending</NavLink>
                    <NavLink to='/popular/1' className='menu-items'>Popular</NavLink>
                    <NavLink to='/top_rated/1' className='menu-items'>Top Rated</NavLink>
                    <NavLink to='/upcoming/1' className='menu-items'>Upcoming</NavLink>
                    <SearchBox closeResults={closeResults} setCloseResults={setCloseResults} />
                </nav>
            </Wrapper>
        </header>
    )
}

export default Navbar