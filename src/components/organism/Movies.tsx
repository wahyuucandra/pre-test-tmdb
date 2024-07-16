"use client";

import React from "react";
import MetaGenerator from "../atoms/MetaGenerator";
import useMovie from "@/hook/movie";
import dynamic from "next/dynamic";
import Loading from "../atoms/Loading";

// type
// 1. Now Playing
// 2. Popular
// 3. Upcoming

const Movies = ({ type, title }: { type: number, title: string }) => {
  const { state, actions } = useMovie(type);
  const { movies } = state;
  const { setFavoriteMovie } = actions;

  const MoviesCards = dynamic(() =>  import('../molecules/MovieCard'), { 
    loading: () => <Loading/>,
    ssr: false 
  })

  return (
    <div className="text-black p-6">
      <MetaGenerator title={`Movie ${title}` }/>
      <h1 className="font-semibold text-[24px] mb-[24px]"> {title} </h1>
      <MoviesCards
        movies={movies}
        setFavoriteMovie={(id) => setFavoriteMovie(id)}
      />
    </div>
  );
};

export default Movies;
