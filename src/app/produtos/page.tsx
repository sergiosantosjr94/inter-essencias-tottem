"use client";

import React from "react";
import Image from "next/image";
import { masculinos, femininos, IPerfumes } from "../../../database/perfumes";
import MenuBottom from "../components/MenuBottom";
import { useSearchParams, useRouter } from "next/navigation";

export default function Produtos() {
  const params = useSearchParams().get("cat");
  const router = useRouter();

  let perfumes: IPerfumes[];

  if (params === "masculino") {
    perfumes = masculinos;
  }
  if (params === "feminino") {
    perfumes = femininos;
  }

  const handleSaibaMais = (id: number) => {
    router.push(`/produtos/${id}?cat=${params}`);
  };
  return (
    <div className="flex w-screen h-full justify-center bg-pink-100 mb-10 ">
      <div className="color-inter grid sm:grid-cols-3 gap-4 p-4 rounded-2xl m-4 grid-cols-1">
        {perfumes!.map((curr) => (
          <div key={curr.id} className="relative">
            <div className="absolute right-7 top-4 text-white color-inter text-md p-1 rounded-xl flex">
              <p className="text-xs text-white">nº</p>
              <p className="text-3xl font-semibold">
                {curr.id.toString().padStart(2, "0")}
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
                  {curr.title.toLocaleUpperCase()}
                </h2>
                <p className="">{curr.brand}</p>
                <button
                  onClick={() => handleSaibaMais(curr.id)}
                  className="color-inter rounded-3xl px-5 text-md text-white py-2 my-3 cursor-pointer"
                >
                  Saiba Mais
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <MenuBottom />
    </div>
  );
}
