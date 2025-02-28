"use client";
import { useRouter } from "next/navigation";

const ButtonHome = () => {
  const router = useRouter();
  return (
    <div className="flex p-5 space-x-10 place-content-around w-full">
      <button
        onClick={() => {
          router.push("/masculino");
        }}
        className="bg-white px-9 py-5 rounded-3xl cursor-pointer text-3xl text-inter font-bold shadow-2xl"
      >
        MASCULINO
      </button>
      <button className="font-bold shadow-2xl text-3xl border-4 rounded-3xl px-9 text-white cursor-pointer">
        FEMININO
      </button>
    </div>
  );
};

export default ButtonHome;
