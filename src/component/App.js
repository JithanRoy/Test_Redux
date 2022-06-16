import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { selectSong } from "../actions";

function App() {

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(selectSong())
  })

  return (
    <div className="App">App</div>
  );
}

export default App;
