import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import iconDownloads from '../assets/icon-downloads.png';
import iconRatings from '../assets/icon-ratings.png';
import { getInstalledApps, removeInstalledApp } from "../localStorage";

const InstalledApps = () => {
    const [installedAppIds, setInstalledAppIds] = useState([]);
    const data = useLoaderData();

    useEffect(() => {
        const storedApps = getInstalledApps();
        setInstalledAppIds(storedApps);
    }, []);

    if (!data) {
        return <p className="text-center mt-10">Loading apps...</p>;
    }

    const installedApps = data.filter(app => installedAppIds.includes(app.id));

    if (installedApps.length === 0) {
        return <p className="text-center mt-10">No apps installed yet.</p>;
    }

    // toaster added for the button clicked uninstalled
    const handleUninstall = (appId, appTitle) => {
        const updatedApps = installedAppIds.filter(id => id !== appId);
        setInstalledAppIds(updatedApps);
        removeInstalledApp(appId);

        Swal.fire({
            title: "Uninstalled!",
            text: `${appTitle} has been uninstalled`,
            icon: "success",
            timer: 2000,
            showConfirmButton: false,
            position: "top-end",
            toast: true,
            background: "#323232",
            color: "#fff",
        });
    };

    return (
        <div className="pb-4">
            <h1 className="text-center text-2xl font-semibold">Your Installed Apps</h1>
            <p className="text-center text-xs text-gray-400">
                Explore all trending apps on the Market developed by us
            </p>

            <div className="w-11/12 mx-auto mt-4 flex flex-col gap-4">
                {installedApps.map(app => (
                    <div
                        key={app.id}
                        className="flex flex-col sm:flex-row sm:items-center shadow-md p-4 rounded-lg gap-4 bg-white"
                    >
                        {/* App Image */}
                        <div className="flex-shrink-0">
                            <img
                                src={app.image}
                                alt={app.title}
                                className="w-full max-w-[120px] h-auto sm:w-24 sm:h-24 rounded-lg object-cover"
                            />
                        </div>

                        {/* App Info + Actions */}
                        <div className="flex-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                            {/* App Info */}
                            <div className="flex-1 flex flex-col gap-2">
                                <p className="font-semibold">{app.title}</p>
                                <p className="text-xs text-gray-600">{app.description}</p>

                                <div className="flex flex-wrap items-center gap-3 mt-2 text-sm">
                                    <div className="flex items-center gap-1 text-[#00D390]">
                                        <img src={iconDownloads} alt="Downloads" className="h-4 w-4" />
                                        <span>
                                            {new Intl.NumberFormat("en-US", { notation: "compact" }).format(app.downloads)}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-1 text-[#FF8811]">
                                        <img src={iconRatings} alt="Ratings" className="h-4 w-4" />
                                        <span>{app.ratingAvg}</span>
                                    </div>
                                    <span className="text-gray-400">{app.size} MB</span>
                                </div>
                            </div>

                            {/* Uninstall Button */}
                            <div className="flex-shrink-0">
                                <button
                                    className="btn btn-sm bg-[#00D390] text-white w-full sm:w-auto"
                                    onClick={() => handleUninstall(app.id, app.title)}
                                >
                                    Uninstall
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InstalledApps;