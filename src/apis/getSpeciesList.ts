import { PokemonSpeciesList } from "@/type/species";

// 포켓몬 분류(species) List Query
export default async function getSpeciesList(
  offset: number,
  limit = 20
): Promise<PokemonSpeciesList> {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/?limit=${limit}&offset=${offset}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch Pokemon data");
  }

  return response.json();
}
