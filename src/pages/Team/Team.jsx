import { Box, Button, Container, Grid, Typography, Link } from '@mui/material'
import Meet from '../Home/Meet';
import Meetmap from '../../assets/meetmap/index'
import { RiTwitterFill } from "react-icons/ri";
import { GrFacebookOption } from "react-icons/gr";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

import Fade from 'react-reveal/Fade';
function Team() {
    return (
        <Box>
            <Box>
                <Grid container sx={{ marginBottom: "20px" }}>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                        <Box sx={{
                            position: "relative",
                            marginBottom: "45px",
                            padding: "81px 0",
                            textAlign: "center",
                            background: "#fdbe33",
                            width: "100%"
                        }}>
                            <Grid container justifyContent="center">
                                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                                    <Typography sx={{
                                        position: "relative",
                                        color: "#030f27",
                                        fontSize: "55px",
                                        fontWeight: 800,
                                    }}>
                                        Our Team
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Box sx={{
                                marginBottom: "18px",
                                display: "flex",
                                justifyContent: "center"
                            }}>
                                <Typography sx={{
                                    width: "100px",
                                    height: "2.5px",
                                    bottom: 0,
                                    background: "#030f27",
                                    fontWeight: 700,
                                }}>
                                </Typography>
                            </Box>
                            <Grid container justifyContent="center">
                                <Grid item xl={2} lg={2} md={3} sm={5} xs={7} sx={{ display: "flex", marginLeft: { xs: "10%", sm: "15%", md: "0%" } }}>
                                    <Link sx={{
                                        position: "relative",
                                        padding: "0 12px",
                                        fontSize: { xl: "22px", lg: "22px", md: "22px", sm: "22px", xs: "18px" },
                                        color: "#030f27",
                                        textDecoration: "none",
                                        "&:hover": {
                                            color: "#fff"
                                        }
                                    }}>
                                        Home

                                    </Link>
                                    <Typography sx={{
                                        marginTop: "-3%",
                                        textAlign: "center",
                                        color: "#121518",
                                        fontSize: "25px",
                                        paddingTop: { xl: "3%", lg: "3%", md: "3%", sm: "3%", xs: "2%" }
                                    }}>
                                        /
                                    </Typography>
                                    <Link sx={{
                                        position: "relative",
                                        fontSize: { xl: "22px", lg: "22px", md: "22px", sm: "22px", xs: "18px" },
                                        color: "#030f27",
                                        textDecoration: "none",
                                        paddingLeft: "10px",
                                        "&:hover": {
                                            color: "#fff"
                                        }
                                    }}>
                                        Our Team
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
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
        </Box>
    )
}
export default Team;