import { useState } from "react";
import { Link, useLoaderData } from "react-router";
import iconDownloads from '../assets/icon-downloads.png';
import iconRatings from '../assets/icon-ratings.png';

const AllApps = () => {
    const [searchText, setSearchText] = useState("");
    const allApps = useLoaderData();

    const filteredApps = allApps.filter(app =>
        app.title.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <div className="mb-6 px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-6">
                <h2 className="text-2xl sm:text-3xl font-semibold">Our All Applications</h2>
                <p className="text-[#627382] text-sm sm:text-base">
                    Explore all apps on the market developed by us. We code for millions.
                </p>
            </div>

            {/* Search and count */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2 sm:gap-0">
                <p className="text-sm sm:text-base">({filteredApps.length}) Apps Found</p>
                <div className="w-full sm:w-auto">
                    <label className="relative block w-full sm:w-64">
                        <svg
                            className="absolute top-1/2 left-2 h-5 w-5 text-gray-400 -translate-y-1/2"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input
                            type="search"
                            required
                            placeholder="Search Apps"
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                            className="w-full pl-8 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm sm:text-base"
                        />
                    </label>
                </div>
            </div>

            {/* Apps Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {filteredApps.length > 0 ? (
                    filteredApps.map((app) => (
                        <Link to={`/app/${app.id}`} key={app.id}>
                            <div className="card bg-base-100 shadow-sm hover:shadow-md transition-shadow duration-300 rounded-xl overflow-hidden flex flex-col h-full">
                                <figure className="p-4 aspect-w-1 aspect-h-1 sm:aspect-h-1 sm:aspect-w-1 lg:aspect-w-1 lg:aspect-h-1">
                                    <img
                                        className="rounded-2xl w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                                        src={app.image}
                                        alt={app.title}
                                    />
                                </figure>
                                <div className="card-body flex flex-col flex-1 justify-between">
                                    <div className="mb-2">
                                        <p className="font-semibold truncate">{app.title}</p>
                                        <p className="text-xs sm:text-sm text-gray-500 line-clamp-3">
                                            {app.description}
                                        </p>
                                    </div>
                                    <div className="flex gap-2 sm:gap-4 mt-2">
                                        <button className="btn flex-1 flex items-center justify-center gap-2 btn-sm">
                                            <img src={iconDownloads} alt="" className="h-4 w-4" />
                                            <span>
                                                {new Intl.NumberFormat("en-US", {
                                                    notation: "compact",
                                                }).format(app.downloads)}
                                            </span>
                                        </button>
                                        <button className="btn flex-1 flex items-center justify-center gap-2 btn-sm">
                                            <img src={iconRatings} alt="" className="h-4 w-4" />
                                            <span>{app.ratingAvg}</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))
                ) : (
                    <p className="col-span-full text-center text-red-500 text-lg">
                        No App Found
                    </p>
                )}
            </div>
        </div>
    );
};

export default AllApps;