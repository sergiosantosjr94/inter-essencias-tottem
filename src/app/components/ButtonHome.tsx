"use client";
import { useRouter } from "next/navigation";

const ButtonHome = () => {
  const router = useRouter();
  return (
    <div className="flex p-5 place-content-around flex-wrap space-y-4 sm:space-x-6 sm:space-y-0">
      <button
        onClick={() => {
          router.push("/produtos?cat=masculino");
        }}
        className="bg-white px-9 py-5 rounded-3xl cursor-pointer text-3xl text-inter font-bold shadow-2xl"
      >
        MASCULINO
      </button>
      <button
        onClick={() => {
          router.push("/produtos?cat=feminino");
        }}
        className="font-bold shadow-2xl text-3xl border-4 rounded-3xl px-9 py-5 text-white cursor-pointer"
      >
        FEMININO
      </button>
    </div>
  );
};

export default ButtonHome;
