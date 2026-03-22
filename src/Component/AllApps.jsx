import { useLoaderData } from "react-router";
import iconDownloads from '../assets/icon-downloads.png';
import iconRatings from '../assets/icon-ratings.png';


const AllApps = () => {

    const allApps = useLoaderData();



    return (

        <div className="mb-6">
            <div className="text-center">
                <h2 className="text-2xl  font-semibold">Our All Applications</h2>
                <p className="text-[#627382]">Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>

            <div className="flex justify-between items-center my-2">
                <p>({allApps.length}) Apps Found</p>
                <div>
                    <label className="input">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
                        <input type="search" required placeholder="Search Apps" />
                    </label>
                </div>
            </div>


            {/* dynamically loading apps */}
            <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 my-5">

                {
                    allApps.map((app) => (
                        <div key={app.id} className="card bg-base-100 shadow-sm">
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
                    ))
                }

            </div>
        </div>
    );
};

export default AllApps;