import Banner from "@/components/Banner";
import Slider from "@/components/Slider";
import UnderConstructionPopup from "@/components/UnderConstructionPopup";
import Image from "next/image";

export default function Home() {
  return (
   <div>
    <Banner/>
     <UnderConstructionPopup />
    <Slider/>
   </div>
  );
}
