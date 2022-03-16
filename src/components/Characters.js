import { useQuery } from "react-query";
import Character from "./Character";

export default function Characters() {
  const fetchCharacters = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    return response.json();
  };

  const { data, status } = useQuery("characters", fetchCharacters);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "error") {
    return <div>Error</div>;
  }

  return (
    <div className="characters">
      {data.results.map((character, index) => (
        <Character character={character} />
      ))}
    </div>
  );
}
