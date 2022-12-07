import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Button from '@mui/material/Button';
import About from "../../../assets/img/about.jpg";
import Fade from 'react-reveal/Fade';

function Rasm() {
    return (
        <Box>
            <Fade bottom>
                <Box sx={{ width: '100%', padding: "45px 0px", marginTop: "45px" }}>
                    <Grid container Spacing={0} sx={{
                        padding: { xl: "0px 128px", lg: "0px 128px", md: "0px 46px", sm: "0px 38px", xs: "0px 15px" }
                    }}>
                        <Grid item xs={12} sm={6} md={5} lg={5} xl={5}>
                            <Box sx={{
                                width: "100%",
                                height: "100%"
                            }}>
                                <Box sx={{
                                    width: { xl: "96%", xs: "100%" },
                                    height: { xl: "100%", lg: "100%", md: "96%", sm: "56%" },
                                    marginTop: { xl: "0%", lg: "0%", md: "0%", sm: "39%", xs: "0%" },
                                    marginBottom: { xl: "0%", lg: "0%", md: "0%", sm: "0%", xs: "25px" }
                                }}>
                                    <img src={About} alt="" width={"100%"} height={"100%"} />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={7} lg={7} xl={7}>
                            <Box sx={{
                                marginLeft: { xl: "15px", lg: "15px", md: "15px", sm: "15px", xs: "0px" },
                                marginTop: { xl: "60px", md: "-20px" }
                            }}>
                                <Box sx={{
                                    marginBottom: "30px",
                                }}>
                                    <Typography sx={{
                                        color: "#fdbe33",
                                        fontSize: "18px",
                                        fontWeight: "600",
                                        marginBottom: "5px",
                                        fontFamily: "'Poppins', sans-serif"
                                    }}>
                                        Welcome to Builderz
                                    </Typography>
                                    <Typography sx={{
                                        color: "#030f27",
                                        fontSize: "50px",
                                        fontWeight: "700",
                                        lineHeight: "1.2",
                                        fontFamily: "'Poppins', sans-serif"
                                    }}>
                                        25 Years Experience
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography sx={{
                                        fontSize: "17px",
                                        color: "#666666",
                                        fontWeight: "400",
                                        fontFamily: "'Poppins', sans-serif",
                                        width: "98%",
                                        marginBottom: "16px",
                                        letterSpacing: "0.39px"
                                    }}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Phasellus nec pretium mi. Curabitur facilisis ornare velit
                                        non vulputate. Aliquam metus tortor, auctor id gravida
                                        condimentum, viverra quis sem.
                                    </Typography>
                                    <Typography sx={{
                                        fontSize: "17px",
                                        color: "#666666",
                                        fontWeight: "400",
                                        fontFamily: "'Poppins', sans-serif",
                                        marginBottom: "16px",
                                        width: { xl: "98%", lg: "98%", md: "98%", sm: "100%" },
                                        letterSpacing: "0.3px"
                                    }}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Phasellus nec pretium mi. Curabitur facilisis ornare velit
                                        non vulputate. Aliquam metus tortor, auctor id gravida condimentum,
                                        viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus.
                                        Aenean consectetur convallis porttitor. Aliquam interdum at lacus non blandit.
                                    </Typography>
                                    <Button sx={{
                                        marginTop: "15px",
                                        padding: "14px 30px",
                                        fontWeight: "500",
                                        fontFamily: "'Poppins', sans-serif",
                                        color: "#030f27",
                                        background: "#fdbe33",
                                        borderRadius: "0px",
                                        transition: ".3s",
                                        fontSize: "16px",
                                        letterSpacing: "0.5px",
                                        textTransform:"none",
                                        "&:hover": {
                                            color: "#fdbe33",
                                            background: "#030f27"
                                        }
                                    }}>
                                        Learn More
                                    </Button>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Fade>
        </Box>
    )
}
export default Rasm;