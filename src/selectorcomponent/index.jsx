import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectComponent({ setCategory }) {

  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
    setCategory(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 150 }}>
      <FormControl fullWidth size="small">

        <InputLabel id="category-label">Category</InputLabel>

        <Select
          labelId="category-label"
          value={value}
          label="Category"
          onChange={handleChange}
        >

          <MenuItem value="popular">Popular</MenuItem>
          <MenuItem value="top_rated">Top Rated</MenuItem>
          <MenuItem value="upcoming">Upcoming</MenuItem>
          <MenuItem value="now_playing">Now Playing</MenuItem>

        </Select>

      </FormControl>
    </Box>
  );
}