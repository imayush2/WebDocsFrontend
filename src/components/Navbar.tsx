import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white px-4 py-2 shadow-md h-20 z-10">
      <div className="flex items-center justify-between">
        {/* Left: Menu + Title */}
        <Link to="/">
        <div className="flex items-center space-x-3">
          <span className="font-bold text-lg">Web Docs</span>
        </div>
        </Link>

         {/* Right: Buttons */}
         <div className="flex space-x-3 p-4">
          <button className="px-3 py-1 rounded hover:bg-blue-700">Docs</button>
          <Link className="px-3 py-1 rounded hover:bg-blue-700" to="/dsa">DSA</Link>
          <button className="px-3 py-1 rounded hover:bg-blue-700">Core</button>
          <button className="px-3 py-1 rounded hover:bg-blue-700">Interview</button>
        </div>

        {/* Middle: Search box */}
        <div className="hidden sm:flex flex-1 justify-center px-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full max-w-md px-3 py-1 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>

        <div className="">
          <button className="px-4 py-2 bg-white text-blue-600 font-semibold rounded hover:bg-gray-200 transition">
            Sign In
          </button>
          </div>

        <div className="flex items-center space-x-3">
        <FaUserCircle size={28} className="cursor-pointer hover:text-gray-400" />
      </div>

       
      </div>
    </nav>
  );
};

export default Navbar;
