'use client'

import Loading from "@/components/atoms/Loading";
import MetaGenerator from "@/components/atoms/MetaGenerator";
import Header from "@/components/molecules/Header";
import UseDetailMovie from "@/hook/detailMovie";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import React from "react"

function page() {
  const params = useSearchParams();
  const movie_id = params.get("movie_id") ?? "";
  const { state } = UseDetailMovie(movie_id);
  const { movie } = state;

  const DetailMovies = dynamic(() =>  import('../../components/molecules/DetailMovie'), { 
    loading: () => <Loading/>,
    ssr: false 
  })

  return (
    <main className="max-w-[1440px] mx-auto flex min-h-screen flex-col ">
      <MetaGenerator title={movie?.title ?? ""}/>
      <Header isActive={5} />
      <DetailMovies movie={movie} />
    </main>
  );
}

export default page;
