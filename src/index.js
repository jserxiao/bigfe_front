import React from 'react';
import ReactDOM from 'react-dom/client';
import microApp from '@micro-zoe/micro-app'
import VConsole from 'vconsole'

import {isMobile} from '../utils/env'

import './index.css';
import App from './App';

microApp.start();

if (isMobile()) {
  new VConsole({theme: 'dark'})
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
