import Image from "next/image";
import NavigationMenuDemo from "./components/navbar";
import Firstcomponent from "./components/firstcomponent_home";
import SecondComponent from "./components/secondcomponent_home";

const logo_width = 90;
const logo_height = 14;

export default function Home() {
  return (
    <div className="flex max-h-screen flex-col  bg-black text-white">
      <div className="navbar m-14">
        <NavigationMenuDemo items={[]} />
      </div>
      <div><Firstcomponent/></div>
      <div className="flex ">
        <SecondComponent/>
      </div>
    </div>
  );
}