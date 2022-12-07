import { Box, Button, Container, Grid, Link, Typography } from '@mui/material'
import { lineHeight, textAlign } from '@mui/system'
import calendar from "./timetable.png"
import mail from "./send-mail.png"
import React from 'react'
import cal from "./customer-service.png"
import { Opacity } from '@mui/icons-material'

function Builder() {
    return (
        <Box>
            <Box sx={{ background: "#fdbe33",paddingLeft:{xl:"5%",lg:"5%",md:"5%",sm:"0px"},
            
         }}>
                <Grid container >
                    <Grid item xl={3.4} lg={3.2} md={2.5} sm={12} xs={12}>
                        <Box sx={{textAlign:{xs:"center",sm:"center",md:"start"}}}>
                        <Typography sx={{
                            margin: "0",
                            color: "#030f27",
                            fontSize: " 60px",
                            lineHeight: "60px",
                            fontWeight: "700"

                           
                        }}>
                            Builderz
                        </Typography>
                        </Box>
                    </Grid>
                    <Grid item xl={2.6} lg={2.8} md={3.1} sm={0} xs={12}>
                        <Box sx={{ display: {sm:"none",lg:"flex",xl:"flex",md:"flex",xs:"none"}, alignItems: "center", justifyContent: "flex-end",marginTop:"1%",
                     }}>
                            <Typography sx={{
                                display: "flex", alignItems: "center", justifyContent: "flex-end",
                                margin: "0",
                                color: "#030f27",
                            }}>
                                <img src={calendar} alt="" width={"30%"} />
                            </Typography>
                            <Box sx={{ paddingLeft: "15px" }}>
                                <Typography sx={{
                                    margin: "0 0 5px 0",
                                    color: "#030f27",
                                    fontSize: " 17px",
                                    fontWeight: "400",
                                   
                                }}>
                                    Opening Hour
                                </Typography>
                                <Typography sx={{
                                    margin: 0,
                                    color: "#030f27",
                                    fontSize: " 13px",
                                    fontWeight: "400"
                                }}>
                                    Mon - Fri, 8:00 - 9:00
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xl={2.6} lg={2.6} md={3.1} sm={12} xs={12}>
                        <Box sx={{  display: {sm:"none",lg:"flex",xl:"flex",md:"flex",xs:"none"}, alignItems: "center", justifyContent: "flex-end",marginTop:"1%"  }}>
                            <Typography sx={{
                                display: "flex", alignItems: "center", justifyContent: "flex-end",
                                margin: "0",
                                color: "#030f27",
                            }}>
                                <img src={cal} alt="" width={"30%"} />
                            </Typography>
                            <Box sx={{ paddingLeft: "15px" }}>
                                <Typography sx={{
                                    margin: "0 0 5px 0",
                                    color: "#030f27",
                                    fontSize: " 17px",
                                    fontWeight: "400"
                                }}>
                                    Call Us
                                </Typography>
                                <Typography sx={{
                                    margin: 0,
                                    color: "#030f27",
                                    fontSize: " 13px",
                                    fontWeight: "400"
                                }}>
                                   +012 345 6789
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xl={2.6} lg={2.6} md={2.4} sm={12} xs={12}>
                        <Box sx={{  display: {sm:"none",lg:"flex",xl:"flex",md:"flex",xs:"none"}, alignItems: "center", justifyContent: "flex-end",marginTop:"1%"  }}>
                            <Typography sx={{
                                display: "flex", alignItems: "center", justifyContent: "flex-end",
                                margin: "0",
                                color: "#030f27",
                            }}>
                                <img src={mail} alt="" width={"30%"} />
                            </Typography>
                            <Box sx={{ paddingLeft: "15px" }}>
                                <Typography sx={{
                                    margin: "0 0 5px 0",
                                    color: "#030f27",
                                    fontSize: " 17px",
                                    fontWeight: "400"
                                }}>
                                    Email Us
                                </Typography>
                                <Typography sx={{
                                    margin: 0,
                                    color: "#030f27",
                                    fontSize: " 13px",
                                    fontWeight: "400"
                                }}>
                                    info@example.com
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

            </Box>
        </Box>
    )

}
export default Builder