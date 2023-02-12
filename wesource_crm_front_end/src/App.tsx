import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Grid from '@mui/material/Grid';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Post from './components/Post/Post';

function App() {
  return (
    <Router>
      <div className="App">
        <Grid container spacing={2}>
          <Grid xs={2}>
            <Sidebar />
          </Grid>
          <Grid xs={10}>
            <React.StrictMode>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/post" element={<Post />} />
              </Routes>
            </React.StrictMode>
          </Grid>
        </Grid>
      </div>
    </Router>
  );
}

export default App;
