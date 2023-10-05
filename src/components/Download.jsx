
export default function DownloadPopup({ result }) {
    return (
        <>
            <div className="fixed bg-gray-600 p-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/3 w-3/5 overflow-y-auto h-2/3 md:w-5/6 lg:w-7/12 min-w-fit md:h-2/5 md:overflow-y-hidden z-10">
                <div>
                    <h1 className="text-center pb-8 text-white font-bold">Select Movie Quality</h1>
                    <div className="flex flex-col md:flex-row justify-center md:space-x-5 sm:items-center gap-5">
                        {result.map((dInfo, index) => (
                            <div
                                key={index}
                                className="flex flex-col text-center space-y-3 px-3 sm:px-0 sm:pb-2 self-center"
                            >
                                <a
                                    href={dInfo.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="py-3 px-8 bg-primary-300 rounded text-white hover:bg-primary-400 transition flex items-center text-base"
                                >
                                    {dInfo.quality}
                                </a>
                                <p className=" text-white">{dInfo.type.toUpperCase()}</p>
                                <p className=" text-white">{dInfo.size}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}











