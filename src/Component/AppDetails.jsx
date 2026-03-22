import { useLoaderData, useParams } from "react-router";
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
        return <p className="text-center text-red-500">App not found!</p>;
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
                        <h2 className="text-xl ">{app.title}:</h2><span className="text-sm">{app.description}</span>
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
            <div className="w-11/12 mx-auto">
                <h1 className="text-2xl font-bold">Description</h1>
                <p>This focus app takes the proven Pomodoro technique and makes it even more practical for modern lifestyles. Instead of just setting a timer, it builds a complete environment for deep work, minimizing distractions and maximizing concentration. Users can create custom work and break intervals, track how many sessions they complete each day, and review detailed statistics about their focus habits over time. The design is minimal and calming, reducing cognitive load so you can focus entirely on the task at hand. Notifications gently let you know when to pause and when to resume, helping you maintain a healthy rhythm between work and rest.

                    A unique feature of this app is the integration of task lists with timers. You can assign each task to a specific Pomodoro session, making your schedule more structured. The built-in analytics show not only how much time you’ve worked but also which tasks consumed the most energy. This allows you to reflect on your efficiency and adjust your workflow accordingly. The app also includes optional background sounds such as white noise, nature sounds, or instrumental music to create a distraction-free atmosphere.

                    For people who struggle with procrastination, the app provides motivational streaks and achievements. Completing multiple Pomodoro sessions unlocks milestones, giving a sense of accomplishment. This gamified approach makes focusing more engaging and less like a chore. Whether you’re studying for exams, coding, writing, or handling office work, the app adapts to your routine. By combining focus tracking, task management, and motivational tools, this Pomodoro app ensures that you not only work harder but also smarter. It is a personal trainer for your brain, keeping you disciplined, refreshed, and productive throughout the day.</p>
            </div>

        </div>




    );
};

export default AppDetails;