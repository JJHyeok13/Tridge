"use client";

import { NamedAPIResource } from "@/type/common";
import PokemonImage from "./pokemonImage";
import Link from "next/link";

export default function PokemonItemComponent({
  item,
  href,
}: {
  item: NamedAPIResource;
  href: string;
}) {
  const id = item.url.split("/").filter(Boolean).pop() || "";

  return (
    <Link href={href} onClick={() => console.log("Pokemon Clicked: ", href)}>
      <div className="flex flex-col items-center p-3 rounded-2xl border-2 space-y-2">
        <h3 className="text-lg font-semibold">
          No. {id} {item.name}
        </h3>

        <PokemonImage
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
          alt={item.name}
        />
      </div>
    </Link>
  );
}
