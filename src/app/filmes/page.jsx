import ListaFilmes from "@/components/Filmes"

async function getData() {
    const nomedofilme = "star wars"
    const api_key = "bc2edd6da7c1980f09e65291361b7db1"
    const fotofilme = "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/"
    const busca = "http://localhost/github/mydrugs/filme-api/busca.html?id="
    const url = `https://api.themoviedb.org/3/search/multi?api_key=${api_key}&language=pt-br&query=${nomedofilme}&page=1`

    const response = await fetch(url)
    return response.json();
}



export default async function Filmes() {
    const movies = await getData();

    return (
        <div>
            <div>Lista de filmes</div>
            <ListaFilmes movies={movies} />
        </div>
    )
}
