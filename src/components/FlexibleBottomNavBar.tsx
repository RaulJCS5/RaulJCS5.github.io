import * as React from 'react';
import { useState } from 'react'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub'
import EmailIcon from '@mui/icons-material/Email'
import { IconButton, BottomNavigation } from '@mui/material';


export const handleClick = (url: string) => {
    window.location.href = url;
};

function FlexibleBottomAppBar() {
    return (
        <Box sx={{ marginTop: 4 }}>
            <BottomNavigation>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            noWrap
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            Made with ❤️‍🔥 by Raul Santos
                        </Typography>
                        {/*<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        okay1
                    </Box>*/}
                        <Typography
                            variant="h6"
                            sx={{
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            Made with ❤️‍🔥 by Raul Santos
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        </Box>
                        <Box sx={{ flexGrow: 0 }}>
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
                    </Toolbar>
                </Container>
            </BottomNavigation>
        </Box>
    );
}
export default FlexibleBottomAppBar;

export const FlexibleBottomNavBar = () => {
    return (
        <FlexibleBottomAppBar></FlexibleBottomAppBar>
    )
}
