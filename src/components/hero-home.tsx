import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import styles from "../styles/modules/hero.module.css";

const HeroHome = () => {
  return (
    <section className={`relative ${styles.heroBg}  py-12`}>
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-8 px-4 lg:px-0">
        {/* Left Section */}
        <div className="text-center lg:text-left max-w-lg lg:max-w-xl">
          <h2 className="text-sm text-purple-500 font-bold tracking-wide uppercase">Welcome to Ztech!</h2>
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-gray-900 mt-2">
            We Are Ready <br />
            <span className="bg-[#FF8911] text-white"> To Provide</span>IT Solution
          </h1>
          <p className="text-gray-500 mt-4">
            Assertively streamline interactive interfaces after value infrastructures. Utom datively fabricate fully tested methodologies before
            infrastructures. We are top professional software.
          </p>
          <div className="mt-6 flex justify-center lg:justify-start space-x-4">
            <a href="#" className="px-6 py-3 bg-black text-white font-medium rounded-lg shadow-md hover:bg-gray-800 transition">
              Explore Services
            </a>
            <a
              href="#"
              className="flex items-center px-6 py-3 bg-white border border-gray-300 text-gray-700 font-medium rounded-lg shadow-md hover:bg-gray-100 transition"
            >
              <FaPlay className="mr-2 text-orange-500" /> Watch A Video
            </a>
          </div>
        </div>

        {/* Right Section (Image and Stats) */}
        <div className="relative">
          <Image
            src="/team.jpg" // Replace with your image path
            alt="Team working together"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
          <div className="absolute top-4 left-4 bg-white p-4 rounded-lg shadow-md">
            <p className="text-sm text-gray-500">Reviewed on</p>
            <p className="font-semibold text-gray-900 flex items-center">
              Clutch <span className="text-red-500 ml-2">★★★★★</span>
            </p>
            <p className="text-xs text-gray-400">(31 reviews)</p>
          </div>
          <div className="absolute bottom-4 right-4 bg-white p-4 rounded-lg shadow-md">
            <p className="text-2xl font-bold text-gray-900">2000+</p>
            <p className="text-sm text-gray-500">Happy Clients</p>
            <p className="text-xs text-gray-400">4.9 (Review)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroHome;
