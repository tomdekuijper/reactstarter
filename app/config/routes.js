import React from 'react';
// Import route pages

import Main from '../components/main';
import Home from '../components/home';



import {Router, Route, DefaultRoute} from 'react-router';

export default (
    <Route name="app" path='/' handler={Main}>
        <Route name="home" path="home" handler={Home} />

        <DefaultRoute handler={Home} />
    </Route>
    );