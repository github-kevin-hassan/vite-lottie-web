import { Modal } from '@mui/material'
import { Box } from '@mui/system'
import lottie, { AnimationItem } from 'lottie-web'
import { useEffect, useRef, useState } from 'react'
import successAnimationFile from '../../assets/lotties/success.json'
import './CustomModal.css'

export default function CustomModal({onClose, open, children} : {onClose: () => void, open: boolean, children: JSX.Element}) {
    const [lottieItem, setLottieItem] = useState<AnimationItem>()
    const lottieContainerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        console.log('called')
        if(!lottieContainerRef.current) return
        console.log('here')
        setLottieItem(lottie.loadAnimation({
            loop: false,
            container: lottieContainerRef.current,
            renderer: 'svg',
            autoplay: false,
            animationData: successAnimationFile,
        }))
  
        return () => {
            lottieItem?.destroy()
        }
    }, [lottieContainerRef.current])

    useEffect(() => {
        if(!lottieItem) return
        open ? lottieItem?.play() : lottieItem?.stop()
    }, [lottieItem, open])

    return (
        <Modal
            keepMounted
            open={open}
            onClose={onClose}
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
        >        
            <Box className="modal-container">
                <div className="modal-lottie" ref={lottieContainerRef}/>
                {children}
            </Box>
        </Modal>
    )
}
