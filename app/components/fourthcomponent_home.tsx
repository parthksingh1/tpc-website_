import React from "react";
import Image from "next/image";

interface Contents {
  title: string;
  content: string;
}
const content1: Contents = {
  title: "Why Us",
  content: `When you need advice regarding a fellowship, who is better equipped than someone who cracked it themselves?
      We are a team of skilled developers who have made it to GSoC, MLH and other prestigious programs, and top level competitive coders who have achieved ranks in ICPC, Google Hashcode, CodeJam and FaceBook HackerCup.
      A strong and supportive alumni network which will help you get a career boost.`,
};
const content2: Contents = {
  title: "Mission",
  content: `We, including students from freshman year to final year, aim to create a thriving coding environment for developers like you to ensure community learning.`,
};
const content3: Contents = {
  title: "Vision",
  content: `We focus on covering a wide spectrum of technologies to constantly expand the scope of the club so that each one of you feels included.`,
};

function fourthcomponent_home() {
return (
    <div className="space-y-8 text-wrap mx-4 my-20">
        <div>
            <h1 className="text-2xl font-bold mb-4">{content1.title}</h1>
            <p className="mb-8">{content1.content}</p>
        </div>
        <div>
            <h1 className="text-2xl font-bold mb-4">{content2.title}</h1>
            <p className="mb-8 flex items-center">
                {content2.content}
                <span className="ml-auto">
                    <Image
                        src="/rectangle.svg"
                        alt=""
                        width={400}
                        height={0}
                        priority
                    />
                </span>
            </p>
        </div>
        <div>
            <h1 className="text-2xl font-bold mb-4">{content3.title}</h1>
            <p className="mb-8 flex items-center">
                {content3.content}
                <span className="ml-auto">
                    <Image
                        src="/rectangle.svg"
                        alt=""
                        width={400}
                        height={0}
                        priority
                    />
                </span>
            </p>
        </div>
    </div>
);
}

export default fourthcomponent_home;
