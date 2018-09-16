import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch } from 'react-router-dom';

import Header from '../Header/index';
import Home from '../../containers/Home';
import NotFound from '../NotFound/index';

import './style.scss';


/*
* Description: The main App entry point for routing. 
*  Proposed Change: These routes could perhaps be moved externally to be used on mobile/web
*/


class App extends Component {
    render() {
        return (
            <div className="container">
                <Header/>
                <section>
                    <Switch>
                        <Route exact path="/" component={ Home }/>
                   
                        <Route component={ NotFound }/>
                    </Switch>
                </section>
            </div>
        );
    }
}

export default withRouter( connect()( App ) );
