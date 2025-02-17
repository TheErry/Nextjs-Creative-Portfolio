import Image from "next/image";
import bg from "../../../../public/background/space-background.png";
import AboutDetails from "@/Components/About/AboutDetails";

const About = () => {
  return (
    <>
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="Background image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-90"
      />

      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center text-center top-1/2 sm:top-[30%] left-1/2">
          <h1 className="font-bold text-6xl text-accent xs:text-7xl sm:text-8xl lg:text-9xl">
            Erika A. Porath
          </h1>
          <p className="font-light text-foreground text-xl md:text-2xl">
            Frontend developer, game developer and animator
          </p>
        </div>
      </div>
      <AboutDetails />
    </>
  );
};

export default About;
