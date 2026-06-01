import Image from "next/image";
import bg from "../../../../public/background/space-background.png";
import ComingDetails from "@/Components/Coming/ComingDetails";


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

      <div className="relative z-0 w-full -mx-5 px-3 xs:-mx-10 xs:px-5 sm:-mx-14 sm:px-6 lg:-mx-24 lg:px-8">
        <ComingDetails />
      </div>
    </>
  );
};

export default About;
