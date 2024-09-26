// src/components/MyButton.jsx
import React from 'react';
import { Button } from 'nes-ui-react';
import 'nes-ui-react';

const MyButton = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Button type="primary">Primary Button</Button>
      <Button type="success">Success Button</Button>
    </div>
  );
};

export default MyButton;