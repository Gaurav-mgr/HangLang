import languages from './LanguagesList.ts'
import type {JSX} from "react"

import {clsx} from "clsx"
import './Languages.css'

export default function Languages({wrongCount}: {wrongCount: number}): JSX.Element{

  return(
    <section className="language-container" >
      {languages.map((lan, index) => {

        const className: string = clsx("chip",{
          lost: index - 1 < wrongCount - 1
        })

        return (
          <span className={className} key={lan.id} style={{backgroundColor: lan.bg, color: lan.color}}>
            {lan.id}
          </span>
        )
      })}
    </section>
  )
}