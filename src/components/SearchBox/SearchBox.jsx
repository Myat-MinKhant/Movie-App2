import { RiSearch2Line } from "react-icons/ri"

const SearchBox = () => {
    return (
        <div className=" inline-flex justify-start items-center gap-2 bg-primary-800 text-grey-200 rounded-md px-3 py-2 border border-grey-200 bg-light-black">
            <RiSearch2Line className=" w-5 h-5" />
            <input type="text"
                placeholder=" Search Movies..."
                className=" text-sm w-64 h-6 bg-transparent border-none outline-none"
            />
        </div>
    )
}

export default SearchBox