import { useMemo } from "react";
import { Link } from "react-router-dom"

function PaginationPage({ results, loading, category, setLoading }) {

    function generateTotalPagination(results) {
        let arr = [];

        if (results.total_pages > 500) {
            for (let i = 1; i <= 500; i++) {
                arr.push(i);
            }
        } else {
            for (let i = 1; i <= results.total_pages; i++) {
                arr.push(i);
            }
        }

        return arr;
    }

    const totalPagination = useMemo(
        () => generateTotalPagination(results),
        [results]
    )
    // console.log(totalPagination);

    function handleGoSpecificPage() {
        setLoading(true);
        // setMoviesByPage(e.currentTarget.dataset.page);
        // setCurrentPage(true)
        // localStorage.setItem("Current_Page", e.currentTarget.dataset.page);
        // navigate(`/${category}?page=${currentPage}`);
    }

    return (
        <div className=" page-numbers ">
            <Link to={`/${category}/1`}>
                <button
                    className={`page-number ${totalPagination[0] === results.page ? "active" : ""
                        }  ${loading ? "cursor-not-allowed disabled:" : ""
                        }`}
                    key={totalPagination[0]}
                    data-page={totalPagination[0]}
                    onClick={handleGoSpecificPage}
                    disabled={loading}
                >
                    {totalPagination[0]}
                </button>
            </Link>

            {results.page >= 6 ? <span className=' text-white'>. . .</span> : <></>}

            {
                [...(totalPagination.length > 6

                    ? results.page < 6

                        ? totalPagination.slice(1, 6)

                        : results.page >= results - 4

                            ? totalPagination.slice(
                                totalPagination[totalPagination.length - 7],
                                totalPagination[totalPagination.length - 2]
                            )

                            : totalPagination.slice(
                                results.page - 3,
                                results.page + 2
                            )

                    : totalPagination),
                ].map(v => (
                    <Link to={`/${category}/${v}`} key={v}>
                        <button
                            key={v}
                            className={`page-number ${v === results.page ? "active" : ""
                                } ${loading ? "cursor-not-allowed" : ""
                                }`}
                            data-page={v}
                            disabled={loading}
                            onClick={handleGoSpecificPage}
                        >
                            {v}
                        </button>
                    </Link>
                ))
            }

            {results.page < totalPagination.length - 3 ? <span className=' text-white'>. . .</span> : <></>}

            {results.page < totalPagination.length - 2 && (
                <Link to={`/${category}/${totalPagination[totalPagination.length - 1]}`}>
                    <button
                        className={`page-number ${totalPagination[totalPagination.length - 1] === results.page
                            ? "active"
                            : ""
                            } py-1 px-2 ${loading ? "cursor-not-allowed" : ""}`}
                        key={totalPagination[totalPagination.length - 1]}
                        disabled={loading}
                        data-page={totalPagination[totalPagination.length - 1]}
                        onClick={handleGoSpecificPage}
                    >
                        {totalPagination[totalPagination.length - 1]}
                    </button>
                </Link>
            )}

        </div>
    )
}
export default PaginationPage