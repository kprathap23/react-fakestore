import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const drawerWidth = 240;
const navItems = ["Home", "Products", "Cart", "Contact"];

function NavBar(props) {
  const state = useSelector((state) => state.handleCartItems);

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => {
          if (item === "Cart") {
            return (
              <ListItem key={item} disablePadding>
                <ListItemButton href={item} sx={{ textAlign: "left" }}>
                  <ListItemText primary={item} 
                  />
                  <Badge badgeContent={state.length} color="error">
                  <ShoppingCartIcon color="error" />
                </Badge>
                
                </ListItemButton>
              </ListItem>
            );
          } else {
            return (
              <ListItem key={item} disablePadding>
                <ListItemButton href={item} sx={{ textAlign: "left" }}>
                  <ListItemText primary={item} />
                </ListItemButton>
              </ListItem>
            );
          }
        })}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" elevation={0}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <Box
              sx={{
                display: {
                  xs: "none",
                  sm: "block",

                  justifyContent: "center",
                  textAlign: "center",
                },
              }}
            >
              {navItems.map((item) => {
                if (item === "Cart") {
                  return (
                    <Button href={item} key={item} sx={{ color: "#fff" }}>
                      {item}

                      <Badge badgeContent={state.length} color="error">
                        <ShoppingCartIcon color="inherit" />
                      </Badge>
                    </Button>
                  );
                } else {
                  return (
                    <Button href={item} key={item} sx={{ color: "#fff" }}>
                      {item}
                    </Button>
                  );
                }
              })}
            </Box>
          </Typography>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

NavBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default NavBar;
