import { Box, Container, Grid, Link, Typography } from '@mui/material'
import React from 'react'
import Blogmap from '../../../assets/blogmap/Blogmap'
import "../Ask/style.css"
import { TfiPlus } from "react-icons/tfi"
import Fade from 'react-reveal/Fade';
function Blog() {
    return (
        <Box sx={{marginBottom:"90px"}}>
            <Container>
                <Box justifyContent='center' textAlign='center' padding='3% 0'>
                    <Typography sx={{ mt: "0%", fontSize: "18px", fontWeight: "700", color: "#F0B430" }}>
                        Latest Blog
                    </Typography>
                    <Typography sx={{ mt: "0%", fontSize: {lg:"50px", md:"50px ", sm:"50px", xs:"30px"}, fontWeight: "700", color: "#030F27" }}>
                        Latest From Our Blog
                    </Typography>
                </Box>



                <Box>
                    <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        {Blogmap.map((v) => (
                            <Grid item lg={4} md={4} sm={6} xs={12} >
                                <Fade bottom>
                                    <Box sx={{ background: "#F3F6FF", width: "100%", height: "100%", "&:hover": { color: "white", transition: ".3s", } }}>
                                        <img src={v.rasm} alt="" style={{ width: "100%" }} />


                                        <Grid container >
                                            <Grid item xs={10.2}>

                                                <Typography sx={{ width: "100%", height: "60px", background: "#030F27", mt: "0px", textAlign: "start", fontSize: "18px", fontWeight: "700", padding: "6% 0 0 8%", color: "#FDBE33" }}>
                                                    {v.name}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={1.8}>
                                                <Typography sx={{ width: "60px", height: "60px", background: "#FDBE33", float: "right", cursor: "pointer",mt:"0px" }}>
                                                    <TfiPlus style={{ fontSize: "30px", margin: "25% 25%", }} />
                                                </Typography>
                                            </Grid>

                                        </Grid>

                                        <Box>
                                            <Typography sx={{ textAlign: "center", mt: "7.1%", color: "#666666", fontSize:"14px"}}>
                                              <i>  By </i><Link sx={{ textDecoration: "none", color: "#666", cursor: "pointer", "&:hover": { color: "#FDBE33", transition: ".3s" } }}> Admin</Link> <i> In </i><Link sx={{ textDecoration: "none", color: "#666", cursor: "pointer", "&:hover": { color: "#FDBE33", transition: ".3s" } }}> Construction</Link>
                                                <Typography style={{ background: "#FDBE33", width: "100px",marginLeft:"35%",height:"1px",marginTop:"12px",marginBottom:"12px"  }} ></Typography>
                                            </Typography>
                                            <Typography sx={{ padding: "25px", textAlign: "center", mt: "-7%", fontSize: "16px", color: "#666666" }}>
                                                Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor
                                            </Typography>
                                        </Box>

                                    </Box>

                                </Fade>
                            </Grid>
                        ))}


                    </Grid>

                </Box>

            </Container>
        </Box>
    )
}

export default Blog