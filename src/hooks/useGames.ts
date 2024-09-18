import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import axios, { AxiosError } from "axios";

export interface Platform {
  id: number;
  slug: string;
  name: string;
}

interface ParentPlatform {
  platform: Platform;
}

// export interface Platform {
//     platform:     Platform;
//     released_at:  string;
// }

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

export interface FetchGameResponse {
  count: number;
  // next:     string;
  // previous: string;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchGameResponse>("/games", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((err: AxiosError) => {
        if (axios.isCancel(err)) return;

        // Type assertion to handle AxiosError and other possible errors
        const axiosError = err as AxiosError;
        setError(axiosError.message || "An unknown error occurred");
      });

    return () => controller.abort();
  }, []);

  return { games, error };
};

export default useGames;
