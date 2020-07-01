import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import MediaCard from './MediaCard';
import myimage from './saqi.jpg'
import Temperature from './Temprature'

ReactDOM.render(
    <div> <App name="saqib kayani" age={26}/>
    <MediaCard title="Assignment # 2" body="This is another assignment that passes three arguments title ,body and image and displays in next page" url={myimage}/>
    <br/>
    <Temperature/>
    </div>,
    
  
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
