import { PokemonSpecies } from "@/type/species";

// 포켓몬 분류(species) Retrieve Query
export default async function getSpeciesRetrieve(
  speciesId: string
): Promise<PokemonSpecies> {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${speciesId}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch Pokemon data");
  }

  return response.json();
}
