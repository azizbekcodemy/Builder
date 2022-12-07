import React from 'react';
import Router from '../../routes/routes';
import ResponsiveAppBar from '../../components/Navbar/Navbar';
import { Box, Typography } from '@mui/material'
import Builder from '../../components/Builder/builder';
import Futter from '../../components/Futter/Futter';
import Strelka from '../../components/Sitrel/Strelka';
export default () => (
  <div>
    <Box sx={{
      background: "#dddddd",
      maxWidth: "100%",
      padding: { lg: "0px 35px",xl:"0px 76.5px" ,md: "0px",sm:"0px",xs:"0px" },
      height: "100%",
    }}>
      <Box sx={{
        width: "100%",
        background: "#ffffff"
      }}>
        <Typography sx={{ background: "#fdbe33", paddingTop: "1%"  }}>
          <Box sx={{marginBottom:"1%"}}>
          <Builder />
          </Box>
          <ResponsiveAppBar />
        </Typography>
        <Router />
        <Futter/>
      </Box>
    </Box>
    <Strelka />
  </div>
);