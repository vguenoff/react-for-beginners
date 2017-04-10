import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';

import App from './components/App';
import StorePicker from './components/StorePicker';
import NotFound from './components/NotFound';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/vg-style.css';

const Root = () => (
  <BrowserRouter>
    <div>
      <Match exactly pattern="/" component={StorePicker} />
      <Match exactly pattern="/store/:storeId" component={App} />
      <Miss component={NotFound} />
    </div>
  </BrowserRouter>
);

render(
  <Root />,
  document.getElementById('main')
);
