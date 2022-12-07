import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { Fut, Con, Linke, Servi, Usef, Link2 } from '../../assets/futter/futter'
import Link from '@mui/material/Link';

function Futter() {
    return (
        <Box>
            <Box sx={{ background: "#030F27", paddingTop: "6%" }}>
                <Box sx={{ marginBottom: "1%" }}>
                    <Grid container
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Grid item xl={2.4} lg={2.4} md={2.7} sm={5.5} xs={11} sx={{ marginBottom: { sm: "4%", xs: "10%"} }}>
                            <Box sx={{ marginBottom:{xl: "10%", lg: "10%", md: "10%", sm: "10%", xs: "3%"} }}>
                                <Typography sx={{
                                    color: "#fdbe33",
                                    marginBottom: "10px",
                                    fontSize: "20px",
                                    fontWeight: 600,
                                }}>
                                    Office Contact
                                    <Typography sx={{
                                        width: "60px",
                                        height: "2px",
                                        left: 0,
                                        bottom: 0,
                                        background: "#fdbe33"
                                    }}>
                                    </Typography>
                                </Typography>
                            </Box>
                            {Con.map((val) => (
                                <Box sx={{ color: "#fff" }}>
                                    <Box sx={{ display: "flex", marginTop: "15px" }}>
                                        <Typography sx={{
                                            width: "24px",
                                            fontWeight: 900,
                                        }}>
                                            {val.icon}
                                        </Typography>
                                        {val.name}
                                    </Box>
                                </Box>
                            ))}
                            <Grid container>
                                {Linke.map((val) => (
                                    <Grid item xl={2.1} lg={2.1} md={2.1} sm={1.5} xs={1.5}>
                                        <Box sx={{
                                            justifyContent: "center",
                                            marginTop: "20px",
                                            display: "block"
                                        }}>
                                            <Typography sx={{
                                                marginLeft: "-10%",
                                                display: "inline-block",
                                                width: "40px",
                                                height: "40px",
                                                padding: "4px 0",
                                                textAlign: "center",
                                                border: "1px solid rgba(256, 256, 256, .3)",
                                                borderRadius: "60px",
                                                transition: ".3s",
                                                cursor:"pointer",
                                                color: "#ffffff",
                                                "&:hover": {
                                                    background: "#fdbe33",
                                                    borderColor: "#fdbe33",
                                                    color: "#030F27",
                                                    color: "#030F27"
                                                }
                                            }}>
                                                <Link sx={{
                                                    fontSize: "15px",
                                                    color: "#ffffff",
                                                    "&:hover": {
                                                        color: "#030F27"
                                                    }
                                                }}>
                                                    {val.icon}
                                                </Link>
                                            </Typography>
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                        <Grid item xl={2.4} lg={2.4} md={2.7} sm={5} xs={11} sx={{ marginBottom:  { sm: "4%", xs: "10%"} }}>
                            <Box sx={{ marginBottom:{xl: "10%", lg: "10%", md: "10%", sm: "10%", xs: "3%"} }}>
                                <Typography sx={{
                                    color: "#fdbe33",
                                    marginBottom: "10px",
                                    fontSize: "20px",
                                    fontWeight: 600,
                                }}>
                                    Services Areas
                                    <Typography sx={{
                                        width: "60px",
                                        height: "2px",
                                        left: 0,
                                        bottom: 0,
                                        background: "#fdbe33"
                                    }}>
                                    </Typography>
                                </Typography>
                            </Box>
                            {Servi.map((val) => (
                                <Box sx={{ color: "#fff" }}>
                                    <Box sx={{ display: "flex", transition: ".3s", marginTop: "10px", "&:hover": { color: "#fdbe33", letterSpacing: "1px" } }}>
                                        <Typography sx={{
                                            width: "24px",
                                            fontWeight: 900,
                                        }}>
                                            {val.icon}
                                        </Typography>
                                        {val.name}
                                    </Box>
                                </Box>
                            ))}
                        </Grid>
                        <Grid item xl={2.4} lg={2.4} md={2.7} sm={5.5} xs={11}  sx={{ marginBottom:  { sm: "4%", xs: "10%"} }}>
                            <Box sx={{ marginBottom:{xl: "10%", lg: "10%", md: "10%", sm: "10%", xs: "3%"} }}>
                                <Typography sx={{
                                    color: "#fdbe33",
                                    marginBottom: "10px",
                                    fontSize: "20px",
                                    fontWeight: 600,
                                }}>
                                    Useful Pages
                                    <Typography sx={{
                                        width: "60px",
                                        height: "2px",
                                        left: 0,
                                        bottom: 0,
                                        background: "#fdbe33"
                                    }}>
                                    </Typography>
                                </Typography>
                            </Box>
                            {Usef.map((val) => (
                                <Box sx={{ color: "#fff" }}>
                                    <Box sx={{ display: "flex", transition: ".3s", marginTop: "10px", "&:hover": { color: "#fdbe33", letterSpacing: "1px" } }}>
                                        <Typography sx={{
                                            width: "24px",
                                            fontWeight: 900,
                                        }}>
                                            {val.icon}
                                        </Typography>
                                        {val.name}
                                    </Box>
                                </Box>
                            ))}
                        </Grid>
                        <Grid item xl={2.4} lg={2.4} md={2.7} sm={5} xs={11}  sx={{ marginBottom:  { sm: "4%", xs: "10%"} }}>
                            <Box sx={{ marginBottom:{xl: "10%", lg: "10%", md: "10%", sm: "10%", xs: "3%"} }}>
                                <Typography sx={{
                                    color: "#fdbe33",
                                    marginBottom: "10px",
                                    fontSize: "20px",
                                    fontWeight: 600,
                                }}>
                                    Newsletter
                                    <Typography sx={{
                                        width: "60px",
                                        height: "2px",
                                        left: 0,
                                        bottom: 0,
                                        background: "#fdbe33"
                                    }}>
                                    </Typography>
                                </Typography>
                            </Box>
                            <Box sx={{ color: "#fff" }}>
                                <Typography sx={{
                                    marginBottom: "15px",
                                    fontFamily: "'Poppins', sans-serif",
                                }}>
                                    Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur
                                    facilisis ornare velit non vulpu
                                </Typography>
                                <Typography sx={{ position: "relative", maxWidth: "400px", margin: "0 auto" }}>
                                    <input style={{ display: "block", height: "50px", border: "2px solid #121518", width: "100%", padding: ".375rem 0.75rem", fontSize: "1rem" }} placeholder="Email here" />
                                    <Button sx={{
                                        position: "absolute",
                                        top: "5px",
                                        right: "5px",
                                        height: "40px",
                                        padding: "8px 10px",
                                        fontSize: "14px",
                                        fontWeight: 500,
                                        textTransform: "uppercase",
                                        color: "#fdbe33",
                                        background: "#121518",
                                        borderRadius: 0,
                                        border: "2px solid #fdbe33",
                                        transition: ".3s",
                                        "&:hover": {
                                            color: "#121518",
                                            background: "#fdbe33"
                                        }
                                    }}>Submit</Button>
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                <Grid container
                    direction="row"
                    justifyContent="center"
                    alignItems="center">
                    <Grid item xl={9.7} lg={9.7} md={11} sm={11} xs={11.5} sx={{ marginTop: "15px" }}>

                        <Box sx={{
                            textAlign: "center",
                            position: "relative",
                            padding: "15px 0",
                            fontSize: "0",
                            textalign: "center",
                            borderTop: "1px solid rgba(256, 256, 256, .1)",
                            borderBottom: "1px solid rgba(256, 256, 256, .1)"
                        }}>
                            {Link2.map((val) => (
                                <Link sx={{
                                    color: "#ffffff",
                                    fontSize: "16px",
                                    marginRight: "15px",
                                    paddingRight: "15px",
                                    borderRight: "1px solid rgba(255, 255, 255, .1)",
                                    textDecoration: "none",
                                    "&:hover":{
                                        color:"#fdbe33"
                                    }
                                }}>
                                    {val.name}
                                </Link>
                            ))}
                        </Box>

                    </Grid>
                </Grid>
                <Grid container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    sx={{ padding: "30px 15px" }}>
                    <Grid item xl={4.8} lg={4.8} md={5.5} sm={5.5} xs={10} sx={{ marginTop: "10px" }}>
                        <Box >
                            <Typography sx={{ margin: 0, color: "#ffffff" }}>
                                ©
                                <Link sx={{
                                    color: "#fdbe33",
                                    fontWeight: 500,
                                    letterSpacing: "1px",
                                    textDecoration: "none",
                                    "&:hover":{
                                        color:"#fff"
                                    }
                                }}>
                                    Your Site Name
                                </Link>
                                , All Right Reserved.
                            </Typography>
                        </Box>

                    </Grid>
                    <Grid item xl={4.8} lg={4.8} md={5.5} sm={5.5} xs={10} sx={{
                        marginTop: "10px",
                        textAlign: { xl: "right", lg: "right", md: "right", sm: "right", xs: "center" }
                    }}>
                        <Box >
                            <Typography sx={{ margin: 0, color: "#ffffff" }}>
                                Designed By
                                <Link sx={{
                                    color: "#fdbe33",
                                    fontWeight: 500,
                                    letterSpacing: "1px",
                                    textDecoration: "none",
                                    marginLeft:"1%",
                                    "&:hover":{
                                        color:"#fff"
                                    }
                                }}>
                                    HTML Codex
                                </Link>
                            </Typography>
                        </Box>

                    </Grid>
                </Grid>

            </Box>
        </Box>

    )
}

export default Futter