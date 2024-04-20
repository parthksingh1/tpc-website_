import React from "react";
import Cards from "./Cards";

interface About {
  title: string;
  content1: string;
  content2: string;
}

const about: About = {
  title: "About",
  content1: `
    Bitbyte-TPC is a peer-learning community filled with tech-enthusiasts just like YOU!
    We intend to keep your interest kindled with regular thought-provoking sessions
    on Competitive coding , web, app, and game development, open source
    contributions, AI and ML (basically anything and everything that involves
    coding). aim to help students and as a community we want to grow as much as
    possible in many domains of coding and development, be it Competitive
    Programming, Android, Web, Open Source, AI/ML, Ethical Hacking.
    `,
  content2:
    "You also get a chance to exhibit your skills and win prizes in events like Jamboree, NewBie, Commix and many more organised every now and then.",
};


function About() {
  return (
    <div className="flex flex-col justify-around items-center mx-auto ">
      <div className="text-transparent bg-clip-text bg-gradient-linear text-4xl md:text-7xl font-mono font-bold">
        {about.title}
      </div>
      <div className="flex flex-wrap item-center justify-around w-4/5 md:justify-around md:my-20 py-5">
        <Cards text={"Design"} img_src={"/pencil.svg"}/>
        <Cards text={"Develop"} img_src={"/brackets.svg"}/>
        <Cards text={"Test"} img_src={"/graph.svg"}/>
        <Cards text={"Deploy"} img_src={"/rocket.svg"}/>
      </div>
      <div className="py-2 text-lg md:text-xl text-center font-mono md:px-16 max-w-screen-xl min-w-90 w-3/4">{about.content1}</div>
      <div className="py-2 text-lg md:text-xl text-center font-mono md:px-16  max-w-screen-xl min-w-90 w-3/4  ">{about.content2}</div>
    </div>
  );
}

function SecondComponent() {
  return (
        <About />
  );
}

export default SecondComponent;
