import React from 'react';

const LibrarySongs = ({ song }) =>{
    return(
    <div className = 'library-songs'>
        <img alt={song.name} src={song.cover}></img>
        <div className = "song-description">
        <h3>{song.name}</h3>
        <h4>{song.artish}</h4>
        </div>
    </div>
    )
}

export default LibrarySongs;