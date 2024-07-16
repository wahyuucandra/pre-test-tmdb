"use client";

import { IResData } from "@/interface/detailMovie";
import { useGetDetailMovie } from "@/services/mutation/detailMovie";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const UseDetailMovie = (id: string) => {
  const { mutate } = useGetDetailMovie();
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState<IResData>();

  useEffect(() => {
    getDetailMovie()
  }, []);

  const getDetailMovie = () => {
    setLoading(true);
    mutate(
      id ,
      {
        onSuccess: (res: any) => {
          const data: IResData = res ?? null;
          setMovie(data);
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

  return {
    state: {
      movie,
      loading,
    },
    actions: {

    },
  };
};

export default UseDetailMovie;
