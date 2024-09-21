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
  rating_top: number;
  // platforms:          Platform[];
  parent_platforms: ParentPlatform[];
}

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
      },
    },
    [gameQuery]
  );

export default useGames;
