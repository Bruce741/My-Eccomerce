import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { Link } from 'react-router-dom';

export default function BasicSelect() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Tipo</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Tipo"
          onChange={handleChange}
        >
          <MenuItem value='Trampa'><Link to="CategoryPage/trampa">Trampa</Link></MenuItem>
          <MenuItem value='Magia'><Link to="CategoryPage/magia">Magia</Link></MenuItem>
          <MenuItem value="Monstruo"><Link to="CategoryPage/monstruo">Monstruo</Link></MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}