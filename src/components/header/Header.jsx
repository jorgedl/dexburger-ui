import React from 'react';
import { UserInfo, Navigation } from '..';
import { Link } from 'react-router-dom';

import './less/Header.less';

function Header() {
    return (
        <header className="header">
            <div className="header__group brand">
                <Link to="/" className="header__link">
                    Burger
                </Link>
            </div>
            <div className="header__group header__group--expanded">
                <Navigation />
            </div>
            <div className="header__group">
                <UserInfo />
            </div>
        </header>
    );
}

export default Header;
