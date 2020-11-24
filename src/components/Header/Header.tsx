import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

const linksArray: Array<string> = ['Home', 'Cat Services', 'Dog Services', 'Small Pet Services', 'Become a PBuddy', 'Contact Us']
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    container: {
      backgroundColor: 'whitesmoke',
      color: 'purple'

    },
    menu: {
      right: '-5%',
      "&:hover": {
        color: 'purple',
        fontWeight: 'bold'
      }
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    }
  })
);

export default function MenuAppBar() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const ourServices = linksArray.map(service => {
    return <MenuItem className={classes.menu} onClick={handleClose}>{service}</MenuItem>
  })

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.container}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            PetBuddy
          </Typography>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleMenu}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right"
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right"
            }}
            open={open}
            onClose={handleClose}
          >
            {ourServices}
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
}