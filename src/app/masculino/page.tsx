import React from "react";
import Image from "next/image";

interface PerfumesMasculinos {
  id: number;
  img: string;
  title: string;
  brand: string;
}

const perfumesMasculinos: PerfumesMasculinos[] = [
  {
    id: 1,
    img: "/perfumes/masculinos/212-men-ch.png",
    title: "212 Men",
    brand: "Carolina Herrera",
  },
  {
    id: 2,
    img: "/perfumes/masculinos/212-sexy-men.png",
    title: "212 Sexy Men",
    brand: "Carolina Herrera",
  },
  {
    id: 3,
    img: "/perfumes/masculinos/212-vip-men.webp",
    title: "212 Vip Men",
    brand: "Carolina Herrera",
  },
  {
    id: 4,
    img: "/perfumes/masculinos/212-men-ch.png",
    title: "212 Men",
    brand: "Carolina Herrera",
  },
  {
    id: 5,
    img: "/perfumes/masculinos/212-men-ch.png",
    title: "212 Men",
    brand: "Carolina Herrera",
  },
  {
    id: 6,
    img: "/perfumes/masculinos/212-men-ch.png",
    title: "212 Men",
    brand: "Carolina Herrera",
  },
];

export default function MASCULINO() {
  return (
    <div className="flex w-screen h-full justify-center bg-pink-100">
      <div className="color-inter grid grid-cols-3 gap-4 p-4 rounded-2xl m-4">
        {perfumesMasculinos.map((curr, i) => (
          <div key={curr.id} className="relative">
            <div className="absolute right-7 top-4 text-white color-inter text-md p-1 rounded-xl flex">
              <p className="text-xs text-white">nº</p>
              <p className="text-3xl font-semibold">
                {" "}
                {(i + 1).toString().padStart(2, "0")}
              </p>
            </div>
            <div className="flex bg-white rounded-3xl mx-3">
              <div className="flex flex-col items-center space-y-1">
                <Image
                  src={curr.img}
                  alt={`${curr.id}`}
                  width={300}
                  height={300}
                />
                <h2 className="font-bold text-2xl text-stone-800">
                  {curr.title}
                </h2>
                <p className="">{curr.brand}</p>
                <button className="color-inter rounded-3xl px-5 text-md text-white py-2 my-3 cursor-pointer">
                  Saiba Mais
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
