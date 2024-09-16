import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

// export interface EsrbRating {
//     id:   number;
//     slug: string;
//     name: string;
// }

// export interface Platform {
//     platform:     EsrbRating;
//     released_at:  string;
// }

interface Game {
  id: number;
  // slug:               string;
  name: string;
  // released:           string;
  // background_image:   string;
  // rating:             number;
  // esrb_rating:        EsrbRating;
  // platforms:          Platform[];
}

export interface FetchGameResponse {
  count: number;
  // next:     string;
  // previous: string;
  results: Game[];
}

function GameGrid() {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGameResponse>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  });

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
}

export default GameGrid;
