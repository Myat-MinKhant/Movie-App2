import { useState } from "react";
import SeaultResultCard from "../SearchResultCard/SeaultResultCard";
import { AiOutlineSearch } from 'react-icons/ai'
// import Skeleton from "../Skeleton/Skeleton";

const SearchBox = ({ closeResults, setCloseResults }) => {
    const [qurey, setQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
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


    return (
            <div className=" inline-flex justify-start items-center gap-2 bg-primary-400 bg-opacity-80 text-white rounded-md px-3 py-2 border-grey-200 w-full relative">
                <AiOutlineSearch className=" w-5 h-5 text-white" />

                <input type="text"
                    placeholder=" Search Movies..."
                    className=" text-sm h-8  bg-transparent border-none outline-none placeholder-white"
                    value={qurey}
                    onChange={handleOnChange}
                    onMouseDown={handleOnChange}
                    onClick={handleOnChange}
                />

                {!closeResults && (
                    <div className="w-full h-fit shadow-md max-h-[calc(100vh-100px)] overflow-y-auto absolute top-12 right-0 left-0 pt-2 z-50 bg-grey-900 text-white ">

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
                                <h3 className=" pt-2 pb-4 ml-5 text-left">No result...</h3>
                            )}
                    </div >
                )}
            </div>
    )
}

export default SearchBox