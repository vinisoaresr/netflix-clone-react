import React from 'react';
import './Spotlight.css';

export function Spotlight({ movie }) {
    let firstDate = new Date(movie.first_air_date);
    let genres = [];
    movie.genres.map((genre) => (
        genres.push(genre.name)
    ));

    let renderSeasons = movie.number_of_seasons > 1 ? `${movie.number_of_seasons} temporadas` : `1 temporada`;

    return (
        <section className='featured' style={
            {
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
            }
        }>
            <div className='featured--vertical'>
                <div className='featured--horizontal'>
                    <div className='featured--title'> {movie.original_name} </div>
                    <div className='featured--info'>
                        <div className='featured--points' > {movie.vote_average} pontos </div >
                        <div className='featured--date' > {firstDate.getFullYear()} </div >
                        <div className='featured--seasons' > {renderSeasons} </div >
                    </div>
                    <div className='featured--overview'> {movie.overview} </div >
                    <div className='featured--button'>
                        <a className='button--watch' href={`/watch/${movie.id}`}> Assitir </a>
                        <a className='button--myList' href={`/watch/mylist`}> + Minha Lista</a> </div>
                    <div className='featured--genres'> {`Gêneros: ${genres.join(', ')}`}  </div>

                </div>

            </div>
        </section >
    )
}
