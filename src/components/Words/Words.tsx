import type {JSX} from "react"
import "./Words.css"

type WordsPropType = {
  currentWord: string,
  guessLetter: string[],
  lose: boolean
}

export default function Words({currentWord, guessLetter, lose}: WordsPropType): JSX.Element{

  const letters: JSX.Element[] = currentWord.split("").map((letter: string, index: number): JSX.Element => {
    const guessed = guessLetter.includes(letter);
    const className = guessed ? "letter" : (lose ? "letter lost" : "letter");
    const display = guessed ? letter.toUpperCase() : (lose ? letter.toUpperCase() : "");
    return (
      <span key={index} className={className}>
        {display}
      </span>
    );
  });

  return(
    <section className="word-container">
      {letters}
    </section>
  )
}