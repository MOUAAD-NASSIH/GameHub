import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

// shiping static data instead of fetching it
const useGenres = () => ({ data: genres, isLoading: false, error: null });

export default useGenres;
