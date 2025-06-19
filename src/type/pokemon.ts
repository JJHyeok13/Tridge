import {
  NamedAPIResource,
  PokemonAbility,
  PokemonCries,
  PokemonHeldItem,
  PokemonMove,
  PokemonPastType,
  PokemonSprites,
  PokemonStat,
  PokemonType,
  VersionGameIndex,
} from "./common";

export interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: PokemonAbility[];
  forms: NamedAPIResource[];
  game_indices: VersionGameIndex[];
  held_items: PokemonHeldItem[];
  location_area_encounters: string;
  moves: PokemonMove[];
  sprites: PokemonSprites;
  cries: PokemonCries;
  species: NamedAPIResource;
  stats: PokemonStat[];
  types: PokemonType[];
  past_types: PokemonPastType[];
}
