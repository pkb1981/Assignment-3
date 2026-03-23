import { FaAppStoreIos, FaGooglePlay } from "react-icons/fa";
import heroImg from '../assets/hero.png';

const Hero = () => {
    return (
        <div className="hero mb-4 px-4 sm:px-6 lg:px-12">
            <div className="hero-content flex flex-col items-center text-center">
                <div className="max-w-3xl">
                    {/* Heading */}
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-snug">
                        We Build <br />
                        <span className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                            Productive
                        </span> Apps
                    </h2>

                    {/* Description */}
                    <p className="py-6 text-sm sm:text-base md:text-lg">
                        At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.
                        Our goal is to turn your ideas into digital experiences that truly make an impact.
                    </p>

                    {/* App Store Buttons */}
                    <div className="flex flex-col sm:flex-row justify-center gap-3 mb-6">
                        <a
                            href="https://play.google.com/store/apps?hl=en"
                            target="_blank"
                            className="btn flex items-center gap-2 px-6 py-3"
                        >
                            <FaGooglePlay size={24} className="text-[#00BFFC]" />
                            Google Play
                        </a>
                        <a
                            href="https://apps.apple.com/us/iphone/apps"
                            target="_blank"
                            className="btn flex items-center gap-2 px-6 py-3"
                        >
                            <FaAppStoreIos size={24} className="text-[#0073F6]" />
                            App Store
                        </a>
                    </div>

                    {/* Hero Image */}
                    <div className="w-full max-w-lg mx-auto mb-8">
                        <img src={heroImg} alt="Hero" className="w-full h-auto object-contain" />
                    </div>

                    {/* Floating Stats */}
                    <section className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white py-10 px-4 sm:px-6 rounded-2xl">
                        <h1 className="text-xl sm:text-2xl font-semibold mb-6 text-center">
                            Trusted by Millions, Built for You
                        </h1>
                        <div className="stats stats-vertical lg:stats-horizontal shadow-none text-white">
                            <div className="stat">
                                <div className="stat-title text-white">Total Downloads</div>
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