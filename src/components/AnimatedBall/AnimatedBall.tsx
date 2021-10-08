import lottie from 'lottie-web';
import movingBallAnimation from '../../assets/lotties/movingBall.json';
import { AnimationItem } from 'lottie-web';
import { useRef, useState, useEffect } from 'react'
import './AnimatedBall.css';

export default function AnimatedBall() {
    const lottieContainerRef = useRef<HTMLDivElement>(null);
    const [lottieItem, setLottieItem] = useState<AnimationItem>();
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLoopChecked, setLoopChecked] = useState(false);
    const [isReversed, setReversed] = useState(false);
  
    useEffect(() => {
        if(!lottieContainerRef.current) return
        setLottieItem(lottie.loadAnimation({
            loop: isLoopChecked,
            container: lottieContainerRef.current,
            renderer: 'svg',
            autoplay: false,
            animationData: movingBallAnimation,
        }))
    
        return () => {
            lottieItem?.destroy()
        }
      }, [])
    
      useEffect(() => {
        if(!lottieItem) return;
        const onComplete = () => {
          setIsPlaying(false)
        }
        lottieItem.addEventListener('complete', onComplete)
        return () =>{
          lottieItem.removeEventListener('complete', onComplete)
        }
      }, [lottieItem])
    
      useEffect(() => {
        lottieItem?.setDirection(isReversed ? -1 : 1)
      }, [isReversed])
    
      useEffect(() => {
        isPlaying ? lottieItem?.play() : lottieItem?.pause()
      }, [isPlaying])
    
      const onReverse = () => {
        setReversed(!isReversed) 
      }
      const togglePlay = () => {
        setIsPlaying(!isPlaying)
      }
      const onReset = () => {
        lottieItem?.stop()
        setReversed(false)
        setIsPlaying(false)
      }
      const onLoop = () => {
        setLoopChecked(!isLoopChecked)
      }
    
      useEffect(() => {
        if(!lottieItem) return
        lottieItem.loop = isLoopChecked
      }, [isLoopChecked])

    return (
        <>
        <div id="ball-lottie" ref={lottieContainerRef} />
        <div className="lottie-button-action">
            <button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
            <button onClick={onReset}>Reset</button>
            <label>Reversed</label><input type="checkbox" defaultChecked={false} onChange={onReverse} />
            <label>Loop</label><input type="checkbox" defaultChecked={false} onChange={onLoop} />
        </div>
        </>
    )
}
