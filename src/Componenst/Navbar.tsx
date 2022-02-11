import React from 'react'
import {
    Navbar,
    Nav,
    NavItem,
    NavbarBrand,
    NavLink,
    Container
} from 'reactstrap'

export default function Navigasi() {
  return (
    <div>
        <Navbar color="dark" light expand="md" variant="dark">
            <NavbarBrand href="/" className="text-white px-5">Navbar</NavbarBrand>
            <Nav className="ml-auto px-5" navbar>
                <NavItem>
                    <NavLink href="/" className='text-white'>News</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/" className='text-white'>Category</NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    </div>
  )
}
