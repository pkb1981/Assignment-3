import { Link } from "react-router";
import iconDownloads from '../assets/icon-downloads.png';
import iconRatings from '../assets/icon-ratings.png';

const AppLoad = ({ selectiveApps }) => {


    return (
        <div className="mb-6">
            <div className="text-center">
                <h2 className="text-2xl  font-semibold">Trending Apps</h2>
                <p className="text-[#627382]">Explore All Trending Apps on the Market developed by us</p>

            </div>

            {/* card area */}
            <div>
                <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 my-5">

                    {
                        selectiveApps
                            .filter(app => app.ratingAvg >= 4.5).slice(0, 8).sort((a, b) => b.ratingAvg - a.ratingAvg)
                            .map((app) => (
                                <Link to={`/app/${app.id}`} key={app.id}>
                                    <div className="card bg-base-100 shadow-sm">
                                        <figure className="p-4">
                                            <img className="rounded-2xl size-full object-cover object-top hover:scale-105 transition-all hover:-rotate-2 duration-500" src={app.image} alt="" />
                                        </figure>
                                        <div className="card-body">
                                            <div>
                                                <p className="font-semibold whitespace-nowrap">{app.title}:
                                                </p>
                                                <p className="text-xs font-extralight">{app.description}</p>
                                            </div>


                                            <div className="flex gap-8 ">
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
                    }

                </div>

                {/* button all */}
                <div className="text-center "><Link to='/apps'>
                    <button className=" btn text-xs w-25 h-8 text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
                        Show All
                    </button></Link>
                </div>

            </div>

        </div>
    );
};

export default AppLoad;