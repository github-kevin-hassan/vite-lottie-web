import { MouseEventHandler, useRef, useEffect, useState } from 'react'
import lottie, { AnimationItem } from "lottie-web";
import animationFile from '../../assets/lotties/explosion.json'
import Button from '@mui/material/Button';

import './AnimatedButton.css'

export default function AnimatedButton({ label, onClick } : {label: String, onClick?: MouseEventHandler}) {
    const lottieContainerRef = useRef<HTMLDivElement>(null)
    const [lottieItem, setLottieItem] = useState<AnimationItem>()

    useEffect(() => {
        if(!lottieContainerRef.current) return
        setLottieItem(lottie.loadAnimation({
            loop: false,
            container: lottieContainerRef.current,
            renderer: 'svg',
            autoplay: false,
            animationData: animationFile,
        }))
  
        return () => {
            lottieItem?.destroy()
        }
    }, [])

    const clickHandler = () => {
        lottieItem?.stop(); 
        lottieItem?.play()
    }

    return (
        <div className="button-container">
            <Button
                className="button"
                variant="contained" 
                onClick={(event) => {
                    clickHandler()
                    onClick && onClick(event)
                }}>{label}</Button>
            <div className="button-lottie" ref={lottieContainerRef}/>
        </div>
    )
}
