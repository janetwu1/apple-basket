import React, { Profiler } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import './index.css';
import { Provider } from 'mobx-react';
import todo from './stores/TodoStore';

ReactDOM.render(
  <Provider todo={todo}>
    <App />
  </Provider>,
  document.getElementById('root')
)