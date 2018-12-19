import React from 'react';
import ReactDOM from 'react-dom';
import Routers from './router/router';

import 'antd/dist/antd.less'
import './assets/css/base.css'
import './httpConfig'

ReactDOM.render(<Routers/>, document.getElementById('root'));

if (module.hot) {
    module.hot.accept(() => {
        ReactDOM.render(
          <Routers />,
          document.getElementById('root')
      )
    })
  }
  