import { Box, Typography } from '@mui/material'
import "../Ask/style.css"
import Fade from 'react-reveal/Fade';
import React, { Component } from "react";
import Slider from "react-slick";
import CarouselMop from "../../../assets/carouselmop"
import Rasm from "../../../assets/imgs/quote.png"
import { Carousel } from '3d-react-carousal';

import rasm from "../../../assets/imgs/testimonial-1.jpg"
import rasm1 from "../../../assets/imgs/testimonial-2.jpg"
import rasm2 from "../../../assets/imgs/testimonial-3.jpg"
import rasm3 from "../../../assets/imgs/testimonial-4.jpg"



function Corousel() {


  let slides = [
    <img src={rasm} style={{ borderRadius: "50%", width: "120px" }} alt="1" />,
    <img src={rasm1} style={{ borderRadius: "50%", width: "120px" }} alt="2" />,
    <img src={rasm2} style={{ borderRadius: "50%", width: "120px" }} alt="3" />,
    <img src={rasm3} style={{ borderRadius: "50%", width: "120px" }} alt="4" />,
  ]
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };


  const callback = function (index) {
    console.log("callback", index);
  }

  return (
    <Box>
      <Fade>
        <Box id='rang' justifyContent='center'>
          <Box sx={{ width:{lg:"55%", md:"55%", sm:"55%", xs:"85%"}, justifyContent: 'center', padding: "0 15px" , ml:{lg:"25%" ,md:"25%", sm:"27%",xs:"12%"}}}>

          <Box sx={{ width: {lg:"80%", md:"80%", sm:"8-+0%", xs:"100%"}, ml:{lg:"6.5%", md:"7%" ,sm:"6.5%", xs:"-2%"}, mt:{lg:"1%", md:"0", sm:"0%", xs:"0%"} }}>

              <Carousel slides={slides} autoplay={true} interval={2000} onSlideChange={callback} />
            </Box>
            <Box sx={{ mt: "2%" , ml:"-8%"}}>
              <img src={Rasm} alt="" />
            </Box>
            <Slider {...settings}>


              {CarouselMop.map((v) => (

                <Box sx={{ padding: " 0 5%" }} justifyContent="center" ml="7%" mt='-5%'>
                  <Typography sx={{ maxWidth: "75%", textAlign: "center", fontSize: "11px", color: "white", fontWeight: "100", }}>
                    <Typography sx={{ fontSize: {lg:"22px ", md:"22px", sm:"20px", xs:"18px"}, fontWeight: "700", color: '#fdbe33' }}>
                      {v.name}
                    </Typography>
                    <Typography sx={{ fontSize: "11px", lineHeight: "2" }}>
                      <i>{v.pro}</i>
                    </Typography>
                    {v.text}
                  </Typography>

                </Box>
              ))}


            </Slider>
          </Box>



        </Box>
      </Fade>
    </Box>
  )
}

export default Corousel