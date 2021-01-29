import React from 'react';
import styled, { css } from 'styled-components'
import { mediaQueries } from '../../mediaqueries'
import { Link } from 'react-router-dom';
import { NavBarProps } from '../../types'

const NavBarItems = styled.div<NavBarProps>`
display: none;
  ${props => props.primary && css`
    display:flex;
    flex-direction:column;
    padding:1rem;
  `}
  ${mediaQueries("medium")`
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    width:60%;
    align-self:center;
    margin-left: 20rem;
    color:#f48fb1;
    font-weight: 700;
  `}
`
const NavBarLink = styled(Link) <NavBarProps>`

text-decoration:none;
height:2rem;
opacity: 0.6;
transition: 0.3s;
&:hover {
  margin:0;
  opacity:1;
  font-weight:700;
  background: pink;
  padding: 0 .5rem;
}
${mediaQueries('medium')`
  height:auto;
    &:hover {
    width:auto;
    background:whitesmoke;
    transition: 0.5s;
    opacity:1;
    }`
  }`

export default (props: NavBarProps) => {
  const { primary } = props;
  return (
    <NavBarItems primary={primary}>
      <NavBarLink to={'/cat-service'}>Cat Services</NavBarLink>
      <NavBarLink to={'/dog-service'}>Dog Services</NavBarLink>
      <NavBarLink to={'/pet-service'}>Small Pet Services</NavBarLink>
      <NavBarLink to={'/contact'}>Contact Us</NavBarLink>
      <NavBarLink to={'/join'}>Join Us</NavBarLink>
    </NavBarItems>
  )
}

