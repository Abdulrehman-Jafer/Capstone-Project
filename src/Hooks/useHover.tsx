import React,{useState,useRef,useEffect} from 'react'


export const useHover = () => {
    const [hover,setHover]=useState(false)
    const imageRef=useRef<HTMLDivElement>(null)

    const onMouseEnter=()=>setHover(true)
    const onMouseLeave=()=>setHover(false)

    useEffect(()=>{
      imageRef.current.addEventListener("mouseenter",onMouseEnter)
      imageRef.current.addEventListener("mouseleave",onMouseLeave)

      return ()=>{
        imageRef.current.removeEventListener("mouseenter",onMouseEnter)
        imageRef.current.removeEventListener("mouseLeave",onMouseLeave)
      }
    },[hover])
  return {hover,imageRef}
}
