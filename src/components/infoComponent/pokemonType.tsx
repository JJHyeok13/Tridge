import { PokemonType } from "@/type/common";

interface PokemonTypeComponentProps {
  data: PokemonType[];
}

const PokemonTypeComponent: React.FC<PokemonTypeComponentProps> = ({
  data,
}) => {
  return (
    <div className="space-y-1">
      <h3 className="text-lg font-semibold">Types</h3>
      <ol className="space-y-0.5">
        {data.map((item) => (
          <li
            key={item.type.name}
            className="text-base font-medium list-disc ml-4"
          >
            {item.type.name}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default PokemonTypeComponent;
