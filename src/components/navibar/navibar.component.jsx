import React from 'react';
import {Link} from "react-router-dom";

import './navibar.styles.scss'

const Navibar = () => (
    <div className="navibar">
        <Link className='home' to='/'>
            HOME
        </Link>
        <div className='option-group'>
            <Link className='option' to='/achievements'> ACHIEVEMENTS </Link>
            <Link className='option' to='/users'> USERS </Link>
        </div>
    </div>
);

export default Navibar;
