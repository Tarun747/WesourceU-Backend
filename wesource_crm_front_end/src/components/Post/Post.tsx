import React from 'react';
import { Button } from '@mui/material';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const Post = () => {
  return (
    <div style={{ marginTop: '50px' }}>
      <Button variant="outlined">Upload Banner Image</Button>
      <br />
      <Autocomplete
        multiple
        id="tags-outlined"
        options={top100Films}
        getOptionLabel={(option) => option.title}
        defaultValue={[]}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            label="Select Keywords"
            placeholder="Keywords"
          />
        )}
      />
      <TextField id="outlined-basic" label="Headline" variant="outlined" />
      <br />
      <TextField id="outlined-basic" label="Title" variant="outlined" />
      <br />
      <Button variant="outlined">Upload Image</Button>
      <br />
      <TextField
        id="outlined-multiline-static"
        label="content"
        multiline
        rows={4}
      />
      <br />
      <Button variant="outlined">Upload Image</Button>
      <Button variant="outlined">Upload Image</Button>
      <br />
      <TextField id="outlined-basic" label="Second Title" variant="outlined" />
      <br />
      <TextField
        id="outlined-multiline-static"
        label="content"
        multiline
        rows={4}
      />
      <br />
      <Button variant="outlined">Upload Image</Button>
      <TextField
        id="outlined-multiline-static"
        label="content"
        multiline
        rows={4}
      />
    </div>
  );
};
const top100Films = [
  { title: 'Design', year: 1994 },
  { title: 'Beauty', year: 1972 },
];
export default Post;
