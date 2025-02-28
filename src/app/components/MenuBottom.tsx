"use client";

import { House, Undo2 } from "lucide-react";
import { useSearchParams, useRouter } from "next/navigation";

const MenuBottom = () => {
  const params = useSearchParams().get("cat");

  const router = useRouter();

  const classButtons =
    "w-[150px] h-[50px] rounded-3xl text-[#ff9eb2] cursor-pointer hover:bg-[#ff9eb2] hover:text-white flex items-center justify-center";
  const classActive = "color-inter text-white";

  return (
    <div className="fixed bottom-0 w-[98%] mx-5 ">
      <div className="flex justify-evenly bg-white space-x-10 py-2 rounded-4xl ">
        <button onClick={() => router.push("/")} className={classButtons}>
          <House size={40} />
        </button>
        <button
          onClick={() => router.push("/produtos?cat=masculino")}
          className={`${classButtons} ${
            params === "masculino" ? classActive : ""
          }`}
        >
          MASCULINO
        </button>
        <button
          onClick={() => router.push("/produtos?cat=feminino")}
          className={`${classButtons} ${
            params === "feminino" ? classActive : ""
          }`}
        >
          FEMININO
        </button>
        <button onClick={() => router.back()} className={classButtons}>
          <Undo2 size={40} />
        </button>
      </div>
    </div>
  );
};

export default MenuBottom;
