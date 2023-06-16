import { TextField } from '@mui/material';

function Datum() {
  return (
    <TextField
      style={{
        display: 'flex',
        boxSizing: 'border-box',
        margin: '5px',
      }}
      type="date"
      id="Datum"
      label="Datum"
      variant="outlined"
    />
  );
}

export default Datum;