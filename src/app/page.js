import Image from "next/image";
import Navigation from "./Components/Navigation";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full h-screen">
      <Navigation />
      </div>
    </main>
  );
}
