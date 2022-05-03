const API_KEY = "7f6f3f4c12ef22e95b3d29d59f37c360";
const URL_BASE = "https://api.themoviedb.org/3";
const LANGUAGE_BASE = "pt-BR";

const getMovies = async (endpoint) => {
    try {
        const response = await fetch(`${URL_BASE}${endpoint}`);
        return await response.json();
    }
    catch (error) {
        console.log(`error in getMovies: ${error}`);
    }
}

export const getCategories = async () => {
    return [
        {
            name: "originals",
            title: "Originais Netflix",
            items: await getMovies(`/discover/tv?with_networks=213&language=${LANGUAGE_BASE}&api_key=${API_KEY}`),
        },
        {
            name: "trending",
            title: "Em alta",
            items: await getMovies(`/trending/all/week?language=${LANGUAGE_BASE}&api_key=${API_KEY}`),
        },
        {
            name: "topRated",
            title: "Populares",
            items: await getMovies(`/movie/top_rated?language=${LANGUAGE_BASE}&api_key=${API_KEY}`),
        },
        {
            name: "action",
            title: "Ação",
            items: await getMovies(`/discover/movie?with_genres=28&language=${LANGUAGE_BASE}&api_key=${API_KEY}`),
        },
        {
            name: "comedy",
            title: "Comédia",
            items: await getMovies(`/discover/movie?with_genres=35&language=${LANGUAGE_BASE}&api_key=${API_KEY}`),
        },
        {
            name: "horror",
            title: "Terror",
            items: await getMovies(`/discover/movie?with_genres=27&language=${LANGUAGE_BASE}&api_key=${API_KEY}`),
        },
        {
            name: "romances",
            title: "Romances",
            items: await getMovies(`/discover/movie?with_genres=10749&language=${LANGUAGE_BASE}&api_key=${API_KEY}`),
        },
        {
            name: "documentaries",
            title: "Documentários",
            items: await getMovies(`/discover/movie?with_genres=99&language=${LANGUAGE_BASE}&api_key=${API_KEY}`),
        },
    ];
}

export const getMoreInfo = async (id, isMovie) => {
    try {
        if (isMovie && id) {
            const response = await fetch(`${URL_BASE}/movie/${id}?language=${LANGUAGE_BASE}&api_key=${API_KEY}`);
            return response.json();
        } else if (id) {
            const response = await fetch(`${URL_BASE}/tv/${id}?language=${LANGUAGE_BASE}&api_key=${API_KEY}`);
            return response.json();
        }
    }
    catch (error) {
        console.log(`error in getMovies: ${error}`);
    }
}


