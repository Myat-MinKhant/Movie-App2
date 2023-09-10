import { useEffect, useRef, useState } from "react";
import SeaultResultCard from "../SearchResultCard/SeaultResultCard";
import { AiOutlineSearch } from 'react-icons/ai'
// import Skeleton from "../Skeleton/Skeleton";

const SearchBox = ({ closeResults, setCloseResults }) => {
    const [qurey, setQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const resultsRef = useRef()
    // const [isLoading, setIsLoading] = useState(true);

    const handleOnChange = (e) => {
        // e.preventDefault();
        setQuery(e.target.value)
        setCloseResults(false)

        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNmYzNGFkMDlmOGQ4Y2I1MjcxOTYwOTdhZjA2ZTZmYyIsInN1YiI6IjY0YTQyY2QwZTlkYTY5MDBjNzYzZmE5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Pz3w5x8vT6YWUX2VoQFhwaJDQT26g5srzBZQ337uAvM'
            }
        };

        fetch(`https://api.themoviedb.org/3/search/movie?query=${e.target.value}&include_adult=false&language=en-US&page=1'`, options)
            .then(res => res.json())
            .then(data => {
                if (!data.errors) {
                        setSearchResults(data.results)
                } else {
                    setSearchResults([])
                }
            })
    }

    useEffect(() => {
        function handleClickOutside(event) {
            if (resultsRef.current && !resultsRef.current.contains(event.target)) {
                setCloseResults(true);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [resultsRef, setCloseResults]);

    return (
        <main ref={resultsRef}>
            <div className=" inline-flex justify-start items-center gap-2 bg-primary-400 bg-opacity-80 text-white rounded-md px-3 py-2 border-grey-200">
                <AiOutlineSearch className=" w-5 h-5 text-white" />

                <input type="text"
                    placeholder=" Search Movies..."
                    className=" text-sm w-64 h-6 bg-transparent border-none outline-none placeholder-white"
                    value={qurey}
                    onChange={handleOnChange}
                    onMouseDown={handleOnChange}
                />
            </div>
            {!closeResults && (
                <div className=" w-[23%] h-fit shadow-md max-h-[calc(100vh-100px)] overflow-y-auto absolute top-[75px] pt-2 right-16 z-50 bg-grey-900 text-white ">

                    {searchResults.length > 0 ?
                        (
                            <ul>
                                {searchResults.map(movie => (
                                    <li key={movie.id}>
                                        <SeaultResultCard movie={movie} setCloseResults={setCloseResults} />
                                    </li>
                                ))}
                            </ul>
                        )
                        : (
                            <h3 className=" pt-2 pb-4 ml-5">No result...</h3>
                        )}
                </div >
            )}
        </main>
    )
}

export default SearchBox