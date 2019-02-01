import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header, Footer } from '.';
import { Home } from '../screens';
import { MenuContainer, CartContainer } from '../containers';

function App() {
    return (
        <Router basename="/">
            <div className="app">
                <Header />
                <div className="app__container">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/menu" component={MenuContainer} />
                    </Switch>
                    <CartContainer />
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
