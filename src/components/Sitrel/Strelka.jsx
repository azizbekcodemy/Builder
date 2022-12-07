import React from "react"
import { Box, Button, Container, Grid, Typography, Link } from '@mui/material'
import { FaChevronUp } from "react-icons/fa";
import { useState, useEffect } from 'react';
import "./style.css"

function Strelka() {
    const [but, setBut] = useState(false);

    function setFixed() {
        if (window.scrollY >= 192) {
            setBut(false)
        } else {
            setBut(true)
        }

    }
    window.addEventListener("scroll", setFixed)
    return(
        <>
        <Box>
            <Link  className={but ? `button butting` : `button`} href="#"  sx={{
                position: "fixed",
                display: "inline",
                background: "#fdbe33",
                color: "#121518",
                width: "44px",
                height: "44px",
                textAlign: "center",
                lineHeight: 1,
                fontSize: "22px",
                right: "15px",
                bottom: "15px",
                transition: "0.1s",
                zIndex: 9,
                "&:hover":{
                    color:"#fdbe33",
                    background:"#121518"
                }
            }}>
            <Typography sx={{fontWeight:900,paddingTop:"8px"}}>
             <FaChevronUp/>
            </Typography>
            </Link>
        </Box>
        </>
    )
    
}
export default Strelka