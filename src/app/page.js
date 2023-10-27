import Footer from "@/components/Footer/Footer";
import Main from "@/container/Main";
import Certificate from "@/container/Certificate";
import Skill from "@/container/Skill";
import TimeLine from "@/container/TimeLine";
import Vacancies from "@/container/Vacancies";
import WorkWIthUs from "@/container/WorkWIthUs";
import EQ from "@/container/EQ";
import Meet from "@/container/Meet";

export default function Home() {
  return (
    <main className="flex py-16 px-10 bg-white flex-col gap-10">
      <Main />
      <EQ />
      <Meet />
      <TimeLine />
      <Skill />
      <Certificate />
      <WorkWIthUs />
      <Vacancies />
      <hr className="border-slate-300" />
      <Footer />
    </main>
  );
}
