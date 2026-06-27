import {useState} from "react"
import type {JSX, Dispatch, SetStateAction} from "react"

import "./Button.css"

type ButtonCompType = {
  setGuessLetter:  Dispatch<SetStateAction<string[]>>,
  refresh: () => void,
  win: boolean
}

export default function Button({setGuessLetter, refresh, win}: ButtonCompType): JSX.Element{
  
  const [btnName, setBtnName] = useState("Start Game")

  function startGame(){
    refresh();
    setBtnName("Restart")
  }
  
  function resetgame(){
    setGuessLetter([]);
    refresh();
  }

  return(
      <button className="newgame" onClick={btnName == "Start Game" ? startGame :  resetgame }>
        {win ? "Start Game" : btnName}
      </button>
  )
}