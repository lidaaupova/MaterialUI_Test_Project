import React, { useState } from 'react';

import {BottomNavigation, BottomNavigationAction, Typography } from '@mui/material';

import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FolderIcon from '@mui/icons-material/Folder';

const Footer = ({classes}) => {

  const [value, setValue] = useState("recents");

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <footer className={classes.footer}>
      <Typography variant='h6' align='center' gutterBottom>
        Footer
      </Typography>
      <BottomNavigation
        value={value}
        onChange={handleChange}
        className={classes.navigation}
      >
        <BottomNavigationAction
          label="Recents"
          value='recents'
          icon={<RestoreIcon/>}
        />
        <BottomNavigationAction
          label="Favorites"
          value='favorites'
          icon={<FavoriteIcon/>}
        />
        <BottomNavigationAction
          label="Nearby"
          value='nearby'
          icon={<LocationOnIcon/>}
        />
        <BottomNavigationAction
          label="Folder"
          value='folder'
          icon={<FolderIcon/>}
        />
      </BottomNavigation>
      <Typography align='center' color='textSecondary' component='p' variant='subtitle1'>
        Web Developer Blog react JS Material UI site
      </Typography>
    </footer>
  )
}

export default Footer;