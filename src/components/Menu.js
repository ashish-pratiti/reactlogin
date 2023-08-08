import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Menu(   ) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };
  const handleCloseDrawer = () => {
    setDrawerOpen(false);
  };

  const drawer = (
    <List>
      <ListItem onClick={handleCloseDrawer}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <ListItemText primary="Home" />
        </Link>
      </ListItem>
      <ListItem onClick={handleCloseDrawer}>
        <Link to="/loginform" style={{ textDecoration: 'none' }}>
          <ListItemText primary="Login" />
        </Link>
      </ListItem>
      <ListItem onClick={handleCloseDrawer}>
        <Link to="/signupform" style={{ textDecoration: 'none' }}>
          <ListItemText primary="SignUp" />
        </Link>
      </ListItem>
      <ListItem onClick={handleCloseDrawer}>
        <ListItemText primary="Back"></ListItemText>
      </ListItem>

    </List>
  );

  return (
    <React.Fragment>
      {isMobile ? (
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Link to="/" style={{ textDecoration: 'none' , color: 'white'}}>
            <Typography variant="h6" component="div">
              Pratiti Technologies
            </Typography>
            </Link>
          </Toolbar>
        </AppBar>
      ) : (
        <AppBar position="static">
          <Toolbar>
            <Link to="/" style={{ textDecoration: 'none' , color: 'white'}}>
            <Typography variant="h6" component="div">
              Pratiti Technologies
            </Typography>
            </Link>
            
            <div style={{ marginLeft: 'auto' }} >

                <Link to="/loginform" style={{ textDecoration: 'none' }}>
                <Button color="inherit" style={{ color: 'white' }}>Login</Button>
                </Link>

                <Link to="/signupform" style={{ textDecoration: 'none' }}>
                <Button color="inherit" style={{ color: 'white' }} >SignUp</Button>
                </Link>
            </div>
          </Toolbar>
        </AppBar>
      )}
      <Drawer
        variant="temporary"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, 
        }}
      >
        {drawer}
      </Drawer>
    </React.Fragment>
  );
}
