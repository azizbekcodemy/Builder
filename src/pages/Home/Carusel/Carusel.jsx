import { Box } from '@mui/system';
import Carousel from 'react-bootstrap/Carousel';
import { Carusel1 } from "../../../assets/Home/Carusel1/Carusel1"
import { Carusel2 } from "../../../assets/Home/Carusel1/Carusel1"
import Button from '@mui/material/Button';
import "./Car.css"
import { Grid, Typography } from '@mui/material';
import Fade from 'react-reveal/Fade';

function Carusel() {
    return (
        <Box id="CarZZZ">
            <Carousel>
                {Carusel1.map((val) => (
                    <Carousel.Item interval={val.CarSon}>
                        <Box id={val.CarImg}>
                            <Box sx={{ textAlign: "center" }}>
                                <Fade right>
                                    <Typography data-aos="fade-left" sx={{
                                        fontSize: { lg: "30px", md: "30px", sm: "30px", xs: "16px" },
                                        color: "#fff",
                                        letterSpacing: "1px",
                                        marginBottom: "15px",
                                        fontFamily: "'Poppins', sans-serif",
                                        fontWeight: "400"
                                    }}>{val.CarToz1}</Typography>
                                </Fade>
                                <Fade left>
                                    <Typography data-aos="fade-right" sx={{
                                        fontSize: { lg: "62px", md: "62px", sm: "62px", xs: "30px" },
                                        color: "#fff",
                                        fontWeight: "750",
                                        marginBottom: "15px",
                                        fontFamily: "'Poppins', sans-serif",
                                        width: { xl: "100%", lg: "100%", md: "100%", sm: "80%", xs: "80%" },
                                        marginLeft: { lg: "0%", md: "0%", sm: "10%", xs: "10%" }
                                    }}>{val.CarToz2}</Typography>
                                </Fade>
                                <Fade bottom>
                                    <Button sx={{
                                        padding: { lg: "13px 35px", md: "13px 35px", sm: "13px 35px", xs: "8px 15.5px" },
                                        fontSize: { lg: "18px", md: "18px", sm: "18px", xs: "16px" },
                                        fontWeight: "600",
                                        letterSpacing: "1px",
                                        border: "2px solid #ffffff",
                                        borderRadius: "0px",
                                        color: "#fff",
                                        background: "transparent",
                                        transition: ".3s",
                                        fontFamily: "'Poppins', sans-serif",
                                        "&:hover": {
                                            color: "#030f27",
                                            background: "#fdbe33",
                                            borderColor: "#fdbe33"
                                        }
                                    }}>{val.CarBut}</Button>
                                </Fade>
                            </Box>
                        </Box>
                    </Carousel.Item>
                ))}
            </Carousel> 
        </Box>
    );
}

export default Carusel;