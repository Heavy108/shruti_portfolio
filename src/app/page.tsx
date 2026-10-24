import Hero from "@/component/homepage/hero";
import Navbar from "../component/navbar/navbar";
import Gallery from "@/component/homepage/gallery";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Gallery/>
    </div>
  );
}
