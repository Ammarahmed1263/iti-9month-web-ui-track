import HomeScreen from "@/components/Home";
import Navbar from "@/components/Navbar";
import { ReactElement } from "react";

export default function HomePage() {
  return <HomeScreen />;
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return (
    <div className='flex flex-col min-h-screen w-full bg-background font-sans'>
      <Navbar />
      <main className='grow flex flex-col'>{page}</main>
    </div>
  );
};
