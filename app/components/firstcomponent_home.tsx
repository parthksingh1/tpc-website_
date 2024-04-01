import React from "react";

interface Contents{
  title: string;
  content1: string;
}

const description: Contents={
  title:"Talk is cheap, Show me the ",
  content1:"<p>An open coding community where you can explore, collaborate, and engage with friends on various coding activities and projects.</p>",
}

const Firstcomponent = () => {
  return (
    <div className="text-center my-32">
      <p className=" text-6xl font-bold px-8">
          {description.title}
        <span className="text-transparent bg-clip-text bg-gradient-linear">
          Code
        </span>
     
      </p>
      <div className=" font-mono md:text-xl px-8 md:px-16 py-9">
      <p className="py-7">
          {description.content1}
        </p>
        <p><span className=" text-custom-orange">if</span> ( youWantToLearn == <span className="text-custom-blue"> true </span>) click();</p>
        </div>
    </div>
  );
};

export default Firstcomponent;
