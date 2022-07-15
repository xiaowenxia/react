import React from 'react';
import { Button, message } from 'antd';
import './App.css';

const info = () => {
  message.info('我是麻子');
};

const App = () => (
  <div className="App" style={{ padding: 10 }}>
    <Button type="primary" onClick={info}>我是谁？</Button>
  </div>
);

export default App;