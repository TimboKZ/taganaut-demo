/**
 * @author v1ndic4te
 * @copyright 2018
 * @licence MIT
 */

import React, {Component} from 'react';

import Gallery from './Gallery';

class App extends Component {
    render() {
        const version = window.taganautPackageInfo.version;

        return (
            <div className="container">
                <div className="box">
                    <h1 className="title is-1">Taganaut v{version} Demo</h1>
                    <Gallery name="Cars" directory="cars/" imageCount={5}
                             taganautInstance={window.carsTaganaut}/>
                    <Gallery name="Water" directory="water/" imageCount={3}
                             taganautInstance={window.fruitsTaganaut}/>
                </div>
            </div>
        );
    }
}

export default App;
