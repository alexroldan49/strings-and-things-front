import React, { useState } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

function AddressOption({currentUser, address, setAddress}){
    const [open, setOpen] = React.useState(false);

    const handleChange = (event) => {
        setAddress(event.target.value);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };

    const mappedAddresses = currentUser.addresses.map(address=>{
        return(<MenuItem value={`${address.address} ${address.apt} ${address.city} ${address.state} ${address.zipcode} `}>{`${address.address} ${address.apt} ${address.city} ${address.state} ${address.zipcode} `}</MenuItem>)
    })

    
    return(
        <>
      <FormControl sx={{ m: 1, minWidth: 250 }}>
        <InputLabel id="demo-controlled-open-select-label">Select your Address</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={address}
          label="Select your Address"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {mappedAddresses}
        </Select>
      </FormControl>
        </>
    )
}
export default AddressOption