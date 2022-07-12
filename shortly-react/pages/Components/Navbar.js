import React from 'react'
import { StyledNavbar,Navlinks, NavMenuList, } from '../../styles/Navbar.styled'


const Navbar = () => {
return (
    <StyledNavbar>
        <NavMenuList>
            <Navlinks>
                Features
            </Navlinks>
            <Navlinks>
                Pricing
            </Navlinks>
            <Navlinks>
                Resources
            </Navlinks>
        </NavMenuList>
    </StyledNavbar>
)
}

export default Navbar