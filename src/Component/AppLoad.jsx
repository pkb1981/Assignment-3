import { Link } from "react-router";
import iconDownloads from '../assets/icon-downloads.png';
import iconRatings from '../assets/icon-ratings.png';

const AppLoad = ({ selectiveApps }) => {
    return (
        <div className="mb-6 px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-6">
                <h2 className="text-2xl sm:text-3xl font-semibold">Trending Apps</h2>
                <p className="text-[#627382] text-sm sm:text-base">
                    Explore All Trending Apps on the Market developed by us
                </p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-5">
                {selectiveApps
                    .filter(app => app.ratingAvg >= 4.5)
                    .slice(0, 8)
                    .sort((a, b) => b.ratingAvg - a.ratingAvg)
                    .map((app) => (
                        <Link to={`/app/${app.id}`} key={app.id} className="w-full">
                            <div className="card bg-base-100 shadow-sm hover:shadow-lg transition-shadow duration-300">
                                <figure className="p-4 aspect-w-1 aspect-h-1 sm:aspect-h-1 sm:aspect-w-1 lg:aspect-w-1 lg:aspect-h-1">
                                    <img
                                        className="rounded-2xl w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                                        src={app.image}
                                        alt={app.title}
                                    />
                                </figure>
                                <div className="card-body p-4">
                                    <div className="mb-3">
                                        <p className="font-semibold text-sm sm:text-base truncate">{app.title}</p>
                                        <p className="text-xs sm:text-sm text-gray-500 line-clamp-2">{app.description}</p>
                                    </div>

                                    <div className="flex gap-3 sm:gap-4">
                                        <button className="btn flex-1 flex items-center justify-center gap-2 btn-sm sm:btn-md">
                                            <img src={iconDownloads} alt="Downloads" className="h-4 w-4" />
                                            <span>
                                                {new Intl.NumberFormat("en-US", { notation: "compact" }).format(app.downloads)}
                                            </span>
                                        </button>

                                        <button className="btn flex-1 flex items-center justify-center gap-2 btn-sm sm:btn-md">
                                            <img src={iconRatings} alt="Rating" className="h-4 w-4" />
                                            <span>{app.ratingAvg}</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
            </div>

            {/* Show All Button */}
            <div className="text-center mt-6">
                <Link to='/apps'>
                    <button className="btn text-xs sm:text-sm w-28 sm:w-32 h-8 sm:h-10 text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
                        Show All
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default AppLoad;