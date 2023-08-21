import React, { useState, useEffect } from "react";
import "./Hero.css";
import { imgOne, imgTwo, imgThree } from "../../assets";

const Hero = () => {
  const [hoveredDiv, setHoveredDiv] = useState(null);

  let hoverTimeout;

  const handleHover = (divIndex) => {
    clearTimeout(hoverTimeout);

    hoverTimeout = setTimeout(() => {
      setHoveredDiv(divIndex);
      console.log(`Div ${divIndex} hovered for 3 seconds!`);
      if (divIndex === 1) {
        document.body.style.backgroundColor = "#2b0501 ";
      } else if (divIndex === 2) {
        document.body.style.backgroundColor = "#97938e";
      } else if (divIndex === 3) {
        document.body.style.backgroundColor = "#36414c";
      }
    }, 3000);
  };

  const handleMouseout = () => {
    clearTimeout(hoverTimeout);
    setHoveredDiv(null);
    document.body.style.background = "";
  };

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="flex gap-20  ">
        <div
          className={`group relative flex transition duration-500 hover:-translate-y-5 ${
            hoveredDiv === 1 ? "card" : ""
          }`}
          onMouseOver={() => handleHover(1)}
          onMouseOut={handleMouseout}
        >
          <div className=" z-50 h-full w-[300px] cursor-pointer gap-4 rounded-2xl bg-white">
            <div className="overflow-hidden">
              <img
                src={imgOne}
                alt="Card Image"
                className=" h-60 w-full  object-cover transition duration-500 group-hover:scale-110"
              />
            </div>
            <div className=" p-4 text-black">
              <h2 className="my-2 text-lg font-semibold">Spirited Away</h2>
              <p className="text-sm">
                Spirited Away is an undisputable crossover hit, one that
                continues to enthral and charm audiences nationwide, introducing
                western audiences at large to the ...
              </p>
              <button href="#" className="mt-4 rounded-2xl bg-blue px-4 py-2">
                Read More +{" "}
              </button>
            </div>
          </div>
          <div className="card-faders">
            <img
              src={imgOne}
              alt=""
              className="card-fader absolute -z-10 h-full   w-[300px] object-cover "
            />
            <img
              src={imgOne}
              alt=""
              className="card-fader absolute -z-10 h-full   w-[300px] object-cover "
            />
            <img
              src={imgOne}
              alt=""
              className="card-fader absolute -z-10 h-full   w-[300px] object-cover "
            />
            <img
              src={imgOne}
              alt=""
              className="card-fader absolute -z-10 h-full   w-[300px] object-cover "
            />
            <img
              src={imgOne}
              alt=""
              className="card-fader absolute -z-10 h-full   w-[300px] object-cover "
            />
            <img
              src={imgOne}
              alt=""
              className="card-fader absolute -z-10 h-full   w-[300px] object-cover "
            />
            <img
              src={imgOne}
              alt=""
              className="card-fader absolute -z-10 h-full   w-[300px] object-cover "
            />
            <img
              src={imgOne}
              alt=""
              className="card-fader absolute -z-10 h-full   w-[300px] object-cover "
            />
            <img
              src={imgOne}
              alt=""
              className="card-fader absolute -z-10 h-full   w-[300px] object-cover "
            />
          </div>
        </div>
        <div
          className={`group relative flex transition duration-500 hover:-translate-y-5 ${
            hoveredDiv === 2 ? "card" : ""
          }`}
          onMouseOver={() => handleHover(2)}
          onMouseOut={handleMouseout}
        >
          <div className="group z-50 h-full w-[300px] cursor-pointer gap-4 rounded-2xl bg-white">
            <div className="overflow-hidden">
              <img
                src={imgTwo}
                alt="Card Image"
                className=" h-60 w-full  object-cover transition duration-500 group-hover:scale-110"
              />
            </div>
            <div className=" p-4 text-black">
              <h2 className="my-2 text-lg font-semibold">Spirited Away</h2>
              <p className="text-sm">
                Spirited Away is an undisputable crossover hit, one that
                continues to enthral and charm audiences nationwide, introducing
                western audiences at large to the ...
              </p>
              <button href="#" className="mt-4 rounded-2xl bg-blue px-4 py-2">
                Read More +{" "}
              </button>
            </div>
          </div>
          <div className="card-faders">
            <img
              src={imgTwo}
              alt=""
              className="card-fader absolute -z-10 h-full   w-[300px] object-cover "
            />
            <img
              src={imgTwo}
              alt=""
              className="card-fader absolute -z-10 h-full   w-[300px] object-cover "
            />
            <img
              src={imgTwo}
              alt=""
              className="card-fader absolute -z-10 h-full   w-[300px] object-cover "
            />
            <img
              src={imgTwo}
              alt=""
              className="card-fader absolute -z-10 h-full   w-[300px] object-cover "
            />
            <img
              src={imgTwo}
              alt=""
              className="card-fader absolute -z-10 h-full   w-[300px] object-cover "
            />
            <img
              src={imgTwo}
              alt=""
              className="card-fader absolute -z-10 h-full   w-[300px] object-cover "
            />
            <img
              src={imgTwo}
              alt=""
              className="card-fader absolute -z-10 h-full   w-[300px] object-cover "
            />
            <img
              src={imgTwo}
              alt=""
              className="card-fader absolute -z-10 h-full   w-[300px] object-cover "
            />
            <img
              src={imgTwo}
              alt=""
              className="card-fader absolute -z-10 h-full   w-[300px] object-cover "
            />
          </div>
        </div>
        <div
          className={`group relative flex transition duration-500 hover:-translate-y-5 ${
            hoveredDiv === 3 ? "card" : ""
          }`}
          onMouseOver={() => handleHover(3)}
          onMouseOut={handleMouseout}
        >
          <div className="group z-50 h-full w-[300px] cursor-pointer gap-4 rounded-2xl bg-white">
            <div className="overflow-hidden">
              <img
                src={imgThree}
                alt="Card Image"
                className=" h-60 w-full  object-cover transition duration-500 group-hover:scale-110"
              />
            </div>
            <div className=" p-4 text-black">
              <h2 className="my-2 text-lg font-semibold">Spirited Away</h2>
              <p className="text-sm">
                Spirited Away is an undisputable crossover hit, one that
                continues to enthral and charm audiences nationwide, introducing
                western audiences at large to the ...
              </p>
              <button href="#" className="mt-4 rounded-2xl bg-blue px-4 py-2">
                Read More +{" "}
              </button>
            </div>
          </div>
          <div className="card-faders">
            <img
              src={imgThree}
              alt=""
              className="card-fader absolute -z-10 h-full   w-[300px] object-cover "
            />
            <img
              src={imgThree}
              alt=""
              className="card-fader absolute -z-10 h-full   w-[300px] object-cover "
            />
            <img
              src={imgThree}
              alt=""
              className="card-fader absolute -z-10 h-full   w-[300px] object-cover "
            />
            <img
              src={imgThree}
              alt=""
              className="card-fader absolute -z-10 h-full   w-[300px] object-cover "
            />
            <img
              src={imgThree}
              alt=""
              className="card-fader absolute -z-10 h-full   w-[300px] object-cover "
            />
            <img
              src={imgThree}
              alt=""
              className="card-fader absolute -z-10 h-full   w-[300px] object-cover "
            />
            <img
              src={imgThree}
              alt=""
              className="card-fader absolute -z-10 h-full   w-[300px] object-cover "
            />
            <img
              src={imgThree}
              alt=""
              className="card-fader absolute -z-10 h-full   w-[300px] object-cover "
            />
            <img
              src={imgThree}
              alt=""
              className="card-fader absolute -z-10 h-full   w-[300px] object-cover "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
