import { GameQuery } from "../App";
import useData from "./useData";

export interface Platform {
  id: number;
  slug: string;
  name: string;
}

interface ParentPlatform {
  platform: Platform;
}

export interface Game {
  id: number;
  // slug:               string;
  name: string;
  // released:           string;
  background_image: string;
  metacritic: number;
  // rating:             number;
  // platforms:          Platform[];
  parent_platforms: ParentPlatform[];
}

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
      },
    },
    [gameQuery]
  );

export default useGames;
