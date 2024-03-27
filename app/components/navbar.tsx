import React from 'react';
import Image from "next/image";

interface NavMenuProps {
  items: string[] | undefined;
}

function Navbar({ items }: NavMenuProps) {
  const defaultItems = ['Teams', 'Projects', 'Alumni','Events'];

  return (
    <div className="flex justify-center items-center">
      <div className="">
        <Image
          src="/tpc_logo.svg"
          alt="TPC Logo"
          width={100}
          height={24}
          priority
        />
      </div>
      <div>
        <nav className="flex space-x-4 bg-custom-gray px-10 py-3 rounded-full">
          {(items && items.length > 0 ? items : defaultItems).map((item) => (
            <button
              key={item}
              className="px-3 py-2 bg-custom-gray-light hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 rounded-full"
            >
              {item}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default Navbar;