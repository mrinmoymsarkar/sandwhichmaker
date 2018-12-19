import React from 'react'
import classes from './Logo.css'
import burgerLogo from '../../Assets/images/127 burger-logo.png';

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={burgerLogo} alt ="Sandwich" />
    </div>
)

export default logo;