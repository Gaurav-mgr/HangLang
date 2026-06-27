import type {JSX} from "react"
import "./Preloader.css"
import logo from "/src/assets/icon.png"

export default function Preloader({isLoading}: {isLoading: boolean}): JSX.Element{
  return(
    <div className={isLoading ? "preloader-container" : "preloader-container slide-up"}>
      <div className="text">
        <img src={logo}/>
        <h1>HangLang</h1>
      </div>
    </div>
  )
}