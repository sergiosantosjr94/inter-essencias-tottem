"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { masculinos, femininos, IPerfumes } from "../../../database/perfumes";
import MenuBottom from "../components/MenuBottom";
import { useSearchParams, useRouter, notFound } from "next/navigation";
import {
  ArrowDownWideNarrow,
  ArrowUpWideNarrow,
  ChevronsUpDown,
} from "lucide-react";

export default function Produtos() {
  const params = useSearchParams().get("cat");
  const router = useRouter();

  if (params !== "masculino" && params !== "feminino") {
    notFound();
  }

  const [perfumes, setPerfumes] = useState<IPerfumes[]>([]);
  const [numeroIcon, setNumeroIcon] = useState("arrowDownWideNarrow");
  const [nomeIcon, setNomeIcon] = useState("chevronsUpDown");
  const [sortedPerfumes, setSortedPerfumes] = useState<IPerfumes[]>([]);
  const [sortBy, setSortBy] = useState<"id" | "title">("id");

  function setIconsDefault(): void {
    setNomeIcon("chevronsUpDown");
    setNumeroIcon("arrowDownWideNarrow");
  }

  useEffect(() => {
    if (params === "masculino") {
      setPerfumes(masculinos);
      setIconsDefault();
    } else if (params === "feminino") {
      setPerfumes(femininos);
      setIconsDefault();
    }
  }, [params]);

  useEffect(() => {
    setSortedPerfumes(perfumes);
  }, [perfumes]);

  function handleFilterIcon(sortType: "id" | "title"): void {
    if (sortType === "id") {
      if (numeroIcon === "chevronsUpDown") {
        setNumeroIcon("arrowDownWideNarrow");
        const sortedArray = [...perfumes].sort((a, b) => a.id - b.id);
        setSortedPerfumes(sortedArray);
        setNomeIcon("chevronsUpDown");
      } else if (numeroIcon === "arrowDownWideNarrow") {
        setNumeroIcon("arrowUpWideNarrow");
        const sortedArray = [...perfumes].sort((a, b) => b.id - a.id);
        setSortedPerfumes(sortedArray);
      } else if (numeroIcon === "arrowUpWideNarrow") {
        setNumeroIcon("arrowDownWideNarrow");
        const sortedArray = [...perfumes].sort((a, b) => a.id - b.id);
        setSortedPerfumes(sortedArray);
      }
    } else if (sortType === "title") {
      if (nomeIcon === "chevronsUpDown") {
        setNomeIcon("arrowDownWideNarrow");
        const sortedArray = [...perfumes].sort((a, b) =>
          a.title.localeCompare(b.title)
        );
        setNumeroIcon("chevronsUpDown");
        setSortedPerfumes(sortedArray);
      } else if (nomeIcon === "arrowDownWideNarrow") {
        setNomeIcon("arrowUpWideNarrow");
        const sortedArray = [...perfumes].sort((a, b) =>
          b.title.localeCompare(a.title)
        );
        setSortedPerfumes(sortedArray);
      } else if (nomeIcon === "arrowUpWideNarrow") {
        setNomeIcon("arrowDownWideNarrow");
        const sortedArray = [...perfumes].sort((a, b) =>
          a.title.localeCompare(b.title)
        );
        setSortedPerfumes(sortedArray);
      }
    }
  }

  let numeroButtonIcon;
  if (numeroIcon === "chevronsUpDown") {
    numeroButtonIcon = <ChevronsUpDown />;
  } else if (numeroIcon === "arrowDownWideNarrow") {
    numeroButtonIcon = <ArrowDownWideNarrow />;
  } else if (numeroIcon === "arrowUpWideNarrow") {
    numeroButtonIcon = <ArrowUpWideNarrow />;
  }

  let nomeButtonIcon;
  if (nomeIcon === "chevronsUpDown") {
    nomeButtonIcon = <ChevronsUpDown />;
  } else if (nomeIcon === "arrowDownWideNarrow") {
    nomeButtonIcon = <ArrowDownWideNarrow />;
  } else if (nomeIcon === "arrowUpWideNarrow") {
    nomeButtonIcon = <ArrowUpWideNarrow />;
  }

  const handleSaibaMais = (id: number) => {
    router.push(`/produtos/${id}?cat=${params}`);
  };

  return (
    <div className="flex w-screen h-full justify-center bg-pink-100 mb-10 flex-col items-center">
      <div className="mt-3 flex">
        <button
          onClick={() => {
            setSortBy("id");
            handleFilterIcon("id");
          }}
          className="color-inter flex justify-between text-white rounded-3xl p-3 py-2 mx-2 cursor-pointer"
        >
          Numero
          <div className="ml-4">{numeroButtonIcon}</div>
        </button>
        <button
          onClick={() => {
            setSortBy("title");
            handleFilterIcon("title");
          }}
          className="color-inter flex justify-between text-white rounded-3xl p-3 py-2 mx-2 cursor-pointer"
        >
          Nome
          <div className="ml-4">{nomeButtonIcon}</div>
        </button>
      </div>
      <div className="color-inter grid sm:grid-cols-3 gap-4 p-4 rounded-2xl m-4 grid-cols-1">
        {sortedPerfumes.map((curr) => (
          <div key={curr.id} className="relative">
            <div className="absolute right-7 top-4 text-white color-inter text-md p-1 rounded-xl flex">
              <p className="text-xs text-white">nº</p>
              <p className="text-3xl font-semibold">
                {curr.id.toString().padStart(2, "0")}
              </p>
            </div>
            <div className="flex bg-white rounded-3xl mx-3 overflow-hidden">
              <div className="flex flex-col items-center space-y-1">
                <Image
                  src={curr.img}
                  alt={`${curr.id}`}
                  width={300}
                  height={300}
                />
                <h2 className="font-bold text-xl text-stone-800">
                  {curr.title.toLocaleUpperCase()}
                </h2>
                <p>{curr.brand}</p>
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
