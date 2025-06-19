import getRetrievePokemonDetail from "@/apis/getPokemonRetrieve";
import PokemonAbilityComponent from "@/components/infoComponent/pokemonAbility";
import PokemonImage from "@/components/common/pokemonImage";
import PokemonInfoContainer from "@/components/infoComponent/pokemonInfo";
import PokemonStatComponent from "@/components/infoComponent/pokemonStat";
import PokemonTypeComponent from "@/components/infoComponent/pokemonType";
import { Pokemon } from "@/type/pokemon";

export default async function Page({
  params,
}: {
  params: { pokemon: string };
}) {
  const { pokemon } = await params;

  const response: Pokemon = await getRetrievePokemonDetail(pokemon);

  const { id, name, height, is_default, weight, abilities, stats, types } =
    response;

  const infoList = [
    { title: "Is Default", value: is_default },
    { title: "Weight", value: weight },
    { title: "Height", value: height },
  ];

  return (
    <main className="space-y-5 pt-10">
      <div className="flex flex-col sm:flex-row space-x-8 space-y-8">
        <div className="sm:sticky sm:top-20 sm:self-start">
          <h3 className="text-2xl font-semibold">
            No. {id} {name}
          </h3>

          <PokemonImage
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon}.png`}
            alt={name}
            width={300}
            height={300}
          />
        </div>

        <div className="space-y-4">
          {infoList.map(({ title, value }) => (
            <PokemonInfoContainer key={title} title={title} value={value} />
          ))}

          <PokemonAbilityComponent data={abilities} />
          <PokemonTypeComponent data={types} />
          <PokemonStatComponent data={stats} />
        </div>
      </div>
    </main>
  );
}
