import { IGetMovie } from "@/interface/movie";
import { useMutation } from "@tanstack/react-query";
import {
  getMovieNowPlaying,
  getMoviePopular,
  getMovieTopRated,
  getMovieUpcoming,
} from "../api/movie";

// type
// 1. Now Playing
// 2. Popular
// 3. Upcoming

export const useGetMovie = (type: number) => {
  console.log(type);
  switch (type) {
    case 1:
      return useMutation({
        mutationKey: ["get-movie-now-playing"],
        mutationFn: (data: IGetMovie) => getMovieNowPlaying(data),
      });
    case 2:
      return useMutation({
        mutationKey: ["get-movie-popular"],
        mutationFn: (data: IGetMovie) => getMoviePopular(data),
      });
    case 3:
      return useMutation({
        mutationKey: ["get-movie-upcoming"],
        mutationFn: (data: IGetMovie) => getMovieUpcoming(data),
      });
    default:
      return useMutation({
        mutationKey: ["get-movie-top-rated"],
        mutationFn: (data: IGetMovie) => getMovieTopRated(data),
      });
  }
};
