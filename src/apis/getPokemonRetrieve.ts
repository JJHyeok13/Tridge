import { Pokemon } from "@/type/pokemon";

// 포켓몬 Retrieve Query
export default async function getPokemonRetrieve(
  pokemonId: string
): Promise<Pokemon> {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch Pokemon data");
  }

  return response.json();
}
