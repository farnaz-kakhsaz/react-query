import { useState } from "react";
import { useQuery } from "react-query";
import Character from "./Character";

export default function Characters() {
  const [page, setPage] = useState(1);
  const fetchCharacters = async ({ queryKey }) => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${queryKey[1]}`
    );
    return response.json();
  };

  const { data, isLoading, isError, isPreviousData } = useQuery(
    ["characters", page],
    fetchCharacters,
    {
      keepPreviousData: true,
    }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <div className="characters">
      {data.results.map((character, index) => (
        <Character character={character} key={character.id} />
      ))}
      <button onClick={() => setPage(page - 1)} disabled={page <= 1}>
        Previous
      </button>
      <button
        onClick={() => setPage(page + 1)}
        disabled={isPreviousData || !data.info.next}
      >
        Next
      </button>
    </div>
  );
}
