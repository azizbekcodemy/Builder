import { Box, Typography, Grid, Container, Link } from '@mui/material'
import React from 'react'
import Meetmap from '../../../assets/meetmap'
import { RiTwitterFill } from "react-icons/ri";
import { GrFacebookOption } from "react-icons/gr";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Fade from 'react-reveal/Fade';
import "./style.css"

function Meet() {
  return (
    <Box sx={{ mb: "5%" }}>
      <Container>

        <Box justifyContent='center' textAlign='center' padding='3% 0'>
          <Typography sx={{ mt: "0%", fontSize: "18px", fontWeight: "700", color: "#F0B430" }}>
            Our Team
          </Typography>
          <Typography sx={{ mt: "0%", fontSize: { lg: "50px", md: "50px ", sm: "50px", xs: "30px" }, fontWeight: "700", color: "#030F27" }}>
            Meet Our Engineer
          </Typography>
        </Box>
        <Box>
          <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
            {Meetmap.map((v) => (
              <Grid item lg={3} md={3} sm={6} xs={12} >
                <Fade bottom>
                  <Box className="hover" data-wow-delay="0.1s">
                    <Typography sx={{
                      position: "relative",
                      marginBottom: "30px",
                      overflow: "hidden"
                    }}>
                      <Box sx={{ position: "relative" }}>
                        <img src={v.rasm} alt="Team Image" width={"100%"} style={{ verticalAlign: "middle", borderStyle: "none" }} />
                      </Box>
                      <Box className="text">
                        <Typography variant='h5' className="h2">{v.name}</Typography>
                        <Typography className='p'> {v.last}</Typography>
                      </Box>
                      <Box className="icon">
                        <Link className="link" href=""><RiTwitterFill /></Link>
                        <Link className="link1" href=""><GrFacebookOption /></Link>
                        <Link className="link2" href=""><FaLinkedinIn /></Link>
                        <Link className="link3" href=""><AiOutlineInstagram /></Link>
                      </Box>
                    </Typography>
                  </Box>
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Box>

      </Container>

    </Box>
  )
}

export default Meet

