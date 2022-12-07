import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useState, useEffect } from 'react';
import Grid from '@mui/system/Unstable_Grid/Grid';
import { Nav } from '../../assets/navbar/nav';
import { Link,NavLink } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AccordionDetails from '@mui/material/AccordionDetails';
import { useNavigate } from "react-router-dom";
import "./style.css"
import Fade from 'react-reveal/Fade';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [fix, setFix] = useState(false);
    const [pad, setPad] = useState(false);
    const navigate = useNavigate()

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        if (true) {
            navigate("/singlepages")
            setAnchorEl(null);
        }
        setAnchorEl(null);
    }

    const handleClose2 = () => {
        if (true) {
            navigate("/singlepages2")
        }
        setAnchorEl(null);
    }


    function setFixed() {
        if (window.scrollY >= 100) {
            setFix(true)
        } else {
            setFix(false)
        }

    }
    window.addEventListener("scroll", setFixed)

    function setPadding() {
        if (window.scrollY >= 100) {
            setPad(true)
        } else {
            setPad(false)
        }

    }
    window.addEventListener("scroll", setPadding)



    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const ZZZNav = () => {
    };



    return (
        <Box className={pad ? `navbar padding` : `navbar`} sx={{ position: "relative", paddingLeft: { xl: "5%", lg: "5%", md: "5%", sm: "0px" }, }}>
            <AppBar className={fix ? `nav fixed` : `nav`} position="static" sx={{
                width: { xl: "94%", lg: "94%", md: "94%", sm: "100%", xs: "100%" },
                height: { xl: "82px", lg: "80px", md: "80px", sm: "70px" },
                background: "#030f27 !important",
                marginBottom: "-7.5px"
            }}>
                <Fade>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', sm: 'flex', md: "none" },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: "500",
                                letterSpacing: '.1rem',
                                color: 'inherit',
                                textDecoration: 'none',
                                width: '100%'
                            }}
                        >
                            MENU
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, width: "100%" }}>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'top',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'top',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                    marginLeft: "16px",
                                    marginRight: "-47px",
                                    marginTop: "10px",
                                    minHeight: "100%",
                                    border: "none"
                                }}
                            >
                                <Box sx={{ background: "#030F27", minWidth: "2000px", }}>
                                    {Nav.map((pas) => (
                                        <AccordionDetails>
                                            <Box onClick={handleCloseNavMenu} sx={{ width: "100%", }}>
                                                {pas.ok ?
                                                    <Box  sx={{

                                                    }}>
                                                        <Link
                                                            id="Navbar2ZZZ"
                                                            aria-controls={open ? 'basic-menu' : undefined}
                                                            aria-haspopup="true"
                                                            aria-expanded={open ? 'true' : undefined}
                                                            onClick={handleClick}
                                                            disableElevation
                                                            endIcon={<KeyboardArrowDownIcon />}
                                                            style={{
                                                                display: "flex",
                                                                color: "#ffffff",
                                                                textDecoration: "none",
                                                                transition: ".3s",
                                                                fontSize: "16px",
                                                                "&:hover": {
                                                                    color: (pas.col)
                                                                }
                                                            }}
                                                        >
                                                            PAGES
                                                            <Typography sx={{ width: "10px" }}>
                                                                <FaAngleDown />
                                                            </Typography>
                                                        </Link>
                                                        <Menu
                                                            id="basic-menu"
                                                            anchorEl={anchorEl}
                                                            open={open}
                                                            onClose={handleClose}
                                                            MenuListProps={{
                                                                'aria-labelledby': 'basic-button',
                                                            }}
                                                        >
                                                            <MenuItem onClick={handleClose2}>Blog Page</MenuItem>
                                                            <MenuItem onClick={handleClose}>Single Page</MenuItem>
                                                        </Menu>
                                                    </Box>
                                                    :
                                                    <Link to={pas.path}
                                                        id="Navbar2ZZZ"
                                                        style={{
                                                            width: "1800px",
                                                            minWidth:"100%",     
                                                            color: "#ffffff",
                                                            textDecoration: "none",
                                                            transition: ".3s",
                                                            fontSize: "16px",
                                                            gap: "20px",
                                                            "&:hover": {
                                                                color: (pas.col)
                                                            }
                                                        }}

                                                    >
                                                        {pas.yoz}
                                                    </Link>
                                                }
                                            </Box>
                                        </AccordionDetails>
                                    ))}
                                </Box>
                            </Menu>
                        </Box>
                        <Typography sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                                sx={{
                                    border: "1px solid transparent",
                                    borderRadius: "4px",
                                    borderColor: "rgba(255,255,255,.1)",
                                    color: "rgba(255,255,255,.5)",
                                    padding: { lg: "0px", md: "0px", sm: "5px 12px", xs: "1px 6px" },

                                }}
                            >
                                <MenuIcon sx={{ fontSize: "30px" }} />
                            </IconButton>
                        </Typography>
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, paddingTop: { xl: "2%", lg: "2%", md: "2.5%" } }}>
                            {Nav.map((pas) => (
                                <Box>
                                    {pas.ok ?
                                        <Box sx={{

                                            padding: "3.5px 11px 8px 10px",
                                        }}>
                                            <Link
                                                id="Navbar2ZZZ"
                                                aria-controls={open ? 'basic-menu' : undefined}
                                                aria-haspopup="true"
                                                aria-expanded={open ? 'true' : undefined}
                                                onClick={handleClick}
                                                disableElevation
                                                endIcon={<KeyboardArrowDownIcon />}
                                                style={{
                                                    display: "flex",

                                                    color: "#ffffff",
                                                    textDecoration: "none",
                                                    transition: ".3s",
                                                    fontSize: "14px",
                                                    "&:hover": {
                                                        color: (pas.col)
                                                    }
                                                }}
                                            >
                                                PAGES
                                                <Typography sx={{ width: "10px" }}>
                                                    <FaAngleDown />
                                                </Typography>
                                            </Link>
                                            <Menu
                                                id="basic-menu"
                                                anchorEl={anchorEl}
                                                open={open}
                                                onClose={handleClose}
                                                MenuListProps={{
                                                    'aria-labelledby': 'basic-button',
                                                }}
                                            >
                                                <MenuItem onClick={handleClose2}>Blog Page</MenuItem>
                                                <MenuItem onClick={handleClose}>Single Page</MenuItem>
                                            </Menu>
                                        </Box>
                                        :
                                        <Link  onClick={ZZZNav}  to={pas.path}
                                            id="Navbar2ZZZ"
                                            style={{
                                                padding: "30px 11px 8px 10px",
                                                color: "#ffffff",
                                                textDecoration: "none",
                                                transition: ".3s",
                                                fontSize: "14px",
                                                "&:hover": {
                                                    color: (pas.col)
                                                }
                                            }}
                                        >
                                            {pas.yoz}
                                        </Link>
                                    }
                                </Box>
                            ))}
                        </Box>
                        <Box
                            sx={{
                                flexGrow: 0, marginTop: "16px",
                                display: { sm: "none", lg: "flex", xl: "flex", md: "flex", xs: "none" },
                                textAlign: "end",
                                justifyContent: "end",
                                width: "100%"
                            }}>
                            <Tooltip >
                                <Link className='nav_get' style={{

                                    color: "#ffffff",
                                    border: "2px solid #ffffff",
                                    textDecoration: "none",
                                    padding: "10px 12px 10px 12px",
                                    letterSpacing: "1px",
                                }}
                                >
                                    Get A Quote
                                </Link>
                            </Tooltip>
                        </Box>
                    </Toolbar>
                </Container>
                </Fade>
            </AppBar>
        </Box >
    );
}
export default ResponsiveAppBar;

