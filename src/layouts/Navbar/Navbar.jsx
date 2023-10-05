// import classNames from "classnames"
import { NavLink } from "react-router-dom"
import Wrapper from "../../components/Wrapper/Wrapper"
import Logo from '../../components/Logo/Logo'
import SearchBox from "../../components/SearchBox/SearchBox"
import { useEffect, useRef, useState } from "react"
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
    const resultsRef = useRef()
    const resultsRef2 = useRef()


    // console.log(navScroll.scrollPos);
    useEffect(() => {
        window.addEventListener("scroll", handleScrollDocument);

        return () => window.removeEventListener("scroll", handleScrollDocument);
    }, []);


    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
            if (resultsRef.current && !resultsRef.current.contains(event.target)) {
                // alert("You clicked outside of me!");
                setCloseResults(true);
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        // document.addEventListener("onclick", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside); 
            // document.removeEventListener("onclick", handleClickOutside); 
        };
    }, [resultsRef, setCloseResults]);

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
        <Wrapper className={`navbar py-8 top-0 left-0 z-[99] sticky bg-grey-900 shadow-2xl
        ${!closeResults
                ? "show"
                : navScroll.scrollDirection === "down" && navScroll.scrollPos < -150
                    ? "hide"
                    : navScroll.scrollDirection === "up" && navScroll.scrollPos > 150
                        ? "show"
                        : ""
            }`}>

            {/* MOBILE AND TABLET NAV  */}
            <nav className=' flex-row items-center justify-between lg:hidden'>
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                    <Logo />
                    <div className=" sm:w-3/5 " ref={resultsRef2}>
                        <SearchBox closeResults={closeResults} setCloseResults={setCloseResults} />
                    </div>
                </div>

                <div className="mobile-nav flex flex-col text-center sm:mt-1">
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
                </div>
            </nav>


            {/* LAPTOP NAV  */}
            <nav className="w-full tablet-nav menu flex items-center justify-between">
                <Logo />

                <div className=" flex items-center gap-5">
                    <NavLink to='/trending/1' className={`menu-items`}>Trending</NavLink>
                    <NavLink to='/popular/1' className='menu-items'>Popular</NavLink>
                    <NavLink to='/top_rated/1' className='menu-items'>Top Rated</NavLink>
                    <NavLink to='/upcoming/1' className='menu-items'>Upcoming</NavLink>
                    <div className=" lg:w-[300px]" ref={resultsRef}>
                        <SearchBox closeResults={closeResults} setCloseResults={setCloseResults} />
                    </div>
                </div>
            </nav>
        </Wrapper >
    )
}

export default Navbar