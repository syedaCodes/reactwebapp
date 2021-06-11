import React from 'react';
import { 
    NavbarContainer, 
    NavLogo, 
    NavLinks, 
    NavItem, 
    NavBtn, 
    NavBtnLink, 
    MobileIcon 
    } from './NavElements';
import { FaBars } from 'react-icons/fa';

const Navbar = ({ toggle }) => {
    return (
        <>
            <NavbarContainer>
                <NavLogo to="/">
                    <h1 title="logo">Finch</h1>
                </NavLogo>
                <NavLinks>
                    <NavItem to="about">About</NavItem>
                    <NavItem to="discover">Discover</NavItem>
                    <NavItem to="services">Services</NavItem>
                    <NavItem to="signin">Sign In</NavItem>
                </NavLinks>
                <NavBtn>
                    <NavBtnLink to="/signup">Sign Up</NavBtnLink>
                </NavBtn>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
            </NavbarContainer>
        </>
    )
}

export default Navbar;
