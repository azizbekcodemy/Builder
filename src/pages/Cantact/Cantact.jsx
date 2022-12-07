import React from "react"
import { Box, Button, Container, Grid, Typography, Link } from '@mui/material'
import { Contac} from "../../assets/cantact/cantact"
import { Input } from "../../assets/cantact/cantact"
import { color } from "@mui/system"
import "./style.css"


function Cantact() {
    return (
        <>
            <Box sx={{ textAlign: "center", color: "red" }} id="contact">
                <Grid container sx={{ marginBottom: "20px" }}>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                        <Box sx={{
                            position: "relative",
                            marginBottom: "45px",
                            padding: "85px 0",
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
                                        Contact Us
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
                                        fontSize: "22px",
                                        color: "#030f27",
                                        textDecoration: "none",
                                        fontWeight: 500,
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
                                        paddingTop: "1%"
                                    }}>
                                        /
                                    </Typography>
                                    <Link sx={{
                                        position: "relative",
                                        padding: "0 12px",
                                        fontSize: "22px",
                                        color: "#030f27",
                                        textDecoration: "none",
                                        fontWeight: 500,
                                        "&:hover": {
                                            color: "#fff"
                                        }
                                    }}>
                                        Contact Us
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
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
                        Get In Touch
                    </Typography>
                    <Typography sx={{
                        color: "#030f27",
                        fontSize: {xl:"50px",lg:"50px",md:"50px",sm:"50px",xs:"30px"},
                        fontWeight: "700"
                    }}>
                        For Any Query
                    </Typography>
                </Box>
                <Grid container justifyContent="center" sx={{ marginBottom: "100px" }}>
                    <Grid item xl={5} lg={5} md={5.6} sm={5.7} xs={12} sx={{ background: "#030f27", paddingTop: "20px", paddingBottom: "30px" }}>
                        {Contac.map((val) => (
                            <Box sx={{
                                position: "relative",
                                width: "100%",
                                padding: "0 30px",
                                marginTop: "10px"
                            }}>
                                <Box sx={{
                                    position: "relative",
                                    marginBottom: "20px",
                                    padding: "20px",
                                    display: "flex",
                                    flexDirection: "row",
                                    border: "1px solid rgba(256, 256, 256, .2)"
                                }}>
                                    <Typography sx={{
                                        margin: 0,
                                        color: "#fdbe33",
                                        fontSize: "20px"
                                    }}>
                                        <img src={val.icon} alt="" />
                                    </Typography>
                                    <Box sx={{
                                        position: "relative",
                                        width: "auto",
                                        paddingLeft: "20px",
                                        textAlign: "start"
                                    }}>
                                        <Typography sx={{
                                            color: "#fdbe33",
                                            fontSize: "20px",
                                            fontWeight: 600
                                        }}>
                                            {val.name}
                                        </Typography>
                                        <Typography sx={{
                                            color: "#ffffff",
                                            fontSize: "16px",
                                            margin: 0
                                        }}>
                                            {val.title}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        ))}
                    </Grid>
                    <Grid item xl={5} lg={5} md={5.6} sm={5.7} xs={12} sx={{ background: "#fdbe33", paddingTop: "10px", paddingBottom: "10px" }}>

                        <Box sx={{
                            position: "relative",
                            width: "100%",
                            padding: "0 15px",
                            marginTop: "10px"
                        }}>
                            {Input.map((val) => (
                                <Box sx={{
                                    position: "relative",
                                    padding: "9px",
                                    display: "flex",
                                }}>
                                    <input type="text" className="con_input" placeholder={val.name} style={{
                                        color: "#fff",
                                        height: "40px",
                                        borderRadius: 0,
                                        borderWidth: "1px",
                                        background: "transparent",
                                        width: "100%",
                                        padding: ".375rem .75rem",
                                        fontSize: "1rem",
                                        border: "1px solid #ced4da",
                                        borderColor:"rgba(256, 256, 256, .4)"
                                    }} />

                                </Box>
                            ))}
                            <Box className="con_inputt"  sx={{
                                 position: "relative",
                                 padding: "9px",
                                 display: "flex", 
                            }}>
                                <textarea className="con_input" placeholder="Message" style={{
                                    color: "#fff",
                                    height: "185px",
                                    borderRadius: 0,
                                    borderWidth: "1px",
                                    background: "transparent",
                                    width: "100%",
                                    padding: ".375rem .75rem",
                                    fontSize: "1rem",
                                    border: "1px solid #ced4da",
                                    borderColor:"rgba(256, 256, 256, .4)"
                                }} />
                            </Box>
                            <Typography sx={{
                                textAlign:"start",
                                paddingLeft: "9px",
                                marginTop:"10px"
                            }}>
                            <button className="btn" type="submit" style={{
                                padding: "15px 25px",
                                fontSize: "16px",
                                fontWeight: 600,
                                color: "#fdbe33",
                                background: "#030f27",
                                border: "none",
                                borderRadius: 0,
                                transition: ".3s"
                            }}>Send Message</button>
                            </Typography>

                        </Box>

                    </Grid>
                </Grid>
            </Box>
        </>
    )
}
export default Cantact