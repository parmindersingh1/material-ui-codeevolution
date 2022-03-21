import { Box, TextField, MenuItem } from "@mui/material";
import React, { useState } from "react";

// Box is like div
export const MuiSelect = () => {
//   const [country, setCountry] = useState("");
  const [countries, setCountries] = useState<string[]>([]);
// console.log("country: ", country);
console.log("countries ", countries);
//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setCountry(event.target.value as string);
//   };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCountries(typeof value === 'string' ? value.split(',') : value);
  };

  return (
    <Box width="250px">
      <TextField
        label="Select country"
        select
        // value={country}
        value={countries}
        onChange={handleChange}
        fullWidth
        SelectProps={{
            multiple: true
        }}
        size="small"
        color="secondary"
        helperText="Please select your country"
        error
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="AU">Australia</MenuItem>
      </TextField>
    </Box>
  );
};
