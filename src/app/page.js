import Main from "@/components/Home/Main";
import Navbar from "@/components/Navbar/Navbar";
import Sec from "@/components/Sec/Sec";
import Thi from "@/components/Thi/Thi";
import Skills from "@/container/Skills";
import TimeLine from "@/container/TimeLine";

export default function Home() {
  return (
    <main className="flex py-16 px-10 bg-white flex-col gap-10">
      {/* <Navbar /> */}
      {/* <div className="h-3/4 px-5 py-"> */}
      <Main />
      <Sec />
      <Thi />
      {/* <TimeLine /> */}
      <Skills />
      {/* </div> */}
    </main>
  );
}
