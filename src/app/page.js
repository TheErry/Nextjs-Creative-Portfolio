import Image from "next/image";
import Navigation from "../Components/Navigation/Navigation";
import bg from "../../public/background/space-background.png";
import RenderModel from "../Components/RenderModel";
import { Castle } from "../Components/ModelComponents/Castle";

const Home = () =>{
  return (
    <main className="flex min-h-screen flex-col justify-between items-center relative">
      <Image 
        priority
        sizes="100vw"
        src={bg}
        alt="Background image"
        fill
        className="-z-50 w-full h-full object-cover object-center opacity-90"
      />
      <div className="w-full h-screen">
        <Navigation />
        <RenderModel>
          <Castle />
        </RenderModel>
      </div>
    </main>
  );
}

export default Home;