import { Box, Button, Container, Grid, Typography, Link } from '@mui/material'
import Rasm from "../Home/Rasm/Rasm" ;
import Sonya from '../Home/Sonya/Sonya';
import Ask from '../Home/Ask';
function About() {
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
                                        About Us
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Box sx={{
                                marginBottom:"20px",
                                display:"flex",
                                justifyContent:"center"
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
                                <Grid item xl={2} lg={2} md={3} sm={5} xs={7} sx={{ display: "flex", marginLeft: { xs: "10%", sm: "15%", md: "0%" },width:"100%" }}>
                                    <Link sx={{
                                        position: "relative",
                                        padding: "0 12px",
                                        fontSize: {xl:"22px",lg:"22px",md:"22px",sm:"22px",xs:"18px"},
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
                                        paddingTop: {xl:"3%",lg:"3%",md:"3%",sm:"3%",xs:"2%"}
                                    }}>
                                        /
                                    </Typography>
                                    <Link sx={{
                                        position: "relative",
                                        padding: "0 12px",
                                        fontSize: {xl:"22px",lg:"22px",md:"22px",sm:"22px",xs:"18px"},
                                        color: "#030f27",
                                        textDecoration: "none",
                                        "&:hover": {
                                            color: "#fff"
                                        }
                                    }}>
                                        About Us
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box>
                <Rasm />
                <Sonya />
                <Ask />
            </Box>
        </Box>
    )
}
export default About;