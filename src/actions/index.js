// Action creator

export const selectSong = async(song) => {
   // Return an action

   const data = await fetch('https://jsonplaceholder.typicode.com/users')
   .then(res => res.json())
   .then(data => data).catch(err => console.log(err));

   console.log(data);

    return {
        type: 'SONG_SELETED',
        payload: song
    };
};



