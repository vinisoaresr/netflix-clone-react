import React, { useState } from 'react';
import './MovieRow.css';

import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';


export function MovieRow({ title, items }) {
    const [scrollX, setScrollX] = useState(-0);

    const MAX_SCROLLABLE = Math.round(window.innerWidth / 2);

    const handleLeftArrow = () => {
        if ((scrollX - MAX_SCROLLABLE) >= (items.results.length * - 80)) {
            setScrollX((scrollX - MAX_SCROLLABLE));
        } else {
            setScrollX(items.results.length * - 50);
        }
    }
    const handleRightArrow = () => {
        if ((scrollX + MAX_SCROLLABLE) <= 0) {
            setScrollX((scrollX + MAX_SCROLLABLE));
        } else {
            setScrollX(-0);
        }
    }

    return (
        <div className='movieRow'>
            <h2 >{title}</h2>
            <div className='movieRow--left' onClick={handleLeftArrow}
                style={{ fontSize: 50 }}> <NavigateBeforeIcon></NavigateBeforeIcon> </div>
            <div className='movieRow--right' onClick={handleRightArrow}
                style={{ fontSize: 50 }}> <NavigateNextIcon></NavigateNextIcon> </div>


            <div className='movieRow--listArea'>
                <div className='movieRow--list' style={{
                    marginLeft: scrollX,
                    width: (items.results.length * 150)
                }}>
                    {items.results.map((movie, key) => (
                        <div className='movieRow--movie'>
                            <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt="movies_icon" />
                        </div>
                    ))}
                </div>
            </div>
        </div >)
}
