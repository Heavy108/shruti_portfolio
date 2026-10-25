import Hero from "@/component/homepage/hero";
import Navbar from "../component/navbar/navbar";
import Gallery from "@/component/homepage/gallery";
import SelectedWorks from "@/component/homepage/selectedworks";
import Capabilities from "@/component/homepage/Capabilities";
import ChatSection from "@/component/homepage/chat";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Gallery/>
      <SelectedWorks/>
      <Capabilities/>
      <ChatSection/>
    </div>
  );
}
