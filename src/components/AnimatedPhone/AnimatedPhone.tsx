import lottie from 'lottie-web';
import phoneAnimation from '../../assets/lotties/phone.json';
import { AnimationItem } from 'lottie-web';
import { useRef, useState, useEffect } from 'react'
import './AnimatedPhone.css';

export default function AnimatedPhone() {
    const lottieContainerRef = useRef<HTMLDivElement>(null);
    const [lottieItem, setLottieItem] = useState<AnimationItem>();
    
    useEffect(() => {
        if(!lottieContainerRef.current) return
        setLottieItem(lottie.loadAnimation({
            loop: true,
            container: lottieContainerRef.current,
            renderer: 'svg',
            autoplay: false,
            animationData: phoneAnimation,
        }))    
        return () => {
            lottieItem?.destroy()
        }
        }, [])

        useEffect(() => {
            if(!lottieItem) return 
            const toggleAnimation = () => lottieItem.togglePause()

            lottieContainerRef.current?.addEventListener('mouseenter', toggleAnimation)
            lottieContainerRef.current?.addEventListener('mouseleave', toggleAnimation)
        
            return () => {
                lottieContainerRef.current?.removeEventListener('mouseenter', toggleAnimation)
                lottieContainerRef.current?.removeEventListener('mouseleave', toggleAnimation)
            }    
        }, [lottieItem])

    return (
        <div id="phone-lottie" ref={lottieContainerRef} />
    )
}
