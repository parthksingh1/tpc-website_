import Image from "next/image";

const CardComponentContainer = () =>{
    return (
        <div className="px-1 pt-1  h-[40.5vh] w-[270px] border-4 border-red-900 space-y-2 rounded-2xl">
            <div className="bg-[#4D4D4D] h-[30vh] w-[250px] border-2 border-blue-100"></div>
            <h4 className="text-white">Priyansh Mehta</h4>
            <p className="text-[10px] text-white">Coordinator</p>
            <div className="flex items-center justify-start space-x-2">
            <Image
            src="/rocket.svg"
            alt="rocket"
            width={22}
            height={22}
            priority
          />
          <Image
            src="/rocket.svg"
            alt="rocket"
            width={22}
            height={22}
            priority
          />
          <Image
            src="/rocket.svg"
            alt="rocket"
            width={22}
            height={22}
            priority
          />
            </div> 
        </div>
    )
}
export default CardComponentContainer;