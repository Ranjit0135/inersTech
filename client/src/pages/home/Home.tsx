import Banner from "../../section/_home/Banner";
import Courses from "../../section/_home/Courses";
import ProjectShowSwiper from "../../section/_home/ProjectShowSwiper";
import About from "../about/About";
import Features from "../featurepage/Features";

const Home = () => {
  return (
    <>
      <div>
        <Banner />
        <About />
        <Courses />
        <Features />
        <ProjectShowSwiper />
      </div>
    </>
  );
};

export default Home;
