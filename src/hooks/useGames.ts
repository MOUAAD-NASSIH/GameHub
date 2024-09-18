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
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<FetchGameResponse>("/games", { signal: controller.signal })
      .then((res) => {
        setGames(res.data.results);
        setLoading(false);
      })
      .catch((err: AxiosError) => {
        if (axios.isCancel(err)) return;

        // Type assertion to handle AxiosError and other possible errors
        const axiosError = err as AxiosError;
        setError(axiosError.message || "An unknown error occurred");
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { games, error, isLoading };
};

export default useGames;
