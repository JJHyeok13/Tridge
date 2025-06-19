# 🧭 My React Data Breadcrumb
PokeAPI를 사용하여 포켓몬 species 및 pokemon 데이터를 기반으로 웹사이트의 Breadcrumb 네비게이션 텍스트을 구현한 Next.js 프로젝트입니다.

## 🔗 API 참조 (https://pokeapi.co/docs/v2)

- 포켓몬 분류(species) List Query - https://pokeapi.co/api/v2/pokemon-species
- 포켓몬 분류(species) Retrieve Query - https://pokeapi.co/api/v2/pokemon-species/{{speciesId}}
- 포켓몬 분류(species) 별 포켓몬 List Query - https://pokeapi.co/api/v2/pokemon-species/{{speciesId}} (varieties 필드 사용)
- 포켓몬 Retrieve Query - https://pokeapi.co/api/v2/pokemon/{{pokemonId}}

## 🌐 라우트 구조 “URL - Route Name”
```
/ - Home
/species - Home > Pokemon Species List
/species/:species - Home > Pokemon Species List > {{pokemonSpeciesName}} Overview
/species/:species/pokemons - Home > Pokemon Species List > {{pokemonSpeciesName}} Overview > Pokemon List
/species/:species/pokemons/:pokemon - Home > Pokemon Species List > {{pokemonSpeciesName}} Overview > Pokemon List > {{pokemonName}}
```

## ✅ 요구사항
- 위의 라우트 구조를 반영하여야 한다.
- URL의 변화에 따라 해당하는 페이지 경로를 보여주어야 한다.
- 각 라우트는 모두 독립적으로 존재하며 내부에서 Breadcrumb를 가진다.
- 부모 라우트와의 관계를 내부로직에 반영 하여야 한다.
- 각 경로를 클릭시 해당하는 URL로 이동해야 하고, 현재 경로에 대해서는 링크로 동작하지 않도록 한다. 
- 각 URL에 해당되는 데이터를 Breadcrumb에 전달하여 변수에 해당하는 라우트 이름을 적절하게 출력할 수 있어야 하며 이를 위한 validation을 반영하여야 한다.

## ✅ Advanced features (Optional)
- 모바일에서 중간 경로 생략을 통해 UI를 최적화한다.
- Typescript를 사용하여 human error 방지를 위한 validation을 적용한다.
- 데이터가 로딩이 되는 경우를 반영하여 구현한다.
- 각 경로 클릭에 대한 콜백을 통해 어떤 경로를 클릭했는지를 알수 있게 한다. 

## 🛠 Tech stacks
- React (Next.js)
- tailwindcss
- TypeScript

## 📦 Getting Started

```
git clone https://github.com/JJHyeok13/Tridge.git

cd Tridge

npm install

npm run dev
```
