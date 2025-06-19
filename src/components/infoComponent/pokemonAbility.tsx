import { PokemonAbility } from "@/type/common";

interface PokemonAbilityComponentProps {
  data: PokemonAbility[];
}

const PokemonAbilityComponent: React.FC<PokemonAbilityComponentProps> = ({
  data,
}) => {
  return (
    <div className="space-y-1">
      <h3 className="text-lg font-semibold">Stats</h3>
      <ol className="space-y-0.5">
        {data.map((item) => (
          <li
            key={item.ability.name}
            className="text-base font-medium list-disc ml-4"
          >
            {item.ability.name}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default PokemonAbilityComponent;
