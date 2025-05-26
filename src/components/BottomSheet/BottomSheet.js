import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import './BottomSheet.css';

const BottomSheet = ({ children }) => {
  const [position, setPosition] = useState('closed');
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [currentY, setCurrentY] = useState(0);
  const sheetRef = useRef(null);
  
  // Removed unused contentRef since it wasn't being used
  // const contentRef = useRef(null);

  // Memoize positions object to prevent unnecessary recreations
  const positions = useMemo(() => ({
    closed: 0.1,
    half: 0.5,
    open: 0.9
  }), []);

  // Only keep getHeightValue if actually used, otherwise remove
  // const getHeightValue = () => `${positions[position] * 100}%`;

  const handleMove = useCallback((clientY) => {
    if (!isDragging) return;
    setCurrentY(clientY);
    
    const deltaY = clientY - startY;
    const currentHeight = positions[position] * window.innerHeight;
    const newHeight = Math.max(50, Math.min(window.innerHeight - 50, currentHeight - deltaY));
    
    if (sheetRef.current) {
      sheetRef.current.style.height = `${newHeight}px`;
      sheetRef.current.style.transition = 'none';
    }
  }, [isDragging, position, positions, startY]);

  const handleEnd = useCallback(() => {
    if (!isDragging) return;
    setIsDragging(false);

    const deltaY = currentY - startY;
    let newPosition = position;

    if (Math.abs(deltaY) > 30) {
      if (deltaY < 0) {
        if (position === 'closed') newPosition = 'half';
        else if (position === 'half') newPosition = 'open';
      } else {
        if (position === 'open') newPosition = 'half';
        else if (position === 'half') newPosition = 'closed';
      }
    }

    setPosition(newPosition);
  }, [currentY, isDragging, position, startY]);

  const handleStart = useCallback((clientY) => {
    setIsDragging(true);
    setStartY(clientY);
    setCurrentY(clientY);
  }, []);

  useEffect(() => {
    const handleTouchMove = (e) => {
      e.preventDefault();
      handleMove(e.touches[0].clientY);
    };
    const handleMouseMove = (e) => handleMove(e.clientY);
    const handleEndEvent = () => handleEnd();

    if (isDragging) {
      window.addEventListener('touchmove', handleTouchMove, { passive: false });
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('touchend', handleEndEvent);
      window.addEventListener('mouseup', handleEndEvent);
    }

    return () => {
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchend', handleEndEvent);
      window.removeEventListener('mouseup', handleEndEvent);
    };
  }, [isDragging, handleEnd, handleMove]);

  useEffect(() => {
    if (!sheetRef.current) return;

    const sheet = sheetRef.current;
    const targetHeight = positions[position] * window.innerHeight;
    
    const animate = (startTime) => {
      const duration = 400;
      const startHeight = sheet.offsetHeight;
      const heightDiff = targetHeight - startHeight;
      
      const step = (timestamp) => {
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const springProgress = 1 - Math.pow(1 - progress, 4);
        const currentHeight = startHeight + (heightDiff * springProgress);
        
        sheet.style.height = `${currentHeight}px`;
        sheet.style.transition = 'none';
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          sheet.style.height = '';
          sheet.style.transition = '';
        }
      };
      
      window.requestAnimationFrame(step);
    };
    
    animate(performance.now());
  }, [position, positions]);

  return (
    <div 
      className={`bottom-sheet ${position}`}
      ref={sheetRef}
      style={{ height: `${positions[position] * 100}%` }}
    >
      <div 
        className="handle"
        onTouchStart={handleStart}
        onMouseDown={handleStart}
      >
        <div className="handle-icon" />
      </div>
      
      <div className="content">
        {children}
        
        <div className="controls">
          <button onClick={() => setPosition('closed')}>Close</button>
          <button onClick={() => setPosition('half')}>Half</button>
          <button onClick={() => setPosition('open')}>Open</button>
        </div>
      </div>
    </div>
  );
};

export default BottomSheet;