import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Dropdown, DropdownToggle, DropdownMenu, DropdownItem
  } from 'reactstrap';

import {NavLink} from 'react-router-dom';

const Header = (props) => {
            const [isOpen, setIsOpen] = useState(false);
          
            const toggle = () => setIsOpen(!isOpen);

            const [dropdownOpen, setDropdownOpen] = useState(false);

            const toggleDropdown = () => setDropdownOpen(prevState => !prevState);

          
            return (
              <div >
                <Navbar style={{ backgroundColor: 'rgb(2, 13, 48)' }} dark expand='lg' className='p-4'>
                <NavbarBrand href="/" className="mr-auto"><h3 style={{fontFamily:"sans-serif"}}> SPACE-DIVE</h3></NavbarBrand>
                <NavbarToggler onClick={toggle} className="mr-2 ml-auto" />
                <Collapse isOpen={isOpen} navbar >

                    <Nav navbar className='mx-auto '>
                        <NavItem>
                            <NavLink className='mx-5 nav-link' to='/home' ><b>HOME</b></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='mx-5 nav-link' to='/news' ><b>NEWS</b></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='mx-5 nav-link' to='/launches' ><b>LAUNCHES</b></NavLink>
                        </NavItem>
                        <NavItem>
                            
                            
                            <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
                                <DropdownToggle className='mx-5' style={{backfaceVisibility:'visible' , backgroundColor:'rgb(2, 13, 48)'}} caret>
                                    GALLERY
                                </DropdownToggle>
                                <DropdownMenu>
                                <NavLink className='nav-link' to='/gallery/images' >
                                    <DropdownItem >Images</DropdownItem>
                                </NavLink>
                                <NavLink className='nav-link' to='/gallery/videos' >
                                    <DropdownItem>Videos</DropdownItem>
                                </NavLink>
                                </DropdownMenu>
                            </Dropdown>
                            
                            
                        </NavItem>
                        <NavItem>
                            <NavLink className='mx-5 nav-link' to='/Mars' ><b>MARS</b></NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
              </div>
    );
}

export default Header;