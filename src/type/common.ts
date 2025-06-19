export interface NamedAPIResource {
  name: string;
  url: string;
}

export interface APIResource {
  url: string;
}

export interface PokemonSpeciesDexEntry {
  entry_number: number;
  pokedex: NamedAPIResource;
}

export interface Name {
  name: string;
  language: NamedAPIResource;
}

export interface PalParkEncounterArea {
  base_score: number;
  rate: number;
  area: NamedAPIResource;
}

export interface FlavorText {
  flavor_text: string;
  language: NamedAPIResource;
  version: NamedAPIResource;
}

export interface Description {
  description: string;
  language: NamedAPIResource;
}

export interface Genus {
  genus: string;
  language: NamedAPIResource;
}

export interface PokemonSpeciesVariety {
  is_default: boolean;
  pokemon: NamedAPIResource;
}

export interface PokemonAbility {
  is_hidden: boolean;
  slot: number;
  ability: NamedAPIResource;
}

export type PokemonCries = {
  legacy: string;
  latest: string;
};

export interface VersionGameIndex {
  game_index: number;
  version: NamedAPIResource;
}

export interface PokemonHeldItemVersion {
  version: NamedAPIResource;
  rarity: number;
}

export interface PokemonHeldItem {
  item: NamedAPIResource;
  version_details: PokemonHeldItemVersion[];
}

export interface PokemonMove {
  move: NamedAPIResource;
  version_group_details: PokemonMoveVersion[];
}

export interface PokemonMoveVersion {
  move_learn_method: NamedAPIResource;
  version_group: NamedAPIResource;
  level_learned_at: number;
}

export interface PokemonPastType {
  generation: NamedAPIResource;
  types: PokemonType[];
}

export interface PokemonType {
  slot: number;
  type: NamedAPIResource;
}

export interface VersionSprites {
  "generation-i": GenerationISprites;
  "generation-ii": GenerationIISprites;
  "generation-iii": GenerationIIISprites;
  "generation-iv": GenerationIVSprites;
  "generation-v": GenerationVSprites;
  "generation-vi": GenerationVISprites;
  "generation-vii": GenerationVIISprites;
  "generation-viii": GenerationVIIISprites;
}

export interface GenerationISprites {
  "red-blue": RedBlue;
  yellow: Yellow;
}

export interface RedBlue {
  back_default: string | null;
  back_gray: string | null;
  back_transparent: string | null;
  front_default: string | null;
  front_gray: string | null;
  front_transparent: string | null;
}

export interface Yellow {
  back_default: string | null;
  back_gray: string | null;
  back_transparent: string | null;
  front_default: string | null;
  front_gray: string | null;
  front_transparent: string | null;
}

export interface GenerationIISprites {
  crystal: Crystal;
  gold: Gold;
  silver: Silver;
}

export interface Crystal {
  back_default: string | null;
  back_shiny: string | null;
  back_shiny_transparent: string | null;
  back_transparent: string | null;
  front_default: string | null;
  front_shiny: string | null;
  front_shiny_transparent: string | null;
  front_transparent: string | null;
}

export interface Gold {
  back_default: string | null;
  back_shiny: string | null;
  front_default: string | null;
  front_shiny: string | null;
  front_transparent: string | null;
}

export interface Silver {
  back_default: string | null;
  back_shiny: string | null;
  front_default: string | null;
  front_shiny: string | null;
  front_transparent: string | null;
}

export interface GenerationIIISprites {
  emerald: Emerald;
  "firered-leafgreen": FireredLeafgreen;
  "ruby-sapphire": RubySapphire;
}

export interface Emerald {
  front_default: string | null;
  front_shiny: string | null;
}

export interface FireredLeafgreen {
  back_default: string | null;
  back_shiny: string | null;
  front_default: string | null;
  front_shiny: string | null;
}

export interface RubySapphire {
  back_default: string | null;
  back_shiny: string | null;
  front_default: string | null;
  front_shiny: string | null;
}

export interface GenerationIVSprites {
  "diamond-pearl": DiamondPearl;
  "heartgold-soulsilver": HeartgoldSoulsilver;
  platinum: Platinum;
}

export interface DiamondPearl {
  back_default: string | null;
  back_shiny: string | null;
  back_female: string | null;
  front_default: string | null;
  front_shiny: string | null;
  back_shiny_female: string | null;
  front_female: string | null;
  front_shiny_female: string | null;
}

export interface HeartgoldSoulsilver {
  back_default: string | null;
  back_shiny: string | null;
  back_female: string | null;
  front_default: string | null;
  front_shiny: string | null;
  back_shiny_female: string | null;
  front_female: string | null;
  front_shiny_female: string | null;
}

export interface Platinum {
  back_default: string | null;
  back_shiny: string | null;
  back_female: string | null;
  front_default: string | null;
  front_shiny: string | null;
  back_shiny_female: string | null;
  front_female: string | null;
  front_shiny_female: string | null;
}

export interface GenerationVSprites {
  "black-white": BlackWhite;
}

export interface BlackWhite {
  animated: Animated;
  back_default: string | null;
  back_shiny: string | null;
  back_female: string | null;
  front_default: string | null;
  front_shiny: string | null;
  back_shiny_female: string | null;
  front_female: string | null;
  front_shiny_female: string | null;
}

export interface Animated {
  back_default: string | null;
  back_shiny: string | null;
  back_female: string | null;
  front_default: string | null;
  front_shiny: string | null;
  back_shiny_female: string | null;
  front_female: string | null;
  front_shiny_female: string | null;
}

export interface GenerationVISprites {
  "omegaruby-alphasapphire": OmegarubyAlphasapphire;
  "x-y": XY;
}

export interface OmegarubyAlphasapphire {
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
}

export interface XY {
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
}

export interface GenerationVIISprites {
  icons: GenerationViiIcons;
  "ultra-sun-ultra-moon": UltraSunUltraMoon;
}

export interface GenerationViiIcons {
  front_default: string | null;
  front_female: string | null;
}

export interface UltraSunUltraMoon {
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
}

export interface GenerationVIIISprites {
  icons: GenerationViiiIcons;
}

export interface GenerationViiiIcons {
  front_default: string | null;
  front_female: string | null;
}

export interface OtherPokemonSprites {
  dream_world: DreamWorld;
  "official-artwork": OfficialArtwork;
  home: Home;
  showdown: Showdown;
}

export interface DreamWorld {
  front_default: string | null;
  front_female: string | null;
}

export interface OfficialArtwork {
  front_default: string | null;
}

export interface Home {
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
}

export interface Showdown {
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
}

export interface PokemonSprites {
  front_default: string | null;
  front_shiny: string | null;
  front_female: string | null;
  front_shiny_female: string | null;
  back_default: string | null;
  back_shiny: string | null;
  back_female: string | null;
  back_shiny_female: string | null;
  other?: OtherPokemonSprites;
  versions: VersionSprites;
}

export interface PokemonStat {
  stat: NamedAPIResource;
  effort: number;
  base_stat: number;
}
