import React from "react";

interface Contents{
  content1: string;
  content2: string;
}

const description: Contents={
  content1:"<p>An open coding community where you can explore, collaborate, and engage with friends on various coding activities and projects.</p>",
  content2:"if(youWantToLearn == true) click();"
}

const Firstcomponent = () => {
  return (
    <div className="text-center my-32">
      <p className=" text-6xl font-bold">
        Talk is cheap, Show me the{" "}
        <span className="text-transparent bg-clip-text bg-gradient-linear">
          Code
        </span>
     
      </p>
      <p className="py-7">
          {description.content1}
        </p>
        <p>{description.content2}</p>
    </div>
  );
};

export default Firstcomponent;
