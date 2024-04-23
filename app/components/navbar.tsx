
import Image from "next/image";

interface NavMenuProps {
  items: string[] | undefined;
}

function Navbar({ items }: NavMenuProps) {
  const defaultItems = ['Teams', 'Projects', 'Alumni','Events'];

  return (
    <div className="flex justify-center items-center m-[3vh] p-1">
      <div className="absolute left-[15vw] ">
        <Image 
          src="/tpc_logo.svg"
          alt="TPC Logo"
          width={70}
          height={70}
          priority
        />
      </div>
      <div className="flex items-center ">
        <nav className="h-[75px] w-[500px] p-3 flex justify-around bg-custom-gray  rounded-full sm:flex hidden">
          {(items && items.length > 0 ? items : defaultItems).map((item) => (
            <button
              key={item}
              className="text-white text-xl p-3 bg-custom-gray-light hover:bg-[#3CFF5B] border-transparent focus:border-transparent rounded-full"
            >
              {item}
            </button>
          ))}
        </nav>
        <div className="sm:hidden cursor-pointer absolute right-2 m-8 p-2">
          <Image
            src="/options.svg"
            alt="Options"
            width={55}
            height={55}
            priority
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;