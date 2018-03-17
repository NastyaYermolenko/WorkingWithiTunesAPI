import React, { Component } from 'react';
import './App.css';
import Search from "./Search";

class App extends Component {
  render() {
    return (

            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col-sm-12 col-md-10">
                        <Search/>

                    </div>
                </div>
            </div>
    );
  }
}

export default App;
