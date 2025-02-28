import Image from "next/image";
import ButtonHome from "./components/ButtonHome";

export default function Home() {
  return (
    <div className="h-screen w-screen bg-pink-100 flex items-center justify-center">
      <div className="color-inter w-[900px] rounded-4xl flex flex-col items-center p-6">
        <Image
          src="/logo-alta-web1-white.png"
          width={400}
          height={400}
          alt="Inter Essencias Logo"
        />
        <h1 className="text-white font-bold text-3xl p-6">
          EXPLORE NOSSAS FRAGÂNCIAS
        </h1>
        <p className="text-white text-center">
          Bem-vindo a um mundo de elegância e sofisticação, onde cada fragrância
          é uma obra-prima olfativa. Na nossa loja de perfumaria fina,
          convidamos você a mergulhar em uma experiência sensorial única, onde
          os aromas se transformam em memórias inesquecíveis.
        </p>
        <ButtonHome />
      </div>
    </div>
  );
}
