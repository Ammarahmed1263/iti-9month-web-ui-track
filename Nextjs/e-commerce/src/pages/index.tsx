import HomeScreen from "@/components/Home";
import Navbar from "@/components/Navbar";
import { getServerSession } from "next-auth";
import { GetServerSidePropsContext } from "next";
import { ReactElement } from "react";
import { authOptions } from "@/lib/auth";

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

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (!session) {
    return {
      props: {
        news: null,
        session: null
      },
    };
  }

  try {
    const res = await fetch("https://dummyjson.com/quotes/random");
    const initialNews = await res.json();
    return {
      props: {
        news: initialNews,
        session
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        news: null,
        session
      },
    };
  }
}
