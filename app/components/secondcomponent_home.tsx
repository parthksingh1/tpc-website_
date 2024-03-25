
import React from 'react';
import Image from "next/image";

interface About {
    title: string;
    description: string;
    content1: string;
    content2:string;
  }
  interface BoxProps {
    title: string;
    content: string;
    logo:string;
  }

  
  const about: About = {
    title: "ABOUT",
    description:
      "Bitbyte-TPC is a peer-learning community filled with tech-enthusiasts just like YOU!",
    content1: `
  
    We intend to keep your interest kindled with regular thought-provoking sessions
    on Competitive coding , web, app, and game development, open source
    contributions, AI and ML (basically anything and everything that involves
    coding). aim to help students and as a community we want to grow as much as
    possible in many domains of coding and development, be it Competitive
    Programming, Android, Web, Open Source, AI/ML, Ethical Hacking.
    `,
    content2: "You also get a chance to exhibit your skills and win prizes in events like Jamboree, NewBie, Commix and many more organised every now and then.",
  };
  

  
  function Box({ title, content }: BoxProps) {
    return (
      <div className="bg-black text-white p-4 m-2 rounded-lg max-w-md border-[#0fa0b9] border-opacity-50 border-4 transition-colors duration-500 ease-in-out hover:border-opacity-0">
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="flex items-center justify-between">
          <p className="text-left">{content}</p>
          <Image
            src="/android_logo.svg"
            alt=""
            width={0}
            height={0}
            className={and_logo_dim}
          />
        </div>
      </div>
    );
  }
  const about_logo_dim="w-1/2 md:w-1/4 h-auto";
  const and_logo_dim="w-1/12 h-auto";

  const Boxes = () => (
    <div className="bg-black p-4 flex flex-col justify-center">
    <Box title="Design" content="Design is intelligence made visual" />
    <Box title="Develop" content="Code can't lie, Comments can" />
    <Box title="Deploy" content="Deployment makes a project, product" />
  </div>
  );
  
  function About() {
    return (
      <div>
        <div>
  <Image
  src="/about_logo1.svg"
  alt=""
  width={0}
  height={0}
  className={about_logo_dim}
/>
<Image
  src="/about_logo2.svg"
  alt=""
  width={0}
  height={0}
  className={about_logo_dim}
/>
<Image
  src="/about_logo1.svg"
  alt=""
  width={0}
  height={0}
  className={about_logo_dim}
/>
</div>
        <div className='py-2'>{about.description}</div>
         <div className='py-2'>{about.content1}</div>
        <div className='py-2'>{about.content2}</div>
      </div>
    );
  }
  
  
  function SecondComponent() {
    return (
      <div className="flex flex-col md:flex-row p-4">
        <div><Boxes/></div>
        <div className='md:w-1/2  ml-auto '><About /></div>
      </div>
    );
  }
  
  export default SecondComponent;
  