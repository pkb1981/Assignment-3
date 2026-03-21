import { FaAppStoreIos, FaGooglePlay } from "react-icons/fa";
import heroImg from '../assets/hero.png';
const Hero = () => {
    return (

        // upper section of hero
        <div className="hero mb-4">
            <div className="hero-content text-center">
                <div>
                    <h2 className="text-4xl font-semibold">We Build <br />
                        <span className="text-4xl font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">Productive</span> Apps</h2>

                    <p className="py-6">
                        At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.
                    </p>

                    <div className="mb-6">
                        <button className="btn mr-3">
                            <FaGooglePlay size={24} className="text-[#00BFFC]" />
                            Google Play
                        </button>
                        <button className="btn">
                            <FaAppStoreIos size={24} className="text-[#0073F6]" />
                            App Store
                        </button>
                    </div>

                    {/* main hero section */}
                    <section>
                        <div>
                            <img src={heroImg} alt="" />
                        </div>

                    </section>

                    {/* floating section */}
                    <section className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white h-60 pt-10 rounded-2xl">
                        <h1 className="text-2xl  font-semibold">Trusted by Millions, Built for You</h1>
                        <div className="stats stats-vertical lg:stats-horizontal shadow ">
                            <div className="stat ">
                                <div className="stat-title text-white ">Total Downloads</div>
                                <div className="stat-value text-white">29.6M</div>
                                <div className="stat-desc text-white">21% more than last month</div>
                            </div>

                            <div className="stat">
                                <div className="stat-title text-white">Total Reviews</div>
                                <div className="stat-value text-white">906K</div>
                                <div className="stat-desc text-white">46% more than last month</div>
                            </div>

                            <div className="stat">
                                <div className="stat-title text-white">Active Apps</div>
                                <div className="stat-value text-white">132+</div>
                                <div className="stat-desc text-white">31 more will Launch</div>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
};

export default Hero;