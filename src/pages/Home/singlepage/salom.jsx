import React from "react"
import { Box, Button, Container, Grid, Typography, Link } from '@mui/material'
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import "./index.css";
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
                                1
                            </TabPanel>
                            <TabPanel value="2">
                                2
                                </TabPanel>
                            <TabPanel value="3">
                            </TabPanel>
                            <TabPanel value="4">
                                4
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