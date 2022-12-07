import { Box, Typography } from '@mui/material'
import React from 'react'
import "../Ask/style.css"
import Fade from 'react-reveal/Fade';
function Video() {
    return (
        <Fade>
            <Box id='rang' sx={{ justifyContent: "center", display: "flex" }} >

                <span class="pulse">
                    <Typography className='video' sx={{mt:"27%", ml:"38%"}}></Typography>

                </span>


            </Box>
        </Fade>
    )
}

export default Video