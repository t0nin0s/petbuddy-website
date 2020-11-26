import React from "react";
import styled from 'styled-components'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

const linksArray: Array<string> = ['Home', 'Cat Services', 'Dog Services', 'Small Pet Services', 'Become a PBuddy', 'Contact Us']

const StyledAppBar = styled(AppBar)`
`
const StyledToolbar = styled(Toolbar)`
background-color: whitesmoke;
color: purple;
justify-content:space-between
`
const StyledTypography = styled(Typography)`
&& {
  font-size:2rem;
  font-weight:700
}
`
const StyledIconButton = styled(IconButton)`
 `
const StyledMenuIcon = styled(MenuIcon)`
  && {
  font-size:3rem;
  font-weight:700;
  color: purple;
  }
`
const StyledMenu = styled(Menu)`
margin-left: 50%;
margin-top: 17%;
width:150%;

`

export default function MenuAppBar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const ourServices = linksArray.map(service => {
    return <MenuItem onClick={handleClose}>{service}</MenuItem>
  })

  return (
    <div className="header-container">
      <StyledAppBar position="static">
        <StyledToolbar>
          <StyledTypography >
            PetBuddy
          </StyledTypography>
          <StyledIconButton
            onClick={handleMenu}
          >
            <StyledMenuIcon />
          </StyledIconButton>
          <StyledMenu
            open={open}
            onClose={handleClose}
          >
            {ourServices}
          </StyledMenu>
        </StyledToolbar>
      </StyledAppBar>
    </div>
  );
}