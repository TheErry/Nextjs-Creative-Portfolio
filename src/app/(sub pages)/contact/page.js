import Image from "next/image";
import bg from "../../../../public/background/space-background.png";
import Form from "@/Components/Contact/Form";


const Contact = () =>{
  return (
    <>
        <Image 
          priority
          sizes="100vw"
          src={bg}
          alt="Background image"
          className="-z-50 object-cover object-center opacity-90 fixed top-0 left-0"
        />

        <article className="relative w-full flex flex-col items-center justify-center space-y-8">
          <div className="flex flex-col items-center justify-center space-y-6 w-3/4">
            <h1 className="text-accent font-semibold text-center text-4xl capitalize">Contact</h1>
            <p className="text-center font-light text-foreground">Feel free to reach out to me!</p>
          </div>
          <Form />
        </article>

    </>
  );
}

export default Contact;