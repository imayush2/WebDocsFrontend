import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import SideBarRight from "./SideBarRight";
import { pageTopics } from "../data/topicsData";

const MainContainer = () => {
  const location = useLocation();

  // Get the current page name from pathname
  const currentPage = location.pathname.replace("/", ""); // e.g., 'redux'
  
  // Get topics for this page, fallback to empty array
  const topics = pageTopics[currentPage] || [];

  return (
    <div className="flex flex-1 overflow-hidden">
      {/* Sidebar1 - always visible */}
      <Sidebar />

      {/* Main content */}
      <main className="flex-1 p-6 h-[calc(100vh-5rem)] overflow-auto">
        <Outlet />
      </main>

      {/* Sidebar2 - only show on non-home pages */}
      {location.pathname !== "/" && <SideBarRight topics={topics} />}
    </div>
  );
};

export default MainContainer;
