import { Button, Typography } from '@mui/material'
import { useState } from 'react'
import AnimatedButton from './components/AnimatedButton/AnimatedButton'
import CustomModal from './components/CustomModal/CustomModal';
import './App.css';
import AnimatedBall from './components/AnimatedBall/AnimatedBall';
import Spacer from './components/Spacer/Spacer';
import AnimatedPhone from './components/AnimatedPhone/AnimatedPhone';

function App() {
  const [open, setOpen] = useState(false);
  const [animationHeight, setAnimationHeight] = useState(200)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <>
      <CustomModal
        open={open}
        onClose={handleClose}
      >
        <>
        <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
          Successfuly send
        </Typography>
        <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
          Check the lottie above.
        </Typography>
        </>
      </CustomModal>

      <h1>Test Lottie</h1>
      <label>Animation Height</label><input type="number" defaultValue={animationHeight} onChange={(event) => setAnimationHeight(Number(event.target.value))} />
      <h2>Lottie animation interaction</h2>
      <div className="lottie-container" style={{height: `${animationHeight}px`}}>
        <div>
          <h3>Ball collision</h3>
          <AnimatedBall />
        </div>
        <div>
          <h3>Phone animation on hover</h3>
          <AnimatedPhone />
        </div>
      </div>
      <Spacer height={100} />
      <h2>Some Lotties example</h2>
      <div className="button-group">
        <AnimatedButton label={'Button click animation'} />
        <Button variant="contained" onClick={handleOpen}>Button modal</Button>
      </div>
    </>
  )
}

export default App
