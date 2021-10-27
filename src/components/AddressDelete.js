import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal( {address, displayedAddresses, setDisplayedAddresses} ) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function filterAddresses(r){
      setDisplayedAddresses(displayedAddresses.filter(addy=>{ return addy.id !== address.id}))
  }

  function handleDelete(){
      fetch(`/addresses/${address.id}`,{
          method: "DELETE"
      }).then(r =>{
          if (r.ok){
            filterAddresses()
          }
      })
  }
  
  return (
    <div>
      <Button onClick={handleOpen}>Remove</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography color="error" id="modal-modal-title" variant="h6" component="h2">
            Delete This Address
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Are you sure you want to delete this Address?
          </Typography>
          <div>
          <Button onClick={handleClose} >Cancel</Button>
          <Button onClick={handleDelete} color="error" >Yes</Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}