import HomeBtn from "@/Components/HomeBtn";

export default function SubPagesLayout({ children }) {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-start px-8 xs:px-16 lg:px-32 py-20">
      <HomeBtn />
      {children}
    </main>
  );
}
