import React from 'react';
import ReactDOM from 'react-dom';
import Taganaut from 'taganaut';
import TaganautPackageInfo from 'taganaut/package.json';

import './index.css';
import App from './App';

const render = () => ReactDOM.render(<App/>, document.getElementById('root'));

window.taganautPackageInfo = TaganautPackageInfo;
window.carsTaganaut = new Taganaut({dbFilePath: 'cars.db'});
window.fruitsTaganaut = new Taganaut({dbFilePath: 'fruits.db'});

Promise.resolve()
    .then(() => window.carsTaganaut.init())
    .then(() => window.fruitsTaganaut.init())
    .then(render);
