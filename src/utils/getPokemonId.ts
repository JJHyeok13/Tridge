export function getPokemonIdFromUrl(url: string): string | null {
  const match = url.match(/\/pokemon\/(\d+)\/?$/);
  return match ? match[1] : null;
}
