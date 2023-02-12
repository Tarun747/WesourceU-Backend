import * as React from 'react';
import {
  Divider,
  Button,
  Typography,
  CardMedia,
  CardContent,
  Card,
  CardActions,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
export default function BlogCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="http://www.themezaa.com/html/pofo/images/blog-img23.jpg"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          25 APRIL 2017 | BY JESSICA HART
        </Typography>

        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.primary" component="div">
          Published <VisibilityIcon fontSize="small" />
        </Typography>
        <Divider />
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Edit</Button>
        <Button variant="contained" size="small" color="info">
          View
        </Button>
        <Button
          startIcon={<DeleteIcon fontSize="small" />}
          variant="outlined"
          color="error"
          size="small"
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
