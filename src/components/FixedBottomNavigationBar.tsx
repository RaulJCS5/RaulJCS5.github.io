import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'
import { useState } from 'react';
import { BottomNavigation, BottomNavigationAction, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub'
import EmailIcon from '@mui/icons-material/Email'

export default function FixedBottomNavigationBar() {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <BottomNavigation sx={{position:'absolute',bottom:0}}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box>
                        <Typography variant='body2' color='text.secondary'>Copyright © 2023 Raul Santos</Typography>
                    </Box>
                    <Box>
                        <IconButton>
                            <LinkedInIcon />
                        </IconButton>
                        <IconButton>
                            <GitHubIcon />
                        </IconButton>
                        <IconButton>
                            <TwitterIcon />
                        </IconButton>
                        <IconButton>
                            <FacebookIcon />
                        </IconButton>
                        <IconButton>
                            <InstagramIcon />
                        </IconButton>
                        <IconButton>
                            <EmailIcon />
                        </IconButton>
                    </Box>
                </Box>
            </BottomNavigation>
        </Box>
    );
}