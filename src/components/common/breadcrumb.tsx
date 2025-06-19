"use client";

import getPokemonRetrieve from "@/apis/getPokemonRetrieve";
import getSpeciesRetrieve from "@/apis/getSpeciesRetrieve";
import { Pokemon } from "@/type/pokemon";
import { PokemonSpecies } from "@/type/species";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface BreadcrumbItem {
  name: string;
  href: string;
}

const Breadcrumb = () => {
  const pathname = usePathname();

  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbItem[]>([]);

  useEffect(() => {
    const fetchBreadcrumbs = async () => {
      const segments = pathname.split("/").filter(Boolean);
      const pathArray: BreadcrumbItem[] = [];
      let currentPath = "";

      for (let i = 0; i < segments.length; i++) {
        const seg = segments[i];
        currentPath += `/${seg}`;

        let name = seg;

        if (seg === "species") {
          name = "Pokemon Species List";
        } else if (seg === "pokemons") {
          name = "Pokemon List";
        } else if (segments[i - 1] === "species") {
          try {
            const response: PokemonSpecies = await getSpeciesRetrieve(seg);
            name = `${response.name} Overview`;
          } catch {
            name = "Invalid pokemonSpeciesName";
          }
        } else if (segments[i - 1] === "pokemons") {
          try {
            const response: Pokemon = await getPokemonRetrieve(seg);
            name = `${response.name} Overview`;
          } catch {
            name = "Invalid pokemonName";
          }
        }

        pathArray.push({ name, href: currentPath });
      }

      setBreadcrumbs([{ name: "Home", href: "/" }, ...pathArray]);
    };

    fetchBreadcrumbs();
  }, [pathname]);

  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    // 초기 실행
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (breadcrumbs.length === 0) {
    return (
      <div className="text-sm text-gray-500 fixed py-4 pl-5 z-50 bg-white w-full">
        Loading breadcrumbs...
      </div>
    );
  }

  return (
    <nav
      aria-label="breadcrumb"
      className="text-sm text-gray-500 fixed py-4 pl-5 z-50 bg-white w-full"
    >
      <ol className="flex">
        {breadcrumbs.map((crumb, index) => {
          const isFirst = index === 0;
          const isLast = index === breadcrumbs.length - 1;
          const isSecondLast = index === breadcrumbs.length - 2;

          if (isMobile && !isFirst && !isLast && !isSecondLast) {
            if (index === 1) {
              return (
                <li key="ellipsis">
                  ... <span className="mx-2">{">"}</span>
                </li>
              );
            }
            return null;
          }

          return (
            <li key={crumb.href}>
              {isLast ? (
                <span className="font-semibold text-black">{crumb.name}</span>
              ) : (
                <Link
                  href={crumb.href}
                  onClick={() => console.log("Breadcrumb clicked:", crumb.href)}
                  className="font-semibold hover:underline"
                >
                  {crumb.name}
                </Link>
              )}
              {!isLast && <span className="mx-2">{">"}</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
