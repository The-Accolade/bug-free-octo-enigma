import { Button } from "flowbite-react";
import React from "react";

function Hero() {
  return (
    <div className="h-screen hero text-white flex flex-col justify-center pl-20">
      <div className="w-1/4" style={{ width: "500px" }}>
        <h1
          className="uppercase font-bold"
          style={{ fontSize: "48px", lineHeight: "1.1" }}
        >
          Welcome to this amazing website!
        </h1>
        <p className="pt-5 mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          dignissimos adipisci cupiditate excepturi quo ipsam culpa ut ducimus
          voluptas velit?
        </p>
        <Button pill>Consult with us</Button>
      </div>
    </div>
  );
}

export default Hero;
