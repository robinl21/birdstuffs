// src/components/Header.jsx
import React from 'react';
import { Badge, Container } from 'nes-ui-react'; // Use nes-ui-react components
import 'nes-ui-react/dist/nes-ui.css'; // Import the correct nes-ui-react styles

const Header = () => {
  return (
    <Container centered>
      <h1>HOW TO MAKE ALMOST ANYTHING 2024</h1>
      <div className="badge-container">
        <Badge backgroundColor="primary" text="Robin Liu" color='#fff' />
        <img src="assets/gifs/DinoSprites_doux.gif" width="5%" height="auto" alt="Dino Sprite"/>
      </div>
    </Container>
  );
};

export default Header;