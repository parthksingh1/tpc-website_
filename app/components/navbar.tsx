
import Image from "next/image";
import { Link } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
}

const navigationItems: NavItem[] = [
  { label: 'Teams', href: '/teams' },
  { label: 'Projects', href: '/projects' },
  { label: 'Alumni', href: '/alumni' },
  { label: 'Events', href: '/events' },
]

const NavItem = ( { label, href }: NavItem ) => {
  return (
    <div className="text-white text-xl p-3 bg-custom-gray-light hover:bg-[#3CFF5B] border-transparent focus:border-transparent rounded-full">
      <a href={href}>
        <p>{label}</p>
      </a>
    </div>
  );
}

function Navbar() {

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
      <div className="flex items-center">
        <nav className="h-[75px] w-[500px] p-3 flex justify-around bg-custom-gray  rounded-full sm:flex hidden">
          {navigationItems.map((item) => (
            <NavItem key={item.label} label={item.label} href={item.href} />
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