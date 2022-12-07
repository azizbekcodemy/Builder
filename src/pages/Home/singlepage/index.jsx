import { Box, Container, Grid, Link, Typography } from '@mui/material'
import React from 'react'
import rasm from "../../../assets/img/single.jpg"
import rasm1 from "../../../assets/img/user.jpg"
import { Single } from '../../../assets/singlepagesmap'
import { Button } from '../../../assets/singlepagesmap'
import { Post } from '../../../assets/singlepagesmap/index'
import { Input } from '../../../assets/singlepagesmap'
import Rasm from "../../../assets/img/blog-1.jpg"
import Rasm1 from "../../../assets/img/blog-2.jpg"
import { Kall } from '../../../assets/singlepagesmap'
import { Qaytish } from '../../../assets/singlepagesmap'
import { BiChevronRight } from "react-icons/bi";
import Fade from 'react-reveal/Fade';

function SinglePages() {
    return (
        <Box sx={{ m: "7% 0 2% 0" }}>
            <Container>

                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                    <Grid item xs={12} md={8} sm={12} lg={8}>
                        <Box>
                            <Fade bottom>
                                <Box>
                                    <img style={{ width: "100%" }} src={rasm} alt="" />
                                </Box>
                            </Fade>
                            <Fade bottom>
                                {Single.map((v) => (
                                    <Box sx={{ mb: "5%" }}>

                                        <Typography sx={{ fontSize: "30px", lineHeight: "4rem", fontWeight: "700" }}>
                                            {v.name}
                                        </Typography>

                                        <Typography sx={{ fontSize: "16px" }}>
                                            {v.text1}
                                        </Typography>
                                        <Typography sx={{ fontSize: "16px" }}>
                                            <br />
                                            {v.text2}
                                        </Typography>
                                        <Typography sx={{ fontSize: "16px", }}>
                                            <br />
                                            {v.text3}
                                        </Typography>
                                    </Box>


                                ))}
                            </Fade>

                            <Fade bottom>
                                <Grid container rowSpacing={1} sx={{ mb: "5%  " }} >
                                    {Button.map((v) => (
                                        <Grid item xs={2} >

                                            <Box sx={{ display: "flex", mt: "5%", }}>
                                                <Typography sx={{
                                                    border: "1px solid #DCDCDC", padding: "7px 0px", width: "94%", textAlign: "center", transition: ".3s", color: "#666666",
                                                    "&:hover": {
                                                        color: " #fdbe33",
                                                        background: "#030f27"
                                                    }
                                                }}>{v.name}</Typography>

                                            </Box>

                                        </Grid>
                                    ))}
                                </Grid>
                            </Fade>


                            <Fade bottom>
                                <Box sx={{ width: "100%", height: "164px", background: "#E0E3EB", padding: "30px" }}>

                                    <Grid container rowSpacing={1} sx={{ mb: "5%  " }} >
                                        <Grid item xs={2.2}>
                                            <img src={rasm1} alt="" />

                                        </Grid>
                                        <Grid item xs={9.8}>
                                            <Typography sx={{ fontSize: "20px", fontWeight: "800", mb: "5px", mt: "-7px" }}>
                                                Author Name
                                            </Typography>
                                            <Typography fontSize="16px" color='#666666'>
                                                Lorem ipsum  dolor sit amet elit. Integer lorem augue purus mollis sapien, non eros leo in nunc. Donec a nulla vel turpis tempor ac vel justo. In hac platea dictumst.
                                            </Typography>

                                        </Grid>
                                    </Grid>



                                </Box>
                            </Fade>

                            <Fade bottom>
                                <Box >
                                    {Kall.map((v) => (
                                        <Grid container rowSpacing={1} sx={{ mt: "3%", ml: (v.mar) }} >
                                            <Grid item xs={1.2}>
                                                <img src={v.rasm} style={{ width: "60px" }} alt="" />
                                            </Grid>
                                            <Grid item xs={10}>
                                                <Typography>
                                                    <Typography sx={{ fontSize: "18px", color: "#666", cursor: "pointer", fontWeight: "700", "&:hover": { color: "#fdbe33" } }}>

                                                        {v.name} <br />
                                                    </Typography>
                                                    <Typography sx={{ fontSize: "14px", lineHeight: "29PX" }}>

                                                        {v.data}
                                                    </Typography>
                                                    <Typography sx={{ fontSize: "16px" }}>
                                                        {v.text}
                                                    </Typography>
                                                </Typography>
                                                <Typography sx={{
                                                    width: "10%", height: "30px", background: "#dddddd", padding: "4px 10px", color: "#030f27", cursor: "pointer", mt: "2.5%", "&:hover": {
                                                        background: "#fdbe33",
                                                        transition: ".5s"
                                                    }
                                                }}>
                                                    Reply

                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    ))}
                                </Box>
                            </Fade>



                            <Fade bottom>
                                <Typography sx={{ fontSize: '30px', fontWeight: "800", mb: "10px", mt: "5%" }}>
                                    Leave a comment
                                </Typography>
                                <Grid item xs={12} sx={{ background: "#f3f6ff", paddingTop: "10px", paddingBottom: "10px", mt: "5%", mb: "10% " }}>

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
                                                <Typography sx={{ width: "100%", fontSize: "16px", color: "#666" }}>
                                                    {val.name}
                                                    <input type="text" className="con_input" style={{
                                                        color: "#fff",
                                                        height: "40px",
                                                        borderRadius: 0,
                                                        borderWidth: "1px",
                                                        background: "white",
                                                        width: "100%",
                                                        padding: ".375rem .75rem",
                                                        fontSize: "1rem",
                                                        border: "1px solid #ced4da",
                                                        borderColor: "rgba(256, 256, 256, .4)",
                                                        border: "1px solid #ced4day"
                                                    }} />
                                                </Typography>


                                            </Box>
                                        ))}
                                        <Typography sx={{ ml: "1.1%", color: "#666" }}>
                                            Message*
                                        </Typography>
                                        <Box className="con_inputt" sx={{
                                            position: "relative",
                                            padding: "9px",
                                            display: "flex",
                                        }}>


                                            <textarea className="con_input" placeholder="Message" style={{
                                                color: "#fff",
                                                height: "185px",
                                                borderRadius: 0,
                                                borderWidth: "1px",
                                                background: "white",
                                                width: "100%",
                                                padding: ".375rem .75rem",
                                                fontSize: "1rem",
                                                // border: "1px solid #ced4da",
                                                borderColor: "rgba(256, 256, 256, .4)",
                                                border: "1px solid #ced4da"

                                            }} />
                                        </Box>
                                        <Typography sx={{
                                            textAlign: "start",
                                            paddingLeft: "9px",
                                            marginTop: "10px",
                                            mb: "5%"
                                        }}>
                                            <button className="btn" type="submit" style={{
                                                padding: "15px 25px",
                                                fontSize: "18px",

                                                color: "#030f27",
                                                background: "#fdbe33",
                                                border: "none",
                                                borderRadius: 0,
                                                transition: ".3s"
                                            }}>Post Comment</button>
                                        </Typography>

                                    </Box>

                                </Grid>
                            </Fade>



                        </Box>
                    </Grid>
                    <Grid item lg={4} md={4} sm={12} xs={12} >
                        <Box>
                            <Fade bottom>
                                <Box>
                                    <Typography sx={{ fontSize: "32px", fontWeight: "700" }}>
                                        Recent Post
                                    </Typography>
                                    <Typography sx={{ width: "70px", height: "2px", background: "#FDBE33" }}></Typography>


                                </Box>
                            </Fade>

                            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} mt='2%'>
                                {Post.map((value) => (
                                    <Grid item xs={12} sx={{ mt: { lg: "1.5%", md: "0.5%", sm: "1%", xs: "1%" } }}>
                                        <Fade bottom>
                                            <Box >
                                                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}  >
                                                    <Grid item lg={3} md={3.5} sm={1.7} xs={3}>
                                                        <img src={value.rasm} style={{ width: "80px", marginTop: "0%" }} alt="" />
                                                    </Grid>

                                                    <Grid item lg={9} md={8.5} sm={10} xs={9}>
                                                        <Typography fontSize='18px' color="#666666">
                                                            {value.text}
                                                        </Typography>
                                                        <Typography sx={{ textAlign: "start", color: "#666666", fontSize: "14px" }}>
                                                            By <Link sx={{ textDecoration: "none", color: "#666", cursor: "pointer", "&:hover": { color: "#FDBE33", transition: ".3s" } }}> Admin</Link> In <Link sx={{ textDecoration: "none", color: "#666", cursor: "pointer", "&:hover": { color: "#FDBE33", transition: ".3s" } }}> Construction</Link>

                                                        </Typography>

                                                    </Grid>
                                                </Grid>

                                            </Box>
                                        </Fade>
                                    </Grid>
                                ))}
                                <Grid item xs={7.5} md={12} sx={{ mt: "5% " }}>
                                    <Fade bottom>
                                        <img src={Rasm} alt="" style={{ width: "100%" }} />

                                    </Fade>
                                </Grid>

                                <Grid item xs={12} display="flex" marginTop="6%">
                                    <Grid item xs={4} md={4} sm={4} lg={4} sx={{ ":hover": { backgroundColor: "#FDBE33", cursor: "pointer" }, backgroundColor: "#030E23", transitions: "0.5s" }}>
                                        <Typography sx={{ width: "100%", height: "40px", color: 'black', color: "#EDBE33", ":hover": { color: "#030E25" }, paddingTop: "6%", textAlign: "center", fontFamily: "sans-serif" }}>Featured
                                        </Typography>

                                    </Grid>
                                    <Grid item xs={4} md={4} sm={4} lg={4} sx={{ ":hover": { backgroundColor: "#FDBE33", cursor: "pointer" }, backgroundColor: "#030E23", transitions: "0.5s" }}>
                                        <Typography sx={{ width: "100%", height: "40px", color: 'black', color: "#EDBE33", ":hover": { color: "#030E25" }, paddingTop: "6%", textAlign: "center", fontFamily: "sans-serif" }}>Popular
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={4} md={4} sm={4} lg={4} sx={{ ":hover": { backgroundColor: "#FDBE33", cursor: "pointer", }, backgroundColor: "#030E23", transitions: "0.5s", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <Typography sx={{ width: "100%", height: "40px", color: 'black', color: "#EDBE33", ":hover": { color: "#030E25" }, paddingTop: "6%", textAlign: "center", fontFamily: "sans-serif" }}>Latest
                                        </Typography>
                                    </Grid>


                                </Grid>

                                {Post.map((value) => (
                                    <Grid item xs={12} sx={{ mt: { lg: "1.5%", md: "0.5%", sm: "1%", xs: "1%" } }}>
                                        <Fade bottom>
                                            <Box id="salom">
                                                <Grid container rowSpacing={1} >
                                                    <Grid item lg={3} md={3.5} sm={1.7} xs={3}>
                                                        <img src={value.rasm} style={{ width: "80px", marginTop: "0%" }} alt="" />
                                                    </Grid>

                                                    <Grid item lg={9} md={8.5} sm={10} xs={9}>
                                                        <Typography fontSize='18px' color="#666666">
                                                            {value.text}
                                                        </Typography>
                                                        <Typography sx={{ textAlign: "start", color: "#666666", fontSize: "14px" }}>
                                                            By <Link sx={{ textDecoration: "none", color: "#666", cursor: "pointer", "&:hover": { color: "#FDBE33", transition: ".3s" } }}> Admin</Link> In <Link sx={{ textDecoration: "none", color: "#666", cursor: "pointer", "&:hover": { color: "#FDBE33", transition: ".3s" } }}> Construction</Link>

                                                        </Typography>

                                                    </Grid>
                                                </Grid>

                                            </Box>
                                        </Fade>
                                    </Grid>
                                ))}

                                <Grid item xs={7.5} md={12} sx={{ mt: "10% " }}>
                                    <Fade bottom>
                                        <img src={Rasm1} alt="" style={{ width: "100%" }} />
                                    </Fade>
                                </Grid>
                            </Grid>
                            <Box>
                                <Typography sx={{ fontSize: "32px", fontWeight: "700", mt: "5%" }}>
                                    Categories
                                </Typography>
                                <Typography sx={{ width: "70px", height: "2px", background: "#FDBE33" }}></Typography>
                                <Box sx={{
                                    marginTop: "35px"
                                }}>
                                    {Qaytish.map((valZ) => (
                                        <Box>
                                            <Fade bottom>
                                                <Box sx={{
                                                    display: "flex",
                                                    marginBottom: "12px",
                                                    width: { xl: "95%", lg: "95%", md: "95%", sm: "100%", xs: "100%" }
                                                }}>
                                                    <Typography sx={{
                                                        color: "#fdbe33",
                                                        fontWeight: "900",
                                                        fontSize: "24px",
                                                        marginRight: "6px",
                                                        marginTop: "-10px"
                                                    }}>
                                                        <BiChevronRight />
                                                    </Typography>
                                                    <Link href='#' sx={{ textDecoration: "none" }}>
                                                        <Typography sx={{
                                                            fontSize: "16px",
                                                            color: "#666666",
                                                            fontSize: "'Poppins', sans-serif",
                                                            cursor: "pointer",
                                                        }}>
                                                            {valZ.SingYoz}
                                                        </Typography>
                                                    </Link>
                                                    <Typography sx={{
                                                        fontSize: "16px",
                                                        color: "#666666",
                                                        fontSize: "'Poppins', sans-serif",
                                                        textAlign: "end",
                                                        width: "100%"
                                                    }}>
                                                        {valZ.SingSon}
                                                    </Typography>
                                                </Box>
                                            </Fade>
                                        </Box>
                                    ))}
                                </Box>
                            </Box>









                            <Box>
                                <Typography sx={{ fontSize: "32px", fontWeight: "700" }}>
                                    Tags Cloud
                                </Typography>
                                <Typography sx={{ width: "70px", height: "2px", background: "#FDBE33" }}></Typography>


                            </Box>

                            <Grid container rowSpacing={1} sx={{ mb: "5% ", mt: "5%" }} >
                                {Button.map((v) => (
                                    <Grid item xs={4} >
                                        <Fade bottom>

                                            <Box sx={{ display: "flex", mt: "5%", }}>
                                                <Typography sx={{
                                                    border: "1px solid #DCDCDC", padding: "7px 0px", width: "94%", textAlign: "center", transition: ".3s", color: "#666666",
                                                    "&:hover": {
                                                        color: " #fdbe33",
                                                        background: "#030f27"
                                                    }
                                                }}>{v.name}</Typography>

                                            </Box>
                                        </Fade>

                                    </Grid>
                                ))}
                            </Grid>


                            <Box>
                                <Typography sx={{ fontSize: "32px", fontWeight: "700" }}>
                                    Text Widget
                                </Typography>
                                <Typography sx={{ width: "70px", height: "2px", background: "#FDBE33" }}></Typography>


                            </Box>
                            <Fade bottom>
                            <Typography sx={{ mt: "5%" }}>
                                Lorem ipsum dolor sit amet elit. Integer lorem augue purus mollis sapien, non eros leo in nunc. Donec a nulla vel turpis tempor ac vel justo. In hac platea nec eros. Nunc eu enim non turpis id augue.
                            </Typography>
                            </Fade>
                        </Box>
                    </Grid>

                </Grid>
            </Container>

        </Box>
    )
}

export default SinglePages
