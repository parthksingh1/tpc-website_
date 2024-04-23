import Firstcomponent from "./components/firstcomponent_home";
import Navbar from "./components/navbar";
import SecondComponent from "./components/secondcomponent_home";
import FourthComponent from "./components/fourthcomponent_home";

export default function Home() {
  return (
    <div className="flex max-h-screen flex-col  bg-black text-white">
      
        <Navbar items={[]} />
      
      <div>
        <Firstcomponent />
      </div>
      <div>
        <SecondComponent />
      </div>
      <div>
        <FourthComponent />
      </div>
    </div>
  );
}
