import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'
import { useState } from 'react';
import { BottomNavigation, BottomNavigationAction, IconButton, useMediaQuery } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub'
import EmailIcon from '@mui/icons-material/Email'

export const handleClick = (url: string) => {
    window.location.href = url;
};

export default function FixedBottomNavigationBar() {


    return (
        <Box>
            <BottomNavigation>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box>
                        <Typography variant='body2' color='text.secondary'>Copyright © 2023 Raul Santos</Typography>
                    </Box>
                    <Box>
                        <IconButton onClick={() => handleClick('https://www.linkedin.com/in/rauljosecsantos/')}>
                            <LinkedInIcon />
                        </IconButton>
                        <IconButton onClick={() => handleClick('https://github.com/RaulJCS5')}>
                            <GitHubIcon />
                        </IconButton>
                        <IconButton onClick={() => handleClick('https://twitter.com/rauljosesan')}>
                            <TwitterIcon />
                        </IconButton>
                        <IconButton onClick={() => handleClick('https://www.facebook.com/raul.jose.35/')}>
                            <FacebookIcon />
                        </IconButton>
                        <IconButton onClick={() => handleClick('https://www.instagram.com/rauljcsantos')}>
                            <InstagramIcon />
                        </IconButton>
                        <IconButton onClick={() => handleClick('mailto:rauljosesantos@hotmail.com')}>
                            <EmailIcon />
                        </IconButton>
                    </Box>
                </Box>
            </BottomNavigation>
        </Box>
    );
}