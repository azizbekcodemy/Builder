import { Block } from '@mui/icons-material';
import { Box, Button, Container, Grid, Typography, Link } from '@mui/material'
import Blog from '../Home/blog';
import Blogmap from '../../assets/blogmap/Blogmap'
import { TfiPlus } from "react-icons/tfi"
import Fade from 'react-reveal/Fade';

function Singlepages2() {
    return (
        <Box>
            <Box>
                <Grid container sx={{ marginBottom: "20px" }}>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                        <Box sx={{
                            position: "relative",
                            marginBottom: "45px",
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
                                        Our Blog
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
                                        Our Blog
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box>
                <Blog />
                <Box sx={{
                    marginTop: "25px",
                    marginBottom: "35px"
                }}>
                    <Container>
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
                                                        <Typography sx={{ width: "60px", height: "60px", background: "#FDBE33", float: "right", cursor: "pointer", mt: "0px" }}>
                                                            <TfiPlus style={{ fontSize: "40px", margin: "20% 20%", }} />
                                                        </Typography>
                                                    </Grid>

                                                </Grid>

                                                <Box>
                                                    <Typography sx={{ textAlign: "center", mt: "7.1%", color: "#666666", }}>
                                                        By <Link sx={{ textDecoration: "none", color: "#666", cursor: "pointer", "&:hover": { color: "#FDBE33", transition: ".3s" } }}> Admin</Link> In <Link sx={{ textDecoration: "none", color: "#666", cursor: "pointer", "&:hover": { color: "#FDBE33", transition: ".3s" } }}> Construction</Link>
                                                        <hr style={{ background: "#FDBE33", width: "100px", marginLeft: "35%" }} />
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
            </Box>
            <Box>
                <Box sx={{
                    display: "flex",
                    marginBottom: "75px",
                    justifyContent: "center"
                }}>
                    <Typography sx={{
                        border: "1px solid #fdbe33",
                        color: "#999999",
                        width: "93px",
                        height: "38px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "16px"
                    }}>
                        Previous
                    </Typography>
                    <Link href='#' sx={{
                        border: "1px solid #fdbe33",
                        width: "32px",
                        height: "38px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "16px",
                        color: "#030f27",
                        textDecoration: "none",
                        cursor: "pointer",
                        "&:hover": {
                            color: "#fdbe33",
                            background: "#030f27"
                        }
                    }}>
                        1
                    </Link>
                    <Link sx={{
                        border: "1px solid #fdbe33",
                        width: "35.2px",
                        height: "38px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "16px",
                        textDecoration: "none",
                        color: "#fdbe33",
                        background: "#030f27",
                        cursor: "pointer",
                        "&:hover": {
                            color: "#fdbe33",
                            background: "#030f27"
                        }
                    }} >
                        2
                    </Link>
                    <Link href='#' sx={{
                        border: "1px solid #fdbe33",
                        width: "35.5px",
                        height: "38px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "16px",
                        color: "#030f27",
                        textDecoration: "none",
                        cursor: "pointer",
                        "&:hover": {
                            color: "#fdbe33",
                            background: "#030f27"
                        }
                    }}>
                        3
                    </Link>
                    <Link href='#' sx={{
                        border: "1px solid #fdbe33",
                        width: "61px",
                        height: "38px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "16px",
                        color: "#030f27",
                        textDecoration: "none",
                        cursor: "pointer",
                        "&:hover": {
                            color: "#fdbe33",
                            background: "#030f27"
                        }
                    }}>
                        Next
                    </Link>
                </Box>
            </Box>
        </Box>
    )
}
export default Singlepages2;