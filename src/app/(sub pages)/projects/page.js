import Image from "next/image";
import bg from "../../../../public/background/space-background.png";
import ProjectList from "../../../Components/Projects/ProjectList";
import { projectsData } from "../../data";

const Home = () => {
  return (
    <>
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="Background image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-90"
      />
      <ProjectList projects={projectsData} />
    </>
  );
};

export default Home;
