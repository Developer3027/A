import React from 'react';
import ReactDOM from 'react-dom';
import ScrollToTop from './hooks/scrollToTop';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ScrollToTop>
  </BrowserRouter>,
  document.getElementById('root')
);
