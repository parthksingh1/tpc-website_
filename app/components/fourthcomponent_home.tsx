import React from "react";
import Image from "next/image";

interface Content {
  title: string;
  content: string;
  image?: string;
}

const contents: Content[] = [
  {
    title: "Why Us",
    content: `When you need advice regarding a fellowship, who is better equipped than someone who cracked it themselves? We are a team of skilled developers who have made it to GSoC, MLH and other prestigious programs, and top level competitive coders who have achieved ranks in ICPC, Google Hashcode, CodeJam and FaceBook HackerCup. A strong and supportive alumni network which will help you get a career boost.`,
  },
  {
    title: "Mission",
    content: `We, including students from freshman year to final year, aim to create a thriving coding environment for developers like you to ensure community learning.`,
    image: "/rectangle.svg",
  },
  {
    title: "Vision",
    content: `We focus on covering a wide spectrum of technologies to constantly expand the scope of the club so that each one of you feels included.`,
    image: "/rectangle.svg",
  },
];

function FourthComponentHome() {
  return (
    <div className="space-y-8 text-wrap mx-auto md:my-32 my-28 font-mono w-4/5">
      {contents.map((content, index) => (
        <div key={index} className="flex flex-col md:flex-row items-center">
          <div className={content.image?"md:w-1/2 flex flex-col md:mr-8":"mb-8 text-2xl"}>
            <h1 className="text-4xl font-bold mb-4">{content.title}</h1>
            <p className="text-2xl mb-8">{content.content}</p>
          </div>
          {content.image && (
            <div className="md:w-1/2 flex items-center">
              <Image
                src={content.image}
                alt=""
                width={580}
                height={250}
                priority
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default FourthComponentHome;
