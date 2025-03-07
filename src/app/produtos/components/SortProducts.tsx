import {
  ArrowDownWideNarrow,
  ArrowUpWideNarrow,
  ChevronsUpDown,
} from "lucide-react";
import { IPerfumes } from "../../../../database/perfumes";

interface SortProductsProps {
  products: IPerfumes[];
  setSortedPerfumes: (array: IPerfumes[]) => void;
  nameIcon: string;
  property: keyof IPerfumes;
  activeSort: keyof IPerfumes | null;
  setActiveSort: (property: keyof IPerfumes | null) => void;
  sortIcons: { [key in keyof IPerfumes]?: string };
  setSortIcons: (icons: { [key in keyof IPerfumes]?: string }) => void;
}

const SortProducts = ({
  setSortedPerfumes,
  products,
  nameIcon,
  property,
  activeSort,
  setActiveSort,
  sortIcons,
  setSortIcons,
}: SortProductsProps) => {
  function handleFilterIcon(property: keyof IPerfumes): void {
    let newIcon: string;

    if (activeSort === property) {
      // Toggle between ascending and descending
      newIcon =
        sortIcons[property] === "arrowDownWideNarrow"
          ? "arrowUpWideNarrow"
          : "arrowDownWideNarrow";
    } else {
      // If clicking a new button, reset all icons and set current one to descending
      newIcon = "arrowDownWideNarrow";
      setActiveSort(property);
    }

    // Reset other icons and update current one
    setSortIcons({
      id: property === "id" ? newIcon : "chevronsUpDown",
      title: property === "title" ? newIcon : "chevronsUpDown",
    });

    const sortedArray = [...products].sort((a, b) => {
      if (typeof a[property] === "number" && typeof b[property] === "number") {
        return newIcon === "arrowDownWideNarrow"
          ? a[property] - b[property]
          : b[property] - a[property];
      } else if (
        typeof a[property] === "string" &&
        typeof b[property] === "string"
      ) {
        return newIcon === "arrowDownWideNarrow"
          ? a[property].localeCompare(b[property])
          : b[property].localeCompare(a[property]);
      }
      return 0;
    });

    setSortedPerfumes(sortedArray);
  }

  let buttonIcon;
  if (sortIcons[property] === "chevronsUpDown") {
    buttonIcon = <ChevronsUpDown />;
  } else if (sortIcons[property] === "arrowDownWideNarrow") {
    buttonIcon = <ArrowDownWideNarrow />;
  } else if (sortIcons[property] === "arrowUpWideNarrow") {
    buttonIcon = <ArrowUpWideNarrow />;
  }

  return (
    <button
      onClick={() => handleFilterIcon(property)}
      className="color-inter flex justify-between text-white rounded-3xl p-3 py-2 mx-2 cursor-pointer"
    >
      {nameIcon}
      <div className="ml-4">{buttonIcon}</div>
    </button>
  );
};

export default SortProducts;
