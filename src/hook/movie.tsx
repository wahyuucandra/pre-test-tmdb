"use client";
import { getItem, setItem } from "@/helpers/storage";
import { IMovie, IResData } from "@/interface/movie";
import { useGetMovie } from "@/services/mutation/movie";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

// type
// 1. Now Playing
// 2. Popular
// 3. Upcoming

const useMovie = (type: number) => {
  const [movies, setMovies] = useState<IMovie[]>();
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const { mutate: getMovies } = useGetMovie(type);
  const [listFavourite, setListFavourite] = useState<number[]>([]);

  useEffect(() => {
    const listFav = getItem("listFav");
    if (listFav && movies) {
      const parsedListFav: number[] = JSON.parse(listFav);
      setListFavourite(parsedListFav);
      parsedListFav.map(item => {
        movies.map(item2 => {
            if(item == item2.id){
                item2.is_favourite = true
            }
        })
      })
    }
  }, [getItem("listFav"), movies]);

  useEffect(() => {
    if (type) getMovie();
  }, []);

  const getMovie = () => {
    setLoading(true);
    getMovies(
      { page: page.toString() },
      {
        onSuccess: (res: any) => {
          const data: IResData = res ?? null;
          setMovies(data.results);
        },
        onError: (error: any) => {
          toast(error.message);
        },
        onSettled() {
          setLoading(false);
        },
      }
    );
  };

  const setFavoriteMovie = (id: number) => {
    let isFavourite = false

    movies?.map(item => {
        if(item.id === id && item.is_favourite){
            item.is_favourite = false
            isFavourite = true
        }
    })

    let temp: number[] = [];

    if(isFavourite){
        temp = listFavourite.filter(item => item !== id);
    }else{
        temp = [...listFavourite, id];
    }

    setListFavourite(temp);
    setItem("listFav", temp);
  };

  return {
    state: {
      movies,
      page,
      loading,
    },
    actions: {
      setPage,
      setFavoriteMovie
    },
  };
};

export default useMovie;
