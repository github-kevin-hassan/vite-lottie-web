import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import animationFile from './animation.json'
import './App.css'

function App() {
  const lottieContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!lottieContainerRef.current) return
    const lottieItem = lottie.loadAnimation({
      container: lottieContainerRef.current,
      renderer: 'svg',
      autoplay: false,
      animationData: animationFile,
    });
    const mouseoverHandler = () => {
      lottieItem.playDirection
      lottieItem.play()
    }

    const mouseoutHandler = () => {
      lottieItem.pause()
    }

    lottieContainerRef.current?.addEventListener("mouseover", mouseoverHandler)
    lottieContainerRef.current?.addEventListener("mouseout", mouseoutHandler)
    return () => {
      lottieContainerRef.current?.removeEventListener("mouseover", mouseoverHandler)
      lottieContainerRef.current?.removeEventListener("mouseout", mouseoutHandler)
      lottie.destroy()
    }
  }, []);

  return (
    <>
      <h1>Test Lottie</h1>
      <div id="lottie-container" ref={lottieContainerRef}/>
    </>
  )
}

export default App
