import HomeBtn from "@/Components/HomeBtn";

export default function SubPagesLayout({ children }) {
  return (
<main className="flex min-h-screen flex-col items-center py-20 px-32 relative">
  <HomeBtn />
    {children}
</main>
  );
}
