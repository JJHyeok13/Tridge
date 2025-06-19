import CustomLinkComponent from "@/components/common/customLink";

// 홈
export default function Home() {
  return (
    <main className="space-y-8 pt-10">
      <h1 className="text-4xl font-semibold">Tridge PokeAPI Assignment</h1>

      <CustomLinkComponent
        href="/species?page=1"
        title="포켓몬 Species 보러가기"
      />
    </main>
  );
}
