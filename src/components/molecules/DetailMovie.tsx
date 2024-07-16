'use client'

import { IResData } from "@/interface/detailMovie";
import React from "react";
import Image from "next/image";
import moment from "moment";

const DetailMovie = ({ movie }: { movie: IResData | undefined }) => {

  return (
    <div className="relative">
      <div className="relative bg-scroll ">
        <Image
          src={`https://media.themoviedb.org/t/p/w1920_and_h800_face${movie?.backdrop_path}`}
          width={1440}
          height={800}
          alt=""
          className="absolute"
        />
        <div className="absolute bg-black bg-opacity-50 w-[1440px] lg:h-[600px] md:h-[395px] " />
      </div>
      <div className="p-6 absolute flex flex-row gap-10 text-black z-10">
        <Image
          src={`https://media.themoviedb.org/t/p/w220_and_h330_face${movie?.poster_path}`}
          width={220}
          height={330}
          alt=""
          className="rounded-lg"
        />

        <div className="flex flex-col gap-6 text-white">
          <div className="font-bold text-[30px]">{movie?.title}<span className="font-normal text-md"> ({moment(movie?.release_date).format('yyyy')})</span></div>
          <div className="flex gap-2">
            {movie?.genres.map(item => (
              <div key={item.id} className="bg-orange-500 px-3 py-1 rounded-md text-sm">{item.name}</div>
            ))}
          </div>
          <div>Overview</div>
          <div className="">{movie?.overview}</div>
          <div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailMovie;
