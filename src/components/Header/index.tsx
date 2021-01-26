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
import { Link } from 'react-router-dom';

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
padding:.3rem 0;
margin-right: 0;
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
const StyledIconButton = styled(IconButton)`
${mediaQueries('laptop')`
display:none`}
`
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
const StyledMenuItem = styled(MenuItem)`
display:flex;
flex-direction:column;
margin:0;
padding:0 2rem;
align-items:baseline;
`
const NavBarItems = styled.div`
display: none;
${mediaQueries("medium")`
  display:flex;
  flex-direction:row;
  justify-content:space-around;
  width: 60%;
  margin-left: 20rem;
  color:#f48fb1;
  font-weight: 700;
  `}
`
const NavBarLink = styled(Link)`
text-decoration:none;
height:2rem;
opacity: 0.6;
transition: 0.3s;
&:hover {
  margin:0;
  opacity:1;
  width:100%;
  font-weight:700;
}
${mediaQueries('laptop')`
height:auto;
&:hover {
  width:auto;
  background:none;
  transition: 0.5s;
  opacity:1;
}`}
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

  return (
    <StyledAppBar>
      <StyledToolbar>
        <LogoStyle>
          <PetBuddyLogo size="small" />
        </LogoStyle>
        <StyledTypography >
          PetBuddy
          </StyledTypography>
        <NavBarItems>
          <NavBarLink to={'/cat-service'}>Cat Services</NavBarLink>
          <NavBarLink to={'/dog-service'}>Dog Services</NavBarLink>
          <NavBarLink to={'/pet-service'}>Small Pet Services</NavBarLink>
          <NavBarLink to={'/contact'}>Contact Us</NavBarLink>
          <NavBarLink to={'/join'}>Join Us</NavBarLink>
        </NavBarItems>
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
          <StyledMenuItem className="menu-burguer">
            <NavBarLink to={'/cat-service'}>Cat Services</NavBarLink>
            <NavBarLink to={'/dog-service'}>Dog Services</NavBarLink>
            <NavBarLink to={'/pet-service'}>Small Pet Services</NavBarLink>
            <NavBarLink to={'/contact'}>Contact Us</NavBarLink>
            <NavBarLink to={'/join'}>Join Us</NavBarLink>
          </StyledMenuItem>
        </StyledMenu>
      </StyledToolbar>
    </StyledAppBar>
  );
}
