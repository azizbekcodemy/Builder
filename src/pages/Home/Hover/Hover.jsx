import { Box } from '@mui/system';
import { Grid, Typography } from "@mui/material";
import Fade from 'react-reveal/Fade';
import { Sonya2 } from "../../../assets/Home/Sonya2/Sonya2";
import { TfiPlus } from "react-icons/tfi"
function Hover() {
    return (
        <Box>
            <Box sx={{
                padding: "45px 0 15px 0",
                width: "100%"
            }}>
                <Box sx={{
                    width: "100%",
                    marginBottom: "45px",
                    textAlign: "center"
                }}>
                    <Typography sx={{
                        fontSize: "18px",
                        color: "#fdbe33",
                        fontWeight: "600",
                        marginBottom: "5px"
                    }}>
                        Our Services
                    </Typography>
                    <Typography sx={{
                        color: "#030f27",
                        fontSize: "50px",
                        fontWeight: "700"
                    }}>
                        We Provide Services
                    </Typography>
                </Box>
                <Box>
                    <Box sx={{
                        flexGrow: 1,
                        padding: { xl: "0px 128px", lg: "0px 128px", md: "0px 46px", sm: "0px 38px", xs: "0px 15px" }
                    }}>
                        <Grid container spacing={{ xs: 0, sm: 4, md: 4, lg: 4, xl: 4, }} >
                            {Sonya2.map((val3) => (
                                <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                                    <Fade bottom>
                                        <Box sx={{
                                            textAlign: "center",
                                            marginBottom: "30px",
                                            color: "#030f27",
                                            "&:hover": {
                                                opacity: "1",
                                                color: "#fff",
                                            }
                                        }}>
                                            <Box sx={{
                                                position: "relative",
                                            }}>
                                                <Typography sx={{
                                                    position: "absolute",
                                                    background: "rgba(3, 15, 39, .7)",
                                                    transition: ".5s",
                                                    padding: "30px",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    Height: "100%",
                                                    width: "100%",
                                                    minHeight: "calc(100% - 60px)",
                                                    fontSize: "17px",
                                                    fontWeight: "500",
                                                    fontFamily: "'Poppins', sans-serif",
                                                    letterSpacing: "0.5px",
                                                    opacity: "0",
                                                    "&:hover": {
                                                        opacity: "1"
                                                    }
                                                }}>
                                                    {val3.SonLor}
                                                </Typography>
                                                <Typography>
                                                    <img src={val3.SonImg} alt="" width={"100%"} />
                                                </Typography>
                                                <Box >
                                                    <Box sx={{
                                                        display: "flex",
                                                        alignItems: "center",
                                                        height: "60px",
                                                        background: "#030f27",
                                                    }}>
                                                        <Typography sx={{
                                                            padding: "0 15px 0 25px",
                                                            fontSize: "20px",
                                                            fontWeight: "700",
                                                            color: "#fdbe33",
                                                            textAlign: "left",
                                                            width: "calc(100% - 60px)"
                                                        }}>
                                                            {val3.SonYoz}
                                                        </Typography>
                                                        <Typography sx={{
                                                            background: "#fdbe33",
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                            fontSize: "30px",
                                                            transition: ".3s",
                                                            padding: "3px 0 0 3px",
                                                            cursor: "pointer",
                                                            lineHeight: "60px",
                                                            width: "60px",
                                                            height: "100%",
                                                            float: "right",
                                                        }}>
                                                            <TfiPlus />
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Fade>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
export default Hover;