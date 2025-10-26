import { Link } from "react-router-dom";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaDocker, FaAws } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiTypescript, SiFormik, SiRedux, SiMongodb, SiSequelize, SiNextdotjs, SiJest, SiPostgresql } from "react-icons/si";

const Sidebar = () => {
  return (
    <aside className="top-0 left-0 w-70 h-[calc(100vh-3.5rem)] overflow-y-auto">
      <div className="top-20 left-0 w-70 text-black shadow-lg">
        {/* Sidebar Links */}
        <div className="flex flex-col space-y-2 p-4 text-[15px]">
          <Link to="/html" className="flex items-center gap-2 p-2 rounded hover:bg-blue-100">
            <FaHtml5 className="text-orange-600" /> HTML
          </Link>
          <Link to="/css" className="flex items-center gap-2 p-2 rounded hover:bg-blue-100">
            <FaCss3Alt className="text-blue-600" /> CSS
          </Link>
          <Link to="/tailwind" className="flex items-center gap-2 p-2 rounded hover:bg-blue-100">
            <SiTailwindcss className="text-sky-500" /> Tailwind CSS
          </Link>
          <Link to="/javascript" className="flex items-center gap-2 p-2 rounded hover:bg-blue-100">
            <SiJavascript className="text-yellow-400" /> JavaScript
          </Link>
          <Link to="/typescript" className="flex items-center gap-2 p-2 rounded hover:bg-blue-100">
            <SiTypescript className="text-blue-500" /> TypeScript
          </Link>
          <Link to="/react" className="flex items-center gap-2 p-2 rounded hover:bg-blue-100">
            <FaReact className="text-sky-400" /> React
          </Link>
          <Link to="/formik" className="flex items-center gap-2 p-2 rounded hover:bg-blue-100">
            <SiFormik className="text-pink-500" /> Formik
          </Link>
          <Link to="/redux" className="flex items-center gap-2 p-2 rounded hover:bg-blue-100">
            <SiRedux className="text-purple-600" /> Redux
          </Link>
          <Link to="/react-query" className="flex items-center gap-2 p-2 rounded hover:bg-blue-100">
            <SiRedux className="text-red-500" /> React Query
          </Link>
          <Link to="/node" className="flex items-center gap-2 p-2 rounded hover:bg-blue-100">
            <FaNodeJs className="text-green-600" /> Node.js
          </Link>
          <Link to="/sql" className="flex items-center gap-2 p-2 rounded hover:bg-blue-100">
            <SiPostgresql className="text-indigo-500" /> SQL
          </Link>
          <Link to="/mongodb" className="flex items-center gap-2 p-2 rounded hover:bg-blue-100">
            <SiMongodb className="text-green-600" /> MongoDB
          </Link>
          <Link to="/sequilize" className="flex items-center gap-2 p-2 rounded hover:bg-blue-100">
            <SiSequelize className="text-sky-600" /> Sequelize
          </Link>
          <Link to="/git" className="flex items-center gap-2 p-2 rounded hover:bg-blue-100">
            <FaGitAlt className="text-orange-500" /> Git
          </Link>
          <Link to="/nextjs" className="flex items-center gap-2 p-2 rounded hover:bg-blue-100">
            <SiNextdotjs /> Next.js
          </Link>
          <Link to="/aws" className="flex items-center gap-2 p-2 rounded hover:bg-blue-100">
            <FaAws className="text-yellow-500" /> AWS
          </Link>
          <Link to="/docker" className="flex items-center gap-2 p-2 rounded hover:bg-blue-100">
            <FaDocker className="text-blue-500" /> Docker
          </Link>
          <Link to="/jest" className="flex items-center gap-2 p-2 rounded hover:bg-blue-100">
            <SiJest className="text-red-600" /> Jest
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
