import React from 'react';

export class Home extends React.Component {
    constructor(props){
        super(props);

    }

    handleSubmit(){
        var router = this.context.router;

    }
    render() {
        return (
            <div>
                <div className="container">
                      <div className="">
                        <h1>FirstApp</h1>
                        <p className="lead">Hello</p>
                        <h2>Yes you can!</h2>
                        <br/>
                      </div>
                    </div>
            </div>
        );
    }
}

Home.contextTypes = {
    router: React.PropTypes.func.isRequired
}

export default Home;
