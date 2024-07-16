import { useMutation } from "@tanstack/react-query";
import React from "react";
import { getMovieById } from "../api/movie";

export const useGetDetailMovie = () => {
  return useMutation({
    mutationKey: ["get-detail-movie"],
    mutationFn: (id: string) => getMovieById(id),
  });
};
