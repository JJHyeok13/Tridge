import Image from "next/image";

interface PokemonImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

const PokemonImage: React.FC<PokemonImageProps> = ({
  src,
  alt,
  width = 80,
  height = 80,
}) => {
  return (
    <Image src={src} alt={alt} width={width} height={height} priority={true} />
  );
};

export default PokemonImage;
