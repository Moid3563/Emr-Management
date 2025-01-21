import React from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import PaymentIcon from '@mui/icons-material/Payment';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import PropTypes from 'prop-types';

const SideBarComponent = ({ onItemClick }) => {
  const menuItems = [
    { text: 'Queue', icon: <HomeIcon />, id: 'queue' },
    { text: 'Patients', icon: <PeopleIcon />, id: 'patients' },
    { text: 'Payments', icon: <PaymentIcon />, id: 'payments' },
    { text: 'Analytics', icon: <AnalyticsIcon />, id: 'analytics' },
  ];

  return (
    <Box
      sx={{
        width: '80px',
        height: '100vh',
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRight: '1px solid #ddd',
        boxShadow: '0px 2px 5px rgba(0,0,0,0.1)',
      }}
    >
      {/* Logo Section */}
      <Box
        sx={{
          width: '100%',
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderBottom: '1px solid #ddd',
          padding: '10px',
        }}
      >
        <img
          src="https://via.placeholder.com/40" 
          alt="Logo"
          style={{ maxWidth: '100%' }}
        />
      </Box>

      {/* Menu Items */}
      <List sx={{ width: '100%', padding: 0 }}>
        {menuItems.map((item) => (
          <ListItem
            button
            key={item.id}
            onClick={() => onItemClick(item.id)}
            sx={{
              flexDirection: 'column',
              padding: '10px 0',
              color: '#000',
              '&:hover': { backgroundColor: '#f5f5f5' },
            }}
          >
            <ListItemIcon sx={{ justifyContent: 'center', minWidth: 'auto', color: 'inherit' }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.text}
              primaryTypographyProps={{
                variant: 'caption',
                align: 'center',
              }}
            />
          </ListItem>
        ))}
      </List>

      <Divider sx={{ width: '100%' }} />

      {/* Logout */}
      <Box
        sx={{
          marginTop: 'auto',
          padding: '10px 0',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <ListItem
          button
          onClick={() => onItemClick('logout')}
          sx={{
            flexDirection: 'column',
            padding: '10px 0',
            color: '#000',
            '&:hover': { backgroundColor: '#f5f5f5' },
          }}
        >
          <ListItemIcon sx={{ justifyContent: 'center', minWidth: 'auto', color: 'inherit' }}>
            <ExitToAppIcon />
          </ListItemIcon>
        </ListItem>
      </Box>
    </Box>
  );
};


export default SideBarComponent;
