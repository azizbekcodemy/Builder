import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Button from '@mui/material/Button';
import About from "../../../assets/img/about.jpg";
import Fade from 'react-reveal/Fade';
import { Sonya2 } from "../../../assets/Home/Sonya2/Sonya2";
import { Sonya3 } from "../../../assets/Home/Sonya2/Sonya2";
import "./Sonya.css"
import CountUp from 'react-countup';
import Icon1 from '../../../assets/img/Icon.png'
import Icon2 from '../../../assets/img/Icon2.png'
import Icon3 from '../../../assets/img/Icon33.png'
import Icon4 from '../../../assets/img/Icon4.png'
function Sonya() {
    return (
        <Box sx={{ width: "100%",marginBottom:"50px" }}>
            <Box>
                <Box>
                    <Grid container Spacing={1}>
                        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                            <Fade left>
                                <Box sx={{
                                    display: "flex",
                                    background: "#030f27",
                                    color: "#fdbe33",
                                    padding: "55px 15px 60px 15px"
                                }}>
                                    <Box sx={{
                                        display: "flex",
                                        padding: "0px 14px",
                                        alignItems: "center"
                                    }}>
                                        <Box sx={{
                                            margin: { xl: "10px 15px 0 0px", lg: "10px 15px 0 0px", md: "10px 15px 0 0px", sm: "-13px 0px 0 0px",xs: "-14px 0px 0 0px" }
                                        }}>
                                            <img src={Icon1} alt="" width={"60px"} height={"65px"} />
                                        </Box>
                                        <Box sx={{
                                            paddingLeft: { xl: "0px", lg: "0px", md: "0px", sm: "8px",xs: "10px"}
                                        }}>
                                            <Typography sx={{
                                                fontSize: "35px",
                                                fontWeight: "700",
                                            }}>
                                                <CountUp end={109} duration={1.5} />
                                            </Typography>
                                            <Typography sx={{
                                                fontSize: "16px",
                                                fontWeight: "600",
                                                width: { xl: "100%", lg: "100%", md: "70%" }
                                            }}>
                                                EXPERT WORKERS
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <Box sx={{
                                        display: "flex",
                                        padding: { xl: "0px 14px", lg: "0px 14px", md: "0px 14px", sm: "0px", xs: "0px" },
                                        alignItems: "center",
                                        paddingLeft: {xl:"15%", lg: "15%", md: "0%" },
                                    }}>
                                        <Box sx={{
                                            margin: { xl: "10px 15px 0 0px", lg: "10px 15px 0 0px", md: "10px 15px 0 0px", sm: "-13px 0px 0 0px",xs: "-14px 0px 0 0px" }
                                        }}>
                                            <img src={Icon2} alt="" width={"60px"} height={"65px"} />
                                        </Box>
                                        <Box sx={{ paddingLeft: { xl: "0px", lg: "0px", md: "0px", sm: "8px",xs: "10px" } }}>
                                            <Typography sx={{
                                                fontSize: "35px",
                                                fontWeight: "700",
                                            }}>
                                                <CountUp end={485} duration={1.5} />
                                            </Typography>
                                            <Typography sx={{
                                                fontSize: "16px",
                                                fontWeight: "600",
                                            }}>
                                                HAPPY CLIENTS
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Fade>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                            <Fade right>
                                <Box sx={{
                                    display: "flex",
                                    background: "#fdbe33",
                                    color: "#030f27",
                                    padding: { xl: "55px 15px 60px 15px", lg: "55px 15px 60px 15px", md: "55px 15px 60px 15px", sm: "55px 0px 60px 30px", xs: "55px 15px 60px 30px" }
                                }}>
                                    <Box sx={{
                                        display: "flex",
                                        padding: { xl: "0px 14px", lg: "0px 14px", md: "0px 14px", sm: "0px", xs: "0px" },
                                        alignItems: "center"
                                    }}>
                                        <Box sx={{
                                            margin: { xl: "10px 15px 0 0px", lg: "10px 15px 0 0px", md: "10px 15px 0 0px", sm: "-13px 0px 0 0px",xs: "-14px 0px 0 0px" }
                                        }}>
                                            <img src={Icon3} alt="" width={"60px"} height={"65px"} />
                                        </Box>
                                        <Box sx={{
                                            paddingLeft: { xl: "0px", lg: "0px", md: "0px", sm: "8px",xs: "10px" }
                                        }}>
                                            <Typography sx={{
                                                fontSize: "35px",
                                                fontWeight: "700",
                                            }}>
                                                <CountUp end={789} duration={1.5} />
                                            </Typography>
                                            <Typography sx={{
                                                fontSize: "16px",
                                                fontWeight: "600",
                                            }}>
                                                COMPLETED PROJECTS
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <Box sx={{
                                        display: "flex",
                                        padding: "0px 14px",
                                        alignItems: "center",
                                        paddingLeft: { lg: "9.5%", md: "0%" },
                                    }}>
                                        <Box sx={{
                                            margin: { xl: "10px 15px 0 0px", lg: "10px 15px 0 0px", md: "10px 15px 0 0px", sm: "-13px 0px 0 0px",xs: "-14px 0px 0 0px" }
                                        }}>
                                            <img src={Icon4} alt="" width={"60px"} height={"65px"} />
                                        </Box>
                                        <Box sx={{
                                            paddingLeft: { xl: "0px", lg: "0px", md: "0px", sm: "8px",xs: "10px" }
                                        }}>
                                            <Typography sx={{
                                                fontSize: "35px",
                                                fontWeight: "700",
                                            }}>
                                                <CountUp end={890} duration={1.5} />
                                            </Typography>
                                            <Typography sx={{
                                                fontSize: "16px",
                                                fontWeight: "600",
                                            }}>
                                                RUNNING PROJECTS
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Fade>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box >
    )
}
export default Sonya;