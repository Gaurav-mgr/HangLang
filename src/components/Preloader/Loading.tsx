import {useState, useEffect} from "react"
import type {JSX} from "react"

import Preloader from "./Preloader.tsx"

export default function Loading(): JSX.Element{

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const handlePageLoad: () => void =
      () => {
        setTimeout(() => {
          setIsLoading(false)
        },1300)
      }
      handlePageLoad()
    },[])

  return(
    <Preloader isLoading={isLoading} />
  )
}