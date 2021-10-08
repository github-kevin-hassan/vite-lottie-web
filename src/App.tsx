import { Button, Modal, Typography } from '@mui/material'
import { useState } from 'react'
import AnimatedButton from './components/AnimatedButton/AnimatedButton'
import CustomModal from './components/CustomModal/CustomModal';
import './App.css';

function App() {
  const [open, setOpen] = useState(false);
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
      <div className="button-group">
        <AnimatedButton label={'Button click animation'} />
        <Button variant="contained" onClick={handleOpen}>Button modal</Button>
      </div>
    </>
  )
}

export default App
