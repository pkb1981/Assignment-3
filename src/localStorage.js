// get installed apps
export const getInstalledApps = () => {
    const stored = localStorage.getItem("installedApps");
    return stored ? JSON.parse(stored) : [];
};

// save app
export const saveInstalledApp = (appId) => {
    const storedApps = getInstalledApps();

    if (!storedApps.includes(appId)) {
        storedApps.push(appId);
        localStorage.setItem("installedApps", JSON.stringify(storedApps));
    }
};

// remove app
export const removeInstalledApp = (appId) => {
    const storedApps = getInstalledApps();
    const updatedApps = storedApps.filter(id => id !== appId);
    localStorage.setItem("installedApps", JSON.stringify(updatedApps));
};