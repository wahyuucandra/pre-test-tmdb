import { IMovie } from "@/interface/movie";
import React from "react";
import Image from "next/image";
import moment from "moment"
import { MdOutlineFavorite } from "react-icons/md";
import Link from "next/link";

const MovieCard = ({ 
    movies, 
    setFavoriteMovie
} : { 
    movies: IMovie[] | undefined, 
    setFavoriteMovie: (id: number) => void
}) => {

  return (
    <div className="grid md:grid-cols-4 lg:grid-cols-6 gap-3">
        {
            movies?.map((movie: IMovie) => (
                <Link href={`/movie?movie_id=${movie.id}`} key={movie.id} className="relative bg-white rounded-lg border border-gray-400 shadow-md w-[220px]"> 
                    <Image 
                        src={`https://media.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}
                        width={220}
                        height={330}
                        alt=""
                        className="rounded-t-lg"
                    />
                    <div className="content__card p-3 flex flex-col">
                        <div className="font-semibold">{movie.title}</div>
                        <div className="text-sm text-gray-500">{moment(movie?.release_date).format('MMM DD, yyyy')}</div>
                    </div>
                    <button className="absolute top-[10px] right-[10px]" onClick={() => setFavoriteMovie(movie.id)}>
                        <MdOutlineFavorite color={movie.is_favourite ? "red" : "gray"} size={30} className="drop-shadow-sm"/>
                    </button>
                </Link>
            ))
        }
    </div>
  )
};

export default MovieCard;
