import React from 'react'
import { Box, Typography, Grid, Container } from '@mui/material'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Askmap from '../../../assets/askmap';
import Fade from 'react-reveal/Fade';
import "./style.css"
import { HiPlusSm, HiMinus } from "react-icons/hi";
function Ask() {
    return (
        <Box>
            <Box justifyContent='center' textAlign='center' padding='3% 0'>
                <Typography sx={{ mt: "0%", fontSize: "18px", fontWeight: "700", color: "#F0B430" }}>
                    Frequently Asked Question
                </Typography>
                <Typography sx={{ mt: "0%", fontSize: {lg:"50px", md:"50px ", sm:"50px", xs:"30px"}, fontWeight: "700", color: "#030F27" }}>
                    You May Ask
                </Typography>
            </Box>


            <Box>
                <Container>

                    <Grid container rowSpacing={3} columnSpacing={6} sx={{ mb: "8%" }}>
                        <Grid item xs={12} sm={5.8} md={5.8} lg={5.8}>
                            {Askmap.map((v) => (
                                <Fade left>

                                    <Accordion sx={{ mb: "15px" }} >
                                        <AccordionSummary
                                            expandIcon={<HiPlusSm style={{ fontSize: "25px", color: "#F0B430", transition: ".3s" }} />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                            sx={{
                                                height: "60px", "&:focus": {
                                                    background: "#FDBE33"
                                                }
                                            }}
                                            className='acardion'
                                        >
                                            <Typography sx={{ fontSize: "16px" }} >{v.name}</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails sx={{ border: "1px solid rgba(0, 0, 0, .1) " }}>
                                            <Typography>
                                                {v.text}
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                </Fade>

                            ))}
                        </Grid>
                        <Grid    sm={0.001} md={0.001} lg={0.001}  sx={{ border: "0.5px solid #FDBE33", ml: {lg:"3%", md:"3%", sm:"3%", xs:"4%"}, height: "362px", mt: "2%" ,}}>

                        </Grid>

                        <Grid item xs={12} sm={5.8} md={5.8} lg={5.8} sx={{ ml:{lg:"-1%" ,md:"-2%", sm:"-3%"}, mt:{lg:"0" ,md:"0" , sm:" 0",xs:"-93%"}  }}>
                            {Askmap.map((v) => (
                                <Fade right>

                                    <Accordion sx={{ mb: "15px", }}>
                                        <AccordionSummary
                                            expandIcon={<HiPlusSm style={{ fontSize: "25px", color: "#F0B430", transition: ".3s" }} />}

                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                            sx={{
                                                height: "60px", "&:focus": {
                                                    background: "#FDBE33",
                                                    transition: '0.5s'
                                                }
                                            }}
                                            className='acardion'

                                        >
                                            <Typography sx={{ fontSize: "16px" }} >{v.name}</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails sx={{ border: "1px solid rgba(0, 0, 0, .1) " }}>
                                            <Typography >
                                                {v.text}
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                </Fade>


                            ))}
                        </Grid>

                    </Grid>


                </Container>

            </Box>


        </Box>
    )
}

export default Ask

