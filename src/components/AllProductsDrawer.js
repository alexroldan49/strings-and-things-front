import React, { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Category } from '@mui/icons-material';


function AllProductsDrawer({ filterItems, brand, setBrand, category, products}){


  const mappedBrands = products.map(prod =>{
      return prod.brand
  })
  
  const uniqueBrands = [...new Set(mappedBrands)]


  const handleChange = (e) => {
    setBrand(e.target.value)
    filterItems(e)
    console.log(brand)
  };



  const mappedOptions = uniqueBrands.map(brand =>{
    return <FormControlLabel value={brand} control={<Radio />} label={brand} />
  })

    return (
      <div  className="left-drawer" >
        <div className="filter-sort" >
          <FormControl component="fieldset">
            <FormLabel component="legend">Filter by Brand</FormLabel>
              <RadioGroup
                aria-label="gender"
                name="uncontrolled-radio-buttons-group"
                value={brand ? brand : ""}
                onClick={handleChange}
              >
              <FormControlLabel value={""} control={<Radio />} label="All" />
             {mappedOptions}
            </RadioGroup>
          </FormControl>
        </div>
      </div>
    );
  }

  export default AllProductsDrawer