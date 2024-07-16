import Header from "@/components/molecules/Header";
import Movies from "@/components/organism/Movies";

export default function Home() {

  return (
    <main className="max-w-[1440px] mx-auto flex min-h-screen flex-col ">
      <Header isActive={1}/>
      <Movies type={1} title="Now Playing"/>
    </main>
  );
}
