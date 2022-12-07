import { Box } from '@mui/system';
import { Carusel2 } from "../../../assets/Home/Carusel1/Carusel1"
// import "./Car.css"
import { Grid, Typography } from '@mui/material';
import Fade from 'react-reveal/Fade';

function Uch2() {
    return (
        <Box>
            <Fade bottom>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={0}>
                        {Carusel2.map((val2) => (
                            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                                <Box sx={{
                                    background: val2.CarBag,
                                    padding: "0px 15px",
                                    flex: "0 0 33.333333%"
                                }}>
                                    <Box sx={{
                                        minHeight: "250px",
                                        padding: "30px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "flex-start"
                                    }}>
                                        <Box sx={{
                                            marginRight: { lg: "2px", md: "2px", sm: "10px", xs: "10px" },
                                            marginLeft: "5px"
                                        }}>
                                            <Box sx={{
                                                border: "2px dotted #ffffff",
                                                borderRadius: "60px",
                                                width: "80px",
                                                height: "80px",
                                                zIndex: "1",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                display: "flex",
                                                marginLeft: "-10px"
                                            }}>
                                            </Box>
                                            <Typography sx={{
                                                marginTop: "-69px",
                                                color: val2.CarCol,
                                                fontSize: "55px",
                                                lineHeight: "60px",
                                                position: "relative",
                                                zIndex: "3",
                                                width: "80px",
                                                height: "70px",
                                                background: val2.CarBag,
                                                borderRadius: "50px",
                                                marginLeft: "-9px",
                                                textAlign: "center"
                                            }}>
                                                <img src={val2.CarIcon} alt="" width={"58px"} height={"58px"} />
                                            </Typography>
                                        </Box>
                                        <Box sx={{
                                            paddingLeft: "17px",
                                        }}>
                                            <Typography sx={{
                                                marginBottom: "10px",
                                                color: val2.CarCol,
                                                fontSize: "25px",
                                                fontWeight: "600",
                                                lineHeight: "1.2",
                                                fontFamily: "'Poppins', sans-serif",
                                                width: "80%"
                                            }}>
                                                {val2.CarYozI1}
                                            </Typography>
                                            <Typography sx={{
                                                color: val2.CarCol,
                                                fontSize: "18px",
                                                fontWeight: "400",
                                                fontFamily: "'Poppins', sans-serif",
                                                width: { lg: "100%", md: "90%", sm: "95%", xs: "89%" }
                                            }}>
                                                {val2.CarYozI2}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Fade>
        </Box>
    )
}
export default Uch2;