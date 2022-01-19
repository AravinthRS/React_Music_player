import React from "react";
import LibrarySongs from "./LibrarySongs"

const Labrary = ({songs}) =>{
    return(
        <div className = "library">
            <h2>Library</h2>
            <div className = "library-song">
                {songs.map((song) => <LibrarySongs song={song}/>)}
            </div>
        </div>
    )
}

export default Labrary