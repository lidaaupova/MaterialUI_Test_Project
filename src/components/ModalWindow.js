import { useState } from 'react';

import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Button} from '@mui/material';

const ModalWindow = () => {

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  }

  const handleClickOpen = () => {
    setOpen(true);
  }

  return (
    <>
      <Button color='inherit' variant='outline' onClick={handleClickOpen}>Log in</Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby='form-fialog-title'>
        <DialogTitle id='form-fialog-title'>Log in</DialogTitle>
        <DialogContent>
          <DialogContentText>Log in to see videos</DialogContentText>
          <TextField 
            autoFocus
            margin="dense"
            id='name'
            label="Email Address"
            type='email'
            fullWidth
          />
          <TextField
            margin="dense"
            id='password'
            label="Passwpord"
            type='password'
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default ModalWindow;