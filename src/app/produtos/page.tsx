"use client";
import React, { useState, useEffect } from "react";
import { masculinos, femininos, IPerfumes } from "../../../database/perfumes";
import MenuBottom from "../components/MenuBottom";
import { useSearchParams, notFound } from "next/navigation";
import ProductsList from "./components/ProductsList";
import SortProducts from "./components/SortProducts";

export default function Produtos() {
  const params = useSearchParams().get("cat");

  if (params !== "masculino" && params !== "feminino") {
    notFound();
  }

  const [perfumes, setPerfumes] = useState<IPerfumes[]>([]);
  const [sortedPerfumes, setSortedPerfumes] = useState<IPerfumes[]>([]);
  const [activeSort, setActiveSort] = useState<keyof IPerfumes | null>(null);
  const [sortIcons, setSortIcons] = useState<{
    [key in keyof IPerfumes]?: string;
  }>({
    id: "chevronsUpDown",
    title: "chevronsUpDown",
  });

  useEffect(() => {
    if (params === "masculino") {
      setPerfumes(masculinos.sort((a, b) => a.id - b.id));
    } else if (params === "feminino") {
      setPerfumes(femininos.sort((a, b) => a.id - b.id));
    }
    setSortIcons({
      id: "chevronsUpDown",
      title: "chevronsUpDown",
    });
  }, [params]);

  useEffect(() => {
    setSortedPerfumes(perfumes);
  }, [perfumes]);

  return (
    <div className="flex w-screen h-full justify-center bg-pink-100 mb-10 flex-col items-center">
      <div className="mt-3 flex">
        <SortProducts
          setSortedPerfumes={setSortedPerfumes}
          products={sortedPerfumes}
          nameIcon={"Número"}
          property={"id"}
          activeSort={activeSort}
          setActiveSort={setActiveSort}
          sortIcons={sortIcons}
          setSortIcons={setSortIcons}
        />
        <SortProducts
          setSortedPerfumes={setSortedPerfumes}
          products={sortedPerfumes}
          nameIcon={"Nome"}
          property={"title"}
          activeSort={activeSort}
          setActiveSort={setActiveSort}
          sortIcons={sortIcons}
          setSortIcons={setSortIcons}
        />
      </div>
      <ProductsList products={sortedPerfumes} />
      <MenuBottom />
    </div>
  );
}
