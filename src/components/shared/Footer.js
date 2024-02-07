import { Box, Button, Container, IconButton, Stack, Typography } from '@mui/material';

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from 'next/link';


const Footer = () => {

    const navItems = [
        {
            route: "Home",
            pathname: "/"
        },
        {
            route: "Pages",
            pathname: "/pages"
        },
        {
            route: "Category",
            pathname: "/category"
        },
        {
            route: "News",
            pathname: "/news"
        },
        {
            route: "Post",
            pathname: "/post"
        },
        {
            route: "Contact",
            pathname: "/contact"
        },
    ];

    return (
        <Box className="bg-[black] px-2 py-10">
            <Container>

                <Box className="w-full text-center" sx={{
                    "& svg": {
                        color: "white"
                    }
                }}>

                    <IconButton>
                        <FacebookIcon fontSize='large' />
                    </IconButton>
                    <IconButton>
                        <TwitterIcon fontSize='large' />
                    </IconButton>
                    <IconButton>
                        <YouTubeIcon fontSize='large' />
                    </IconButton>
                    <IconButton>
                        <LinkedInIcon fontSize='large' />
                    </IconButton>
                    <IconButton>
                        <InstagramIcon fontSize='large' />
                    </IconButton>

                </Box>

                <Box className="w-full text-center">
                    {navItems.map((item) => (

                        <Link key={item} href={item.pathname}>
                            <Button className='text-white'>{item.route}</Button>
                        </Link>

                    ))}
                </Box>

                <Typography variant='body2' color="gray" textAlign="center">
                    @2023 The Dragon News. Design by Programming Hero
                </Typography>

            </Container>
        </Box>
    );
};

export default Footer;