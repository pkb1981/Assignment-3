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
import iconDownloads from '../assets/icon-downloads.png';
import iconRatings from '../assets/icon-ratings.png';
import iconReview from '../assets/icon-review.png';

const AppDetails = () => {

    const data = useLoaderData();
    const { id } = useParams();

    // Find the app that matches the id
    const app = data.find(item => item.id.toString() === id);

    // Handle case if app not found
    if (!app) {
        return <Navigate to='/noApp' />
    }


    const chartData = app.ratings;

    return (

        <div>
            <div className="flex gap-4 w-11/12 mx-auto shadow-sm mb-2 p-4">
                <figure>
                    <img
                        src={app.image} className="w-30 h-30 bg-gray-200 border-0 p-4" />
                </figure>

                <div>
                    <div className="flex gap-1 items-center font-semibold">
                        <h2 className="text-xl ">{app.title}</h2>
                    </div>
                    <div className="text-sm">
                        <p>Developed by:<span className="text-gradient"> {app.companyName}</span></p>
                    </div>


                    <div className="stats stats-vertical lg:stats-horizontal shadow mb-4 ">

                        <div className="stat justify-center items-center">
                            <img src={iconDownloads} alt="" className="h-6 w-6" />Downloads <br />
                            <span className="text-2xl text-black font-bold">
                                {new Intl.NumberFormat("en-US", {
                                    notation: "compact",
                                }).format(app.downloads)}
                            </span>
                        </div>
                        <div className="stat justify-center items-center">
                            <img src={iconRatings} alt="" className="h-6 w-6" />Average Ratings <br />
                            <span className="text-2xl text-black font-bold">
                                {new Intl.NumberFormat("en-US", {
                                    notation: "compact",
                                }).format(app.ratingAvg)}
                            </span>
                        </div>
                        <div className="stat justify-center items-center">
                            <img src={iconReview} alt="" className="h-6 w-6" />Total Reviews <br />
                            <span className="text-2xl text-black font-bold">
                                {new Intl.NumberFormat("en-US", {
                                    notation: "compact",
                                }).format(app.reviews)}
                            </span>
                        </div>
                    </div>


                    <div className="card-actions justify-start">
                        <button className="btn bg-[#00D390] text-white">Install Now({app.size}MB) </button>
                    </div>
                </div>
            </div>


            {/* bar chart of app ratings */}
            <div>
                <div className="w-11/12 mx-auto mt-8">
                    <h2 className="text-xl font-bold mb-4"> Ratings</h2>

                    <div className="w-full h-[300px]">
                        <ResponsiveContainer>
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

                                <Bar
                                    dataKey="count"
                                    fill="#FF8811"
                                    radius={[0, 10, 10, 0]}
                                />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

            </div>


            {/* description of apps */}
            <div className="w-11/12 mx-auto pb-10">
                <h1 className="text-2xl font-bold">Description</h1>
                <p className="text-gray-600 text-sm">{app.description}</p>
            </div>
        </div>
    );
};

export default AppDetails;