import Lottie from "lottie-react";
import React from "react";
import Question from "../resources/Question.json";

function Intro() {
  return (
    <div className="intro container flex justify-between items-center mt-40 lg:flex-row">
      <div className="pl-11 w-50%">
        <h1 className="pb-3 text-red-700">What's Nakshatra ?</h1>
        <p className="py-2 text-justify w-50% pr-32 text-blue-800 text-xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
          mollitia ut fuga quis ullam nostrum incidunt expedita eos aperiam
          aspernatur. Tempora odio soluta ut veritatis adipisci facilis
          praesentium perferendis iste unde quae iusto veniam in vel ullam
          obcaecati temporibus earum, error maxime assumenda, commodi doloribus
          deleniti laborum libero optio! Minus.
        </p>
      </div>
      <div className="pr-10">
        <Lottie
          animationData={Question}
          loop={true}
          className="w-[350px] h-[375px]"
        ></Lottie>
      </div>
    </div>
  );
}

export default Intro;
