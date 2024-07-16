"use server";

import React from "react";
import satellite from "../satelite";
import { IGetMovie } from "@/interface/movie";

export const getMovieNowPlaying = ({ language = "en-US", page }: IGetMovie) =>
  satellite.get("/movie/now_playing", {
    params: {
      language,
      page,
    },
  });

export const getMoviePopular = ({ language = "en-US", page }: IGetMovie) =>
  satellite.get("/movie/popular", {
    params: {
      language,
      page,
    },
  });

export const getMovieUpcoming = ({ language = "en-US", page }: IGetMovie) =>
  satellite.get("/movie/upcoming", {
    params: {
      language,
      page,
    },
  });

export const getMovieTopRated = ({ language = "en-US", page }: IGetMovie) =>
  satellite.get("/movie/top_rated", {
    params: {
      language,
      page,
    },
  });

export const getMovieById = (id: string) => satellite.get(`/movie/${id}`);
