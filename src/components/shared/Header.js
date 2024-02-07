import { Box, Container } from "@mui/material";
import topPhoto from '@/assets/The Dragon News.png'
import Image from "next/image";
import moment from 'moment';

const Header = () => {
    return (
        <Box className='mt-12'>
            <Container>
                <Image
                    className='mx-auto'
                    src={topPhoto}
                    alt='web name' />
                <p className='text-[#706F6F] text-lg font-normal text-center mt-5'>
                    Journalism Without Fear or Favour
                </p>
                <p className="mt-[10px] text-[#403F3F] text-center">
                    {moment().format("dddd, MMMM D, YYYY")}
                </p>
            </Container>
        </Box>
    );
};

export default Header;