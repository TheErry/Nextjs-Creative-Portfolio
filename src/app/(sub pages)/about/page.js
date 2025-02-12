import Image from "next/image";
import bg from "../../../../public/background/space-background.png";
import AboutDetails from "@/Components/About/AboutDetails";


const About = () =>{
  return (
    <>
        <Image 
          priority
          sizes="100vw"
          src={bg}
          alt="Background image"
          className="-z-50 object-cover object-center opacity-90 fixed top-0 left-0"
        />

        <div className="flex flex-col items-center w-full relative">
          <div className="flex flex-col items-center tect-center top-[30%] left-1/2">
            <h1 className="font-bold text-9xl text-accent">Erika A. Porath</h1>
            <p className="font-light text-foreground text-ls">Frontend developer, game designer and animator</p>
          </div>
        </div>
        <AboutDetails />

    </>
  );
}

export default About;