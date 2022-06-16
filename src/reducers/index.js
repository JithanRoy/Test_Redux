import React, { useEffect, useState } from "react";

const userReducer = () => {

    const [ user, setUsers ] = useState([]);

};

const selectedSongReducer = ( seletedSong = null, action) => {

    if(action.type === 'SONG_SELETED'){
        return action.payload;
    }
    return seletedSong;
};