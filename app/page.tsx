import Firstcomponent from "./components/firstcomponent_home";
import Navbar from "./components/navbar";
import SecondComponent from "./components/secondcomponent_home";


export default function Home() {
  return (
    <div className="flex max-h-screen flex-col  bg-black text-white">
      <div className="navbar m-14">
        <Navbar items={[]} />
      </div>
      <div><Firstcomponent/></div>
      <div className="flex ">
        <SecondComponent/>
      </div>
    </div>
  );
}