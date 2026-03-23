import { Link } from 'react-router';
import notFound from '../assets/App-Error.png';

const AppNotFoundPage = () => {
    return (
        <div className="flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 py-6 min-h-screen text-center">
            <img
                src={notFound}
                alt="App Not Found"
                className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 mb-5 object-contain"
            />
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">OPPS!! APP NOT FOUND</h1>
            <p className="text-xs sm:text-sm md:text-base text-gray-400 mb-4">
                The App you are requesting is not found on our system. Please try another app.
            </p>
            <Link to="/">
                <button className="btn w-24 sm:w-28 md:w-32 h-8 sm:h-9 text-xs sm:text-sm text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
                    Go Back!
                </button>
            </Link>
        </div>
    );
};

export default AppNotFoundPage;