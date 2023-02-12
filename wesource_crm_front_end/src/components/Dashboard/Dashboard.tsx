import React from 'react';
import { Grid } from '@mui/material';
import BlogCard from './Card/BlogCard';

const Dashboard = () => {
  return (
    <div style={{ marginTop: '50px' }}>
      <Grid container spacing={0}>
        <Grid xs={4} display="flex" justifyContent="center" alignItems="center">
          <BlogCard />
        </Grid>
        <Grid xs={4} display="flex" justifyContent="center" alignItems="center">
          <BlogCard />
        </Grid>
        <Grid xs={4} display="flex" justifyContent="center" alignItems="center">
          <BlogCard />
        </Grid>
      </Grid>
    </div>
  );
};
export default Dashboard;
