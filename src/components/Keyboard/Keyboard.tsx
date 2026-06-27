import {clsx} from "clsx"
import type {JSX, Dispatch, SetStateAction} from "react"

import "./Keyboard.css"

type KeyboardPropType = {
  currentWord: string, 
  guessLetter: string[], 
  setGuessLetter: Dispatch<SetStateAction<string[]>>, 
  win: boolean, 
  lose: boolean
}

export default function Keyboard({currentWord, guessLetter, setGuessLetter, win, lose}: KeyboardPropType): JSX.Element{

  const keyLetters = 'abcdefghijklmnopqrstuvwxyz'

  function handleLetterGuess(userGuess: string){
    setGuessLetter((prevGuess: string[]): string[] => (
      prevGuess.includes(userGuess) ? prevGuess : [...prevGuess, userGuess]
    ))
  }

  const keys: JSX.Element[] = keyLetters.split("").map(key => {
    const isGuessed: boolean = guessLetter.includes(key)
    const isCorrect: boolean = isGuessed && currentWord.includes(key)
    const isWrong: boolean = isGuessed && !currentWord.includes(key)

    const className: string = clsx({
        correct: isCorrect,
        wrong: isWrong
    })

    return (
      <button 
        key={key} 
        className={className} 
        onClick={() => handleLetterGuess(key)}
        disabled={lose || win || currentWord.length === 0}
      >
        {key.toUpperCase()}
      </button>
    )
  })

  return(
    <section className="keyboard-container">
      {keys}
    </section>
  )
}