import React from 'react';
import {render} from 'react-dom';
import './static/rem'
import './static/rem.css'
import './static/reset.css'
import './libs/hejiasdk'
import Side from './router/index'


import {configure} from 'mobx'; // 开启严格模式
// configure({enforceActions: true}) // 开启严格模式

render(
  <Side />,
  document.getElementById('root')
);


// configure 代表开启了严格模式，因为非严格模式下，组件是直接可以通过props.action改变state数据的，当项目复杂的时候这样是非常危险的。所以要设置唯一改变state方式是通过action