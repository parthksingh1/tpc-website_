import React from "react";

interface Contents{
  title1: string;
  title2: string;
  content1: string;
}

const description: Contents={
  title1:"Talk is cheap,",
  title2:"Show me the ",
  content1:"<p>An open coding community where you can explore, collaborate, and engage with friends on various coding activities and projects.</p>",
}

const Firstcomponent = () => {
  return (
    <div className="text-center mx-auto mt-28 mb-56 max-w-screen-base min-w-90 w-1/2">
      <p className=" text-7xl font-bold px-8 leading-12px">
        <span className="block">{description.title1}</span>
        <span>{description.title2}</span>
        <span className="text-transparent bg-clip-text bg-gradient-linear">
          Code
        </span>
      </p>
      <div className=" font-mono md:text-xl px-8 md:px-16 py-6">
      <p className="py-6">
          {description.content1}
        </p>
        <p><span className=" text-custom-orange">if</span> ( youWantToLearn == <span className="text-custom-blue"> true </span>) click();</p>
        </div>
    </div>
  );
};

export default Firstcomponent;
