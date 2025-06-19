import getSpeciesList from "@/apis/getSpeciesList";
import PokemonItemComponent from "@/components/common/pokemonItem";
import { PokemonSpeciesList } from "@/type/species";
import { getIdFromUrl } from "@/utils/getIdFromUrl";
import Link from "next/link";

export default async function SpeciesListPage({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const { page } = await searchParams;

  const limit = 24;
  const currentPage = Number(page || 1);
  const offset = (currentPage - 1) * limit;

  const data: PokemonSpeciesList = await getSpeciesList(offset, limit);
  const totalPages = Math.ceil(data.count / limit);

  return (
    <main className="space-y-10 pt-10">
      <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-4">
        {data.results.map((item) => (
          <PokemonItemComponent
            key={item.name}
            href={`/species/${getIdFromUrl(item)}`}
            item={item}
          />
        ))}
      </div>

      <div className="flex flex-row justify-center items-center mt-8">
        <Link
          href={`?page=${currentPage - 1}`}
          className={`px-4 py-2 ${
            currentPage <= 1 ? "opacity-30 pointer-events-none" : ""
          }`}
        >
          이전
        </Link>
        <span className="mx-4">
          {currentPage} / {totalPages}
        </span>
        <Link
          href={`?page=${currentPage + 1}`}
          className={`px-4 py-2 ${
            !data.next ? "opacity-30 pointer-events-none" : ""
          }`}
        >
          다음
        </Link>
      </div>
    </main>
  );
}
