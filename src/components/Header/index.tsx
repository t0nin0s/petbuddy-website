import React from "react";
import styled from 'styled-components'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { mediaQueries } from '../../mediaqueries'

const linksArray: Array<string> = ['Cat Services', 'Dog Services', 'Small Pet Services', 'Become a PBuddy', 'Contact Us']

const StyledAppBar = styled(AppBar)``

const StyledToolbar = styled(Toolbar)`
  background-color: whitesmoke;
  color: purple;
  justify-content:space-between
`
const StyledTypography = styled(Typography)`
  font-size:2rem;
  font-weight:700
  `
const StyledIconButton = styled(IconButton)`
${mediaQueries("medium")`
  display:none;`}`

const StyledMenuIcon = styled(MenuIcon)`
  font-size:3rem;
  font-weight:700;
  color: purple;
  display:flex;
${mediaQueries("medium")`
  display:none;`}
`
const StyledMenu = styled(Menu)`
  margin-left: 3.5%;
`
const NavBarItems = styled.div`
display:none;
  ${mediaQueries("medium")`
    display:flex;
    flex-direction:row;
    flex-grow:1;
    justify-content: flex-end;
    color:#f48fb1;
    font-weight: 900;
    `}
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
          <NavBarItems>{ourServices}</NavBarItems>
          <StyledIconButton
            onClick={handleMenu}>
            <StyledMenuIcon />
          </StyledIconButton>
          <StyledMenu
            anchorEl={anchorEl}
            getContentAnchorEl={null}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            transformOrigin={{ vertical: "top", horizontal: "center" }}
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