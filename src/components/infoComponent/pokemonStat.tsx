import { PokemonStat } from "@/type/common";

interface PokemonStatComponentProps {
  data: PokemonStat[];
}

const PokemonStatComponent: React.FC<PokemonStatComponentProps> = ({
  data,
}) => {
  return (
    <div className="space-y-1">
      <h3 className="text-lg font-semibold">Stats</h3>
      <ol className="space-y-0.5">
        {data.map((item) => (
          <li
            key={item.stat.name}
            className="text-base font-medium list-disc ml-4"
          >
            {item.stat.name} {item.base_stat}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default PokemonStatComponent;
