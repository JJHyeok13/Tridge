interface PokemonInfoContainerProps {
  title: string;
  value?: string | number | boolean;
}

const PokemonInfoContainer: React.FC<PokemonInfoContainerProps> = ({
  title,
  value,
}) => {
  let displayValue: string = "";

  if (typeof value === "boolean") {
    displayValue = value ? "⭕️" : "❌";
  } else if (typeof value === "string" || "number") {
    displayValue = String(value);
  }

  return (
    <div className="space-y-1">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-base font-medium">{displayValue}</p>
    </div>
  );
};

export default PokemonInfoContainer;
