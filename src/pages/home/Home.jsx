
// import Sidebar from "../../components/sidebar/Sidebar";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widgets from "../../components/widgets/Widgets";

import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Sidebar/>
      <div className="homecontainer">
      <Navbar/>
<div className="widgets">
   <Widgets/>
   <Widgets/>
   <Widgets/>
   <Widgets/>
      </div>
    </div>
    </div>
  )
}

export default Home
