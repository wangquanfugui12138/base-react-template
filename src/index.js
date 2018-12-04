import React from 'react';
import ReactDOM from 'react-dom';
import Routers from './router/router';

import 'antd/dist/antd.min.css'
import './assets/css/base.css'
import './httpConfig'

ReactDOM.render(<Routers/>, document.getElementById('root'));

