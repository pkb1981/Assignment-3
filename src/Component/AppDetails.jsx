import { useEffect, useState } from "react";
import { Navigate, useLoaderData, useParams } from "react-router";
import {
    Bar,
    BarChart,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";
import Swal from "sweetalert2";
import iconDownloads from '../assets/icon-downloads.png';
import iconRatings from '../assets/icon-ratings.png';
import iconReview from '../assets/icon-review.png';
import { getInstalledApps, saveInstalledApp } from "../localStorage";

const AppDetails = () => {
    const [isInstalled, setIsinstalled] = useState(false);
    const data = useLoaderData();
    const { id } = useParams();

    const app = data.find(item => item.id.toString() === id);

    if (!app) {
        return <Navigate to='/noApp' />
    }

    useEffect(() => {
        const storedApps = getInstalledApps();
        if (storedApps.includes(Number(app.id))) {
            setIsinstalled(true);
        }
    }, [app.id]);


    // toaster added for the button clicked installed 
    const handleInstall = () => {
        saveInstalledApp(app.id);
        setIsinstalled(true);


        Swal.fire({
            title: "installed!",
            text: `${app.title} has been installed`,
            icon: "success",
            timer: 2000,
            showConfirmButton: false,
            position: "top-end",
            toast: true,
            background: "#323232",
            color: "#fff",
        });
    };
    const chartData = app.ratings;


    return (
        <div className="px-4 md:px-8 lg:px-16">
            {/* App Info */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 w-full max-w-5xl mx-auto shadow-sm mb-4 p-4 bg-white rounded-lg">
                <figure className="flex-shrink-0 mx-auto md:mx-0">
                    <img
                        src={app.image}
                        className="w-40 h-40 md:w-36 md:h-36 object-cover rounded-lg bg-gray-200 p-2"
                        alt={app.title}
                    />
                </figure>

                <div className="flex-1 flex flex-col justify-between">
                    <div>
                        <h2 className="text-xl md:text-2xl font-semibold mb-1">{app.title}</h2>
                        <p className="text-sm md:text-base text-gray-700">
                            Developed by: <span className="text-gradient font-medium">{app.companyName}</span>
                        </p>
                    </div>

                    {/* Stats */}
                    <div className="stats stats-vertical sm:stats-horizontal shadow mb-4 mt-4 sm:mt-6">
                        <div className="stat justify-center items-center">
                            <img src={iconDownloads} alt="" className="h-6 w-6 mr-1 inline" />
                            Downloads <br />
                            <span className="text-2xl text-black font-bold">
                                {new Intl.NumberFormat("en-US", { notation: "compact" }).format(app.downloads)}
                            </span>
                        </div>
                        <div className="stat justify-center items-center">
                            <img src={iconRatings} alt="" className="h-6 w-6 mr-1 inline" />
                            Avg Ratings <br />
                            <span className="text-2xl text-black font-bold">
                                {new Intl.NumberFormat("en-US", { notation: "compact" }).format(app.ratingAvg)}
                            </span>
                        </div>
                        <div className="stat justify-center items-center">
                            <img src={iconReview} alt="" className="h-6 w-6 mr-1 inline" />
                            Total Reviews <br />
                            <span className="text-2xl text-black font-bold">
                                {new Intl.NumberFormat("en-US", { notation: "compact" }).format(app.reviews)}
                            </span>
                        </div>
                    </div>

                    {/* Install Button */}
                    <div className="card-actions justify-start">
                        <button
                            onClick={handleInstall}
                            disabled={isInstalled}
                            className={`btn w-full md:w-auto text-white ${isInstalled ? "bg-gray-400" : "bg-[#00D390]"}`}>
                            {isInstalled ? "Installed" : `Install Now (${app.size}MB)`}
                        </button>
                    </div>
                </div>
            </div>

            {/* Ratings Chart */}
            <div className="w-full max-w-5xl mx-auto mt-8">
                <h2 className="text-xl md:text-2xl font-bold mb-4">Ratings</h2>
                <div className="w-full h-64 sm:h-80 md:h-96">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            data={chartData}
                            layout="vertical"
                            margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis
                                type="number"
                                tickFormatter={(value) =>
                                    new Intl.NumberFormat("en-US", { notation: "compact" }).format(value)
                                }
                            />
                            <YAxis type="category" dataKey="name" />
                            <Tooltip
                                formatter={(value) =>
                                    new Intl.NumberFormat("en-US", { notation: "compact" }).format(value)
                                }
                            />
                            <Bar dataKey="count" fill="#FF8811" radius={[0, 10, 10, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Description */}
            <div className="w-full max-w-5xl mx-auto pb-10 mt-8">
                <h1 className="text-2xl md:text-3xl font-bold mb-2">Description</h1>
                <p className="text-gray-600 text-sm md:text-base">{app.description}</p>
            </div>
        </div>
    );
};

export default AppDetails;