import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Facebook, GitHub, Instagram, Twitter } from '@mui/icons-material';
import { Box, Container, Paper } from '@mui/material';


export default function Footer() {
  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation>
        <BottomNavigationAction
          href='https://github.com/datacrump'
          label="GitHub"
          icon={<GitHub />}
        />
        <BottomNavigationAction
          href='https://twitter.com/datacrump'
          label="Twitter"
          icon={<Twitter />}
        />        
        <BottomNavigationAction
          href='https://www.facebook.com/datacrump'
          label="Facebook"
          icon={<Facebook />}
        />
        <BottomNavigationAction
          href='https://www.instagram.com/datacrump/'
          label="Instagram"
          icon={<Instagram />}
        />
      </BottomNavigation>
    </Paper>
  );
}
