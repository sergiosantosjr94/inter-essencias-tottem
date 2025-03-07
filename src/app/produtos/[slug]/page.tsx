"use client";
import MenuBottom from "@/app/components/MenuBottom";
import Image from "next/image";
import { notFound, useParams, useSearchParams } from "next/navigation";
import {
  masculinos,
  femininos,
  IPerfumes,
} from "../../../../database/perfumes";

const Produtos = () => {
  const slug = useParams();
  const id: number = Number(slug.slug);
  let perfume: IPerfumes | undefined;
  const category = useSearchParams().get("cat");

  if (category === "masculino") {
    perfume = masculinos.find((obj) => obj.id == id);
  } else if (category === "feminino") {
    perfume = femininos.find((obj) => obj.id == id);
  }

  if (!perfume) {
    notFound();
  }

  return (
    <div className="w-screen h-full bg-pink-100 flex justify-center">
      <div className="flex flex-col color-inter p-5 rounded-2xl my-5 space-y-6 w-[90%]">
        <div className="flex flex-row justify-center text-center flex-wrap ">
          <div className="flex w-full justify-around flex-wrap">
            <div className="relative">
              <div className="absolute right-3 top-2  text-inter bg-white text-md p-1 rounded-xl flex">
                <p className="text-xs text-inter">nº</p>
                <p className="text-4xl font-semibold">
                  {perfume.id.toString().padStart(2, "0")}
                </p>
              </div>
              <Image src={perfume.img} alt="212-vip" width={500} height={500} />
            </div>
            <div className=" bg-white rounded-3xl overflow-hidden flex sm:w-[40%] flex-col items-center ">
              <h2 className="mt-5 text-3xl font-bold text-stone-800">
                {perfume.title}
              </h2>
              <p className="mb-6">{perfume.brand}</p>
              <Image
                className=""
                src={perfume.acordes}
                alt={perfume.title}
                width={350}
                height={290}
                quality={100}
              />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-3xl mt-2 p-5 flex flex-col items-center space-y-5">
          <h2 className="text-2xl text-neutral-700 font-bold">
            Sobre a fragância
          </h2>
          <div
            className="text-md text-neutral-600"
            dangerouslySetInnerHTML={{ __html: perfume.description }}
          ></div>
        </div>
        <div className="bg-white rounded-3xl mt-2 p-5 flex flex-col items-center space-y-5">
          <h2 className="text-2xl text-neutral-700 font-bold">
            Piramide Olfativa
          </h2>
          <Image
            src={perfume.notas}
            className="text-md text-neutral-600 h-full w-auto"
            alt={perfume.title}
            width={800}
            height={100}
          />
        </div>
      </div>

      <MenuBottom />
    </div>
  );
};

export default Produtos;
