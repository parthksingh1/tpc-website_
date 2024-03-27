import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../shadcn_components/ui/card";
import Image from "next/image";

interface CardProps {
  text: string;
  img_src: string;
}

function Cards({ text, img_src }: CardProps) {
  return (
    <Card className="bg-custom-gray border-0 flex my-2 mx-2 rounded-xl p-4">
      <CardHeader>
        <CardTitle>
          <Image src={img_src} alt="" width={100} height={0} />
        </CardTitle>
        <CardDescription className="flex justify-center font-mono text-white">{text}</CardDescription>
      </CardHeader>
    </Card>
  );
}

export default Cards;
