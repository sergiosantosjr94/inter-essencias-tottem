"use client";
import MenuBottom from "@/app/components/MenuBottom";
import Image from "next/image";
import { useParams, useSearchParams } from "next/navigation";
import {
  masculinos,
  femininos,
  IPerfumes,
} from "../../../../database/perfumes";

const Produtos = () => {
  const slug = useParams();
  const id = Number(slug.slug);
  let perfume: IPerfumes | undefined;
  const category = useSearchParams().get("cat");

  if (category === "masculino") {
    perfume = masculinos.find((obj) => obj.id == id);
  } else if (category === "feminino") {
    perfume = femininos.find((obj) => obj.id == id);
  }

  // Ensure perfume is found before using it
  if (!perfume) {
    return <div>Perfume not found</div>;
  }

  // const perfume = perfumes.find(obj => obj.id === )
  return (
    <div className="w-screen h-full bg-pink-100 flex">
      <div className="flex flex-col color-inter p-5 rounded-2xl my-5 mx-20 space-y-6">
        <div className="flex flex-row justify-center text-center flex-wrap">
          <div className="w-[600px]">
            <Image src={perfume.img} alt="212-vip" width={500} height={500} />
          </div>
          <div className="w-[500px] bg-white rounded-3xl overflow-hidden flex  flex-col items-center ">
            <h2 className="mt-5 text-3xl font-bold text-stone-800">
              {perfume.title}
            </h2>
            <p className="mb-20">{perfume.brand}</p>
            <Image
              className=""
              src={perfume.acordes}
              alt={perfume.title}
              width={400}
              height={290}
            />
          </div>
        </div>
        <div className="bg-white rounded-3xl mt-2 p-5 flex flex-col items-center space-y-5">
          <h2 className="text-2xl text-neutral-700 font-bold">
            Sobre a fragância
          </h2>
          <p className="text-md text-neutral-600">{perfume.description}</p>
        </div>
        <div className="bg-white rounded-3xl mt-2 p-5 flex flex-col items-center space-y-5">
          <h2 className="text-2xl text-neutral-700 font-bold">
            Piramide Olfativa
          </h2>
          <Image
            src={perfume.notas}
            className="text-md text-neutral-600"
            alt={perfume.title}
            width={500}
            height={500}
          />
        </div>
      </div>

      <MenuBottom />
    </div>
  );
};

export default Produtos;
