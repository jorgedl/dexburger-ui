import React from 'react';
import i18next from 'i18next';
import { Link } from 'react-router-dom';

import './less/Navigation.less';

function Navigation() {
    return (
        <div className="navigation">
            <Link className="navigation__item" to="/menu/">{i18next.t('header.menu')}</Link>
            <Link className="navigation__item" to="/">{i18next.t('header.orders')}</Link>
            <Link className="navigation__item" to="/">{i18next.t('header.deliveryArea')}</Link>
            <Link className="navigation__item" to="/">{i18next.t('header.contact')}</Link>
        </div>
    );
}

export default Navigation;
