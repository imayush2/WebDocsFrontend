import Navbar from "./Navbar";
import MainContainer from "./MainContainer";

const Layout = () => {
  return (
    <div className="h-screen flex flex-col">
      {/* Fixed Navbar */}
      <Navbar />

      {/* Main container: sidebars + main content */}
      <MainContainer />
    </div>
  );
};

export default Layout;
