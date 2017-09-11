import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

require('../styles/application.scss');

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(App),
    document.getElementById('react-root')
  );
});