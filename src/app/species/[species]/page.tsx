import getSpeciesRetrieve from "@/apis/getSpeciesRetrieve";
import CustomLinkComponent from "@/components/common/customLink";
import PokemonImage from "@/components/common/pokemonImage";
import PokemonInfoContainer from "@/components/infoComponent/pokemonInfo";
import { PokemonSpecies } from "@/type/species";

export default async function SpeciesDetailPage({
  params,
}: {
  params: { species: string };
}) {
  const { species } = await params;

  const response: PokemonSpecies = await getSpeciesRetrieve(species);

  const {
    id,
    name,
    is_baby,
    is_legendary,
    is_mythical,
    has_gender_differences,
    forms_switchable,
    growth_rate,
    color,
    shape,
    evolves_from_species,
    habitat,
    generation,
    flavor_text_entries,
  } = response;

  const infoList = [
    { title: "Is Baby", value: is_baby },
    { title: "Is Legendary", value: is_legendary },
    { title: "Is Mythical", value: is_mythical },
    { title: "Has Gender Differences", value: has_gender_differences },
    { title: "Forms Switchable", value: forms_switchable },
    { title: "Growth Rate", value: growth_rate?.name },
    { title: "Color", value: color?.name },
    { title: "Shape", value: shape?.name },
    { title: "Evolves From Species", value: evolves_from_species?.name },
    { title: "Habitat", value: habitat?.name },
    { title: "Generation", value: generation?.name },
    {
      title: "Flavor Text",
      value: flavor_text_entries.find((e) => e.language.name === "en")
        ?.flavor_text,
    },
  ];

  return (
    <main className="space-y-5 pt-10">
      <div className="flex flex-col sm:flex-row space-x-8 space-y-8">
        <div className="sm:sticky sm:top-20 sm:self-start">
          <h3 className="text-2xl font-semibold">
            No. {id} {name}
          </h3>

          <PokemonImage
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
            alt={name}
            width={300}
            height={300}
          />

          <CustomLinkComponent
            href={`/species/${species}/pokemons`}
            title="varieties"
          />
        </div>

        <div className="space-y-4">
          {infoList.map(({ title, value }) => (
            <PokemonInfoContainer key={title} title={title} value={value} />
          ))}
        </div>
      </div>
    </main>
  );
}
