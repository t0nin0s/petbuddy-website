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
import { PetBuddyLogo } from "../Logo";

const linksArray: Array<string> = ['Cat Services', 'Dog Services', 'Small Pet Services', 'Become a PBuddy', 'Contact Us']

const StyledAppBar = styled(AppBar)`
display:flex;
position:sticky;
background-color: whitesmoke;
`
const StyledToolbar = styled(Toolbar)`
flex-direction: row;
justify-content: space-between
`
const LogoStyle = styled.div`
padding:.3rem 0
margin-right: 0
`
const StyledTypography = styled(Typography)`
color:red;
visibility:hidden;
${mediaQueries('tablet')`
  position: absolute;
  left: 6rem;
  visibility:visible;
  font-size:2rem;
  font-weight:700;
  color:purple;
  `}
`
const StyledIconButton = styled(IconButton)``

const StyledMenuIcon = styled(MenuIcon)`
font-size: 3rem;
font-weight: 700;
color: purple;
display: flex;
${mediaQueries("medium")`
display:none;
`}
`
const StyledMenu = styled(Menu)`
margin-left: 3.5 %;
`
const NavBarItems = styled.div`
display: none;
${mediaQueries("medium")`
  position:absolute;
  right:2rem;
  display:flex;
  flex-direction:row;
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
    <StyledAppBar>
      <StyledToolbar>
        <LogoStyle>
          <PetBuddyLogo size="small" />
        </LogoStyle>
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
  );
}
