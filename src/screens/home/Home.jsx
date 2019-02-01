import React from 'react';
import { Link } from 'react-router-dom';
import i18next from 'i18next';
import { Button } from '../../components';

import './less/Home.less';

function Home() {
    return (
        <div className="home">
            <h2 className="home__title">
                { i18next.t('home.title') }
            </h2>
            <div className="home__description">
                <Link to="/menu">
                    <Button variant="primary">{ i18next.t('home.goToMenu') }</Button>
                </Link>
            </div>
        </div>
    );
}

export default Home;
