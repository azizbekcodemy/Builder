import React from "react"
import { Box, Button, Container, Grid, Typography, Link } from '@mui/material'
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import "./Project.css";
import { Project1 } from "../../assets/Project/Project";
import { Project2 } from "../../assets/Project/Project";
import { Project3 } from "../../assets/Project/Project";
import { Project4 } from "../../assets/Project/Project";
import Fade from 'react-reveal/Fade';
import { TfiPlus } from "react-icons/tfi"
import { width } from "@mui/system";

function Project() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Box>
            <Box>
                <Grid container sx={{ marginBottom: "20px" }}>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                        <Box sx={{
                            position: "relative",
                            marginBottom: "65px",
                            padding: "80px 0",
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
                                        Our Projects
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Box sx={{
                                marginBottom:"18px",
                                display:"flex",
                                justifyContent:"center"
                            }}>
                                <Typography sx={{
                                    width: "100px",
                                    height: "2px",
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
                                        Our Projects
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box>
                <Box>
                    <Box sx={{
                        width: "100%",
                        marginBottom: "20px",
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
                </Box>
                <Box id="ProjectZZZ">
                    <Box sx={{ width: '100%', typography: 'body1' }}>
                        <TabContext value={value}>
                            <Box sx={{
                                display: "flex",
                                justifyContent: "center"
                            }}>
                                <TabList onChange={handleChange} aria-label="lab API tabs example">
                                    <Tab label="ALL" value="1" sx={{
                                        minWidth: "53px",
                                        minHeight: "37px",
                                        margin: "5px",
                                        padding: "0px",
                                        background: "#fdbe33",
                                        color: "#030f27",
                                        fontSize: "14px",
                                        fontWeight: "500",
                                        "&:hover": {
                                            background: "#030f27",
                                            color: "#fdbe33"
                                        }
                                    }} />
                                    <Tab label="COMPLETE" value="2" sx={{
                                        minWidth: "102px",
                                        minHeight: "37px",
                                        margin: "5px",
                                        padding: "0px",
                                        background: "#fdbe33",
                                        color: "#030f27",
                                        fontSize: "14px",
                                        fontWeight: "500",
                                        "&:hover": {
                                            background: "#030f27",
                                            color: "#fdbe33"
                                        }
                                    }} />
                                    <Tab label="RUNNING" value="3" sx={{
                                        minWidth: "94px",
                                        minHeight: "37px",
                                        margin: "5px",
                                        padding: "0px",
                                        background: "#fdbe33",
                                        color: "#030f27",
                                        fontSize: "14px",
                                        fontWeight: "500",
                                        "&:hover": {
                                            background: "#030f27",
                                            color: "#fdbe33"
                                        }
                                    }} />
                                    <Tab label="UPCOMING" value="4" sx={{
                                        minWidth: "107px",
                                        minHeight: "37px",
                                        margin: "5px",
                                        padding: "0px",
                                        background: "#fdbe33",
                                        color: "#030f27",
                                        fontSize: "14px",
                                        fontWeight: "500",
                                        "&:hover": {
                                            background: "#030f27",
                                            color: "#fdbe33"
                                        }
                                    }} />
                                </TabList>
                            </Box>
                            <TabPanel value="1">
                                <Box sx={{
                                    padding: { xl: "0px 105px", lg: "0px 105px", md: "0px 23px", sm: "0px 15px", xs: "0px 0px" },
                                }}>
                                    <Grid container spacing={{ xs: 0, sm: 4, md: 4, lg: 4, xl: 4, }} >
                                        {Project1.map((val3) => (
                                            <Grid item xs={12} sm={6} md={4} lg={4} xl={4} sx={{
                                                marginBottom: { xl: "0px", lg: "0px", md: "0px", sm: "0px", xs: "30px" }
                                            }}>
                                                <Fade bottom>
                                                    <Box sx={{
                                                        textAlign: "center",
                                                        color: "#030f27",
                                                        background: "#ffffff",
                                                        width: "100%",
                                                        "&:hover": {
                                                            opacity: "1",
                                                            color: "#fff",
                                                            background: "#fdbe33",
                                                        },
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
                                                                Lorem ipsum dolor sit amet elit. Phasel nec pretium mi.
                                                                Curabit facilis ornare velit non. Aliqu metus tortor,
                                                                auctor id gravi condime, viverra quis sem.
                                                            </Typography>
                                                            <Typography>
                                                                <img src={val3.ProImg} alt="" width={"100%"} className="POsZZ" />
                                                            </Typography>
                                                            <Box>
                                                                <Box sx={{
                                                                    display: "flex",
                                                                    alignItems: "center",
                                                                    height: "60px",
                                                                }}>
                                                                    <Typography sx={{
                                                                        padding: "0 15px 0 25px",
                                                                        fontSize: "20px",
                                                                        fontWeight: "700",
                                                                        color: "#fdbe33",
                                                                        textAlign: "left",
                                                                        width: "calc(100% - 60px)",
                                                                        background: "#030f27",
                                                                        display: "flex",
                                                                        alignItems: "center",
                                                                        height: "100%"
                                                                    }}>
                                                                        Project Name
                                                                    </Typography>
                                                                    <Typography sx={{
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
                            </TabPanel>
                            <TabPanel value="2">
                                <Box sx={{
                                    padding: { xl: "0px 105px", lg: "0px 105px", md: "0px 23px", sm: "0px 15px", xs: "0px 0px" },
                                }}>
                                    <Grid container spacing={{ xs: 0, sm: 4, md: 4, lg: 4, xl: 4, }} >
                                        {Project2.map((val3) => (
                                            <Grid item xs={12} sm={6} md={4} lg={4} xl={4} sx={{
                                                marginBottom: { xl: "0px", lg: "0px", md: "0px", sm: "0px", xs: "30px" }
                                            }}>
                                                <Fade>
                                                    <Box sx={{
                                                        textAlign: "center",
                                                        color: "#030f27",
                                                        background: "#ffffff",
                                                        width: "100%",
                                                        "&:hover": {
                                                            opacity: "1",
                                                            color: "#fff",
                                                            background: "#fdbe33",
                                                        },
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
                                                                Lorem ipsum dolor sit amet elit. Phasel nec pretium mi.
                                                                Curabit facilis ornare velit non. Aliqu metus tortor,
                                                                auctor id gravi condime, viverra quis sem.
                                                            </Typography>
                                                            <Typography>
                                                                <img src={val3.ProImg} alt="" width={"100%"} className="POsZZ" />
                                                            </Typography>
                                                            <Box>
                                                                <Box sx={{
                                                                    display: "flex",
                                                                    alignItems: "center",
                                                                    height: "60px",
                                                                }}>
                                                                    <Typography sx={{
                                                                        padding: "0 15px 0 25px",
                                                                        fontSize: "20px",
                                                                        fontWeight: "700",
                                                                        color: "#fdbe33",
                                                                        textAlign: "left",
                                                                        width: "calc(100% - 60px)",
                                                                        background: "#030f27",
                                                                        display: "flex",
                                                                        alignItems: "center",
                                                                        height: "100%"
                                                                    }}>
                                                                        Project Name
                                                                    </Typography>
                                                                    <Typography sx={{
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
                                </TabPanel>
                            <TabPanel value="3">
                            <Box sx={{
                                    padding: { xl: "0px 105px", lg: "0px 105px", md: "0px 23px", sm: "0px 15px", xs: "0px 0px" },
                                }}>
                                    <Grid container spacing={{ xs: 0, sm: 4, md: 4, lg: 4, xl: 4, }} >
                                        {Project3.map((val3) => (
                                            <Grid item xs={12} sm={6} md={4} lg={4} xl={4} sx={{
                                                marginBottom: { xl: "0px", lg: "0px", md: "0px", sm: "0px", xs: "30px" }
                                            }}>
                                                <Fade>
                                                    <Box sx={{
                                                        textAlign: "center",
                                                        color: "#030f27",
                                                        background: "#ffffff",
                                                        width: "100%",
                                                        "&:hover": {
                                                            opacity: "1",
                                                            color: "#fff",
                                                            background: "#fdbe33",
                                                        },
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
                                                                Lorem ipsum dolor sit amet elit. Phasel nec pretium mi.
                                                                Curabit facilis ornare velit non. Aliqu metus tortor,
                                                                auctor id gravi condime, viverra quis sem.
                                                            </Typography>
                                                            <Typography>
                                                                <img src={val3.ProImg} alt="" width={"100%"} className="POsZZ" />
                                                            </Typography>
                                                            <Box>
                                                                <Box sx={{
                                                                    display: "flex",
                                                                    alignItems: "center",
                                                                    height: "60px",
                                                                }}>
                                                                    <Typography sx={{
                                                                        padding: "0 15px 0 25px",
                                                                        fontSize: "20px",
                                                                        fontWeight: "700",
                                                                        color: "#fdbe33",
                                                                        textAlign: "left",
                                                                        width: "calc(100% - 60px)",
                                                                        background: "#030f27",
                                                                        display: "flex",
                                                                        alignItems: "center",
                                                                        height: "100%"
                                                                    }}>
                                                                        Project Name
                                                                    </Typography>
                                                                    <Typography sx={{
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
                            </TabPanel>
                            <TabPanel value="4">
                            <Box sx={{
                                    padding: { xl: "0px 105px", lg: "0px 105px", md: "0px 23px", sm: "0px 15px", xs: "0px 0px" },
                                }}>
                                    <Grid container spacing={{ xs: 0, sm: 4, md: 4, lg: 4, xl: 4, }} >
                                        {Project4.map((val3) => (
                                            <Grid item xs={12} sm={6} md={4} lg={4} xl={4} sx={{
                                                marginBottom: { xl: "0px", lg: "0px", md: "0px", sm: "0px", xs: "30px" }
                                            }}>
                                                <Fade>
                                                    <Box sx={{
                                                        textAlign: "center",
                                                        color: "#030f27",
                                                        background: "#ffffff",
                                                        width: "100%",
                                                        "&:hover": {
                                                            opacity: "1",
                                                            color: "#fff",
                                                            background: "#fdbe33",
                                                        },
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
                                                                Lorem ipsum dolor sit amet elit. Phasel nec pretium mi.
                                                                Curabit facilis ornare velit non. Aliqu metus tortor,
                                                                auctor id gravi condime, viverra quis sem.
                                                            </Typography>
                                                            <Typography>
                                                                <img src={val3.ProImg} alt="" width={"100%"} className="POsZZ" />
                                                            </Typography>
                                                            <Box>
                                                                <Box sx={{
                                                                    display: "flex",
                                                                    alignItems: "center",
                                                                    height: "60px",
                                                                }}>
                                                                    <Typography sx={{
                                                                        padding: "0 15px 0 25px",
                                                                        fontSize: "20px",
                                                                        fontWeight: "700",
                                                                        color: "#fdbe33",
                                                                        textAlign: "left",
                                                                        width: "calc(100% - 60px)",
                                                                        background: "#030f27",
                                                                        display: "flex",
                                                                        alignItems: "center",
                                                                        height: "100%"
                                                                    }}>
                                                                        Project Name
                                                                    </Typography>
                                                                    <Typography sx={{
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
                            </TabPanel>
                            <Box sx={{
                                display: "flex",
                                justifyContent: "center"
                            }}>
                                <Button sx={{
                                    padding: "14px 30px",
                                    fontWeight: "500",
                                    fontFamily: "'Poppins', sans-serif",
                                    color: "#030f27",
                                    background: "#fdbe33",
                                    borderRadius: "0px",
                                    transition: ".3s",
                                    fontSize: "16px",
                                    letterSpacing: "0.5px",
                                    marginBottom: "90px",
                                    "&:hover": {
                                        color: "#fdbe33",
                                        background: "#030f27"
                                    }
                                }}>
                                    LOAD More
                                </Button>
                            </Box>
                        </TabContext>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
export default Project;