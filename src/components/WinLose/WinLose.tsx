import "./WinLose.css"
import type {JSX} from "react"

import {clsx} from "clsx"
import Languages from "../Languages/LanguagesList"
import type {Language} from "../Languages/LanguagesList"

type WinLosePropType = {
  wrongCount: number, 
  currentWord: string, 
  guessLetter: string[], 
  win: boolean, 
  lose: boolean, 
  langone: boolean, 
  getFarewellText: (language: string) => string
}

export default function WinLose({wrongCount, currentWord, guessLetter, win, lose, langone, getFarewellText}: WinLosePropType): JSX.Element{
  
  return(
    <section className="winlose-container">
      {
        currentWord.length === 0 && 
        <div className="default">
          <h2>Welcome Savior!</h2>
          <p>Press the <span>Start Game</span> button below to save the languages.</p>
        </div>
      }

      {
        (currentWord.length > 0 && guessLetter.length === 0) &&
        <div className="tutorial">
          <h2>Let's Start Saving</h2>
          <p>Guess the <span>Letters</span> from the keyboard below to save the languages.</p>
        </div>
      }

     {  (win) && 
      <div className="win">
        <h2>You Won!</h2>
        <p>Not all heroes wear cape. Some guesses words.</p>
      </div>
      }

      {/* lose message */}
      {lose && <div className="lose">
        <h2>Game Over!</h2>
        <p>You lose! Better start learning Assembly.</p>
      </div>
      }

      {/* wrong guess message */}
      {(langone) && 
      Languages.map((lan: Language, index: number): JSX.Element | undefined => {

        if(index + 1 === wrongCount){
          const className: string = clsx("lang",{
            gone: index - 1 < wrongCount - 1
          })

          const faremsg: string = getFarewellText(lan.id)


          return (
            <div key={index} className={className}>
              <h2>{faremsg}</h2>
            </div>
          )}})
        }
    </section>
  )
}