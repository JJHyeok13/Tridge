import {
  APIResource,
  Description,
  FlavorText,
  Genus,
  Name,
  NamedAPIResource,
  PalParkEncounterArea,
  PokemonSpeciesDexEntry,
  PokemonSpeciesVariety,
} from "./common";

export type PokemonSpeciesList = {
  count: number;
  next: string | null;
  previous: string | null;
  results: NamedAPIResource[];
};

export interface PokemonSpecies {
  id: number;
  name: string;
  order: number;
  gender_rate: number;
  capture_rate: number;
  base_happiness: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  hatch_counter: number;
  has_gender_differences: boolean;
  forms_switchable: boolean;
  growth_rate: NamedAPIResource;
  pokedex_numbers: PokemonSpeciesDexEntry[];
  egg_groups: NamedAPIResource[];
  color: NamedAPIResource;
  shape: NamedAPIResource;
  evolves_from_species: NamedAPIResource;
  evolution_chain: APIResource;
  habitat: NamedAPIResource;
  generation: NamedAPIResource;
  names: Name[];
  pal_park_encounters: PalParkEncounterArea[];
  flavor_text_entries: FlavorText[];
  form_descriptions: Description[];
  genera: Genus[];
  varieties: PokemonSpeciesVariety[];
}
