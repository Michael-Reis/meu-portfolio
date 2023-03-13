"use client"

import { useState } from "react"
export default function ListaFilmes({ movies }) {

    return (
        <div>
            {movies.results.map((movie) => (
                <div key={movie.id}>
                    <div>{movie.title}</div>
                    <div>{movie.overview}</div>
                    <div>{movie.release_date}</div>
                    <div>{movie.poster_path}</div>
                    <br></br>

                </div>

            ))}
        </div>
    )
}