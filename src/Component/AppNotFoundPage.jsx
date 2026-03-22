import { Link } from 'react-router';
import notFound from '../assets/App-Error.png';


const AppNotFoundPage = () => {
    return (
        <div className="flex flex-col justify-center items-center pb-6">

            <img src={notFound} alt="" className='h-35 w-35 mb-5' />
            <h1 className="text-2xl font-bold ">OPPS!! APP NOT FOUND</h1>

            <p className="text-sm text-gray-400">The App you are requesting is not found on our system.  please try another apps</p>

            <Link to="/"><button className='btn w-28 h-8 text-xs text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'>Go Back!</button>
            </Link>

        </div>
    );
};

export default AppNotFoundPage;