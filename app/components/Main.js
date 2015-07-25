import React from 'react';
import {RouteHandler} from 'react-router';

class Main extends React.Component{
    render(){
        return (
            <div className="main-container">

                <div className="content-container">
                    <RouteHandler {...this.props}/>
                </div>
            </div>
            )
    }
};

export default Main;