"use client"

import React, { useEffect } from 'react'
import './ColorPaperShower.css';

const ColorPaperShower = () => {
  useEffect(() => {
    const paperShowerContainer = document.querySelector('.paper-shower-container');

    const colors = ['#FF5733', '#33FF57', '#5733FF', '#FF33D1', '#33D1FF'];
    const paperCount = 20;

    const createPaper = () => {
      const paper = document.createElement('div');
      paper.classList.add('paper');
      paper.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      paperShowerContainer.appendChild(paper);

      setTimeout(() => {
        paper.remove();
      }, 3000);
    };

    const startPaperShower = () => {
      for (let i = 0; i < paperCount; i++) {
        setTimeout(createPaper, Math.random() * 2000);
      }
    };

    startPaperShower();
  }, []);
    
  return (
    <div className="paper-shower-container min-h-[100vh] flex items-center justify-center">
      <p>color color</p>
      <p>color color</p>
      <p>color color</p>
      <p>color color</p>
      <p>color color</p>
      <p>color color</p>
      <p>color color</p>
      <p>color color</p>
      <p>color color</p>
      <div>
      <p>color color</p><p>color color</p><p>color color</p><p>color color</p><p>color color</p><p>color color</p><p>color color</p>
      </div>
    </div>
  )
}

export default ColorPaperShower