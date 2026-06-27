import { useState } from "react"
import Confetti from "react-confetti"
import type { JSX } from "react"

import Header from "./components/Header/Header.tsx"
import WinLose from "./components/WinLose/WinLose.tsx"
import Languages from "./components/Languages/Languages.tsx"
import Words from "./components/Words/Words.tsx"
import Keyboard from "./components/Keyboard/Keyboard.tsx"
import Button from "./components/Button/Button.tsx"
import Loading from "./components/Preloader/Loading.tsx"

//data
import wordBank from "./wordBank.ts"
import { getFarewellText } from "./FarewellMsg.ts"

export default function App(): JSX.Element {
  const [currentWord, setCurrentWord] = useState<string>("")
  const [guessLetter, setGuessLetter] = useState<string[]>([])

  const wrongCount: number = guessLetter.filter(letter => !currentWord.includes(letter)).length
  // const rightCount: number = currentWord.split("").filter((letter: string): boolean=> guessLetter.includes(letter)).length

  //winlose
  const win: boolean = currentWord.length > 0 && currentWord.split("").every((letter: string): boolean => guessLetter.includes(letter))
  const lose: boolean = wrongCount === 8
  const langone: boolean = wrongCount > 0 && wrongCount < 8 && !win

  function refresh(): void {
    const randomIndex = Math.floor(Math.random() * wordBank.length)
    setCurrentWord(wordBank[randomIndex].toLowerCase())
  }

  return (
    <>
      {win && <Confetti />}
      <Loading />
      <Header />

      <WinLose
        wrongCount={wrongCount}
        guessLetter={guessLetter}
        currentWord={currentWord}
        win={win}
        lose={lose}
        langone={langone}
        getFarewellText={getFarewellText}
      />

      <Languages
        wrongCount={wrongCount}
      />

      <Words
        currentWord={currentWord}
        guessLetter={guessLetter}
        lose={lose}
      // rightCount={rightCount}
      />

      <Keyboard
        currentWord={currentWord}
        guessLetter={guessLetter}
        setGuessLetter={setGuessLetter}
        win={win}
        lose={lose}
      />

      <Button
        setGuessLetter={setGuessLetter}
        refresh={refresh}
        win={win}
      />
    </>
  )
}