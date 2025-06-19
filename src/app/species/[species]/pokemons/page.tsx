import getSpeciesRetrieve from "@/apis/getSpeciesRetrieve";
import PokemonItemComponent from "@/components/common/pokemonItem";
import { PokemonSpecies } from "@/type/species";
import { getIdFromUrl } from "@/utils/getIdFromUrl";

export default async function Page({
  params,
}: {
  params: { species: string };
}) {
  const { species } = await params;

  const response: PokemonSpecies = await getSpeciesRetrieve(species);

  return (
    <main className="pt-10">
      <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-4">
        {response.varieties.map((item) => (
          <PokemonItemComponent
            key={item.pokemon.url}
            href={`/species/${species}/pokemons/${getIdFromUrl(item.pokemon)}`}
            item={item.pokemon}
          />
        ))}
      </div>
    </main>
  );
}
