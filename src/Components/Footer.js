import React from 'react';
import {NavLink} from 'react-router-dom';

const Footer = () => {

    return (
        <div className='row p-3' style={{backgroundColor: 'rgb(2, 13, 48)' }}>
                <div className='col-lg-1 col-6 col-sm-3 offset-lg-4'>
                    <center>
                    <NavLink className=' nav-link ' id='social' to='#'  >GITHUB</NavLink>
                    </center>
                </div>
                <div className='col-lg-1 col-6 col-sm-3'>
                    <center>
                <NavLink className=' nav-link ' id='social' to='#'  >LINKEDIN</NavLink>
                </center>
                </div>
                <div className='col-lg-1 col-6 col-sm-3'>
                <center>
                <NavLink className=' nav-link ' id='social' to='#' >INSTAGRAM</NavLink>
                </center>
                </div>
                <div className='col-lg-1 col-6 col-sm-3'>
                <center>
                <NavLink className=' nav-link ' id='social' to='#' >TWITTER</NavLink>
                </center>
                </div>
                
        </div>
    );
}

export default Footer;