import './Sidebar.css';
import { Paper, Button, Grid } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <>
      <Paper elevation={0} className="container">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Button component={Link} to="/" fullWidth variant="text">
              Blogs
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              component={Link}
              to="/post"
              fullWidth
              variant="contained"
              endIcon={<SendIcon />}
            >
              New Post
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};
export default Sidebar;
