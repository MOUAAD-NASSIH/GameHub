import useData from "./useData";
import { Genre } from "./useGenres";

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

const useGames = (selectedGenre: Genre | null) => useData<Game>("/games", {params: {genres: selectedGenre?.id}}, [selectedGenre?.id]);

export default useGames;
