"use client"

// import * as React from 'react';
// import topPhoto from '@/assets/The Dragon News.png'
// import Image from 'next/image';
// import moment from 'moment';
// import logo from '@/assets/logo.png'
// import { IconButton } from '@mui/material';

// import FacebookIcon from '@mui/icons-material/Facebook';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import YouTubeIcon from '@mui/icons-material/YouTube';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import Link from 'next/link';


// const Navbar = () => {
//     return (
//         <div className='mt-12'>
//             <Image
//                 className='mx-auto'
//                 src={topPhoto}
//                 alt='web name' />
//             <p className='text-[#706F6F] text-lg font-normal text-center mt-5'>
//                 Journalism Without Fear or Favour
//             </p>
//             <p className="mt-[10px] text-[#403F3F] text-center">
//                 {moment().format("dddd, MMMM D, YYYY")}
//             </p>
//             <div className='mt-[30px] py-7 w-full bg-blue-400'>
//                 <div className='flex flex-wrap items-center justify-evenly w-11/12 mx-auto'>
//                     <div>
//                         <Image src={logo} alt='logo' />
//                     </div>
//                     <div className='flex flex-wrap text-white items-center gap-6'>
//                         <Link href={"/"}><h1>Home</h1></Link>
//                         <h1>Pages</h1>
//                         <h1>Category</h1>
//                         <h1>News</h1>
//                         <h1>Post</h1>
//                         <h1>Contact</h1>
//                     </div>
//                     <div>
//                         <IconButton>
//                             <FacebookIcon fontSize='large' />
//                         </IconButton>
//                         <IconButton>
//                             <TwitterIcon fontSize='large' />
//                         </IconButton>
//                         <IconButton>
//                             <YouTubeIcon fontSize='large' />
//                         </IconButton>
//                         <IconButton>
//                             <LinkedInIcon fontSize='large' />
//                         </IconButton>
//                         <IconButton>
//                             <InstagramIcon fontSize='large' />
//                         </IconButton>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Navbar;

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

import logo from '@/assets/logo.png'
import Image from 'next/image';
import { IconButton, Stack } from '@mui/material';

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from 'next/link';

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

const Navbar = () => {

    return (
        <AppBar position="static" className='bg-black'>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Image src={logo} alt='logo' />

                    {/* Box - 1 */}

                    <Box className="w-full text-center">
                        {navItems.map((item) => (

                            <Link key={item} href={item.pathname}>
                                <Button className='text-white'>{item.route}</Button>
                            </Link>

                        ))}
                    </Box>

                    {/* Box - 2 */}

                    <Box>
                        <Stack direction="row" sx={{
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
                        </Stack>
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Navbar;