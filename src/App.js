import React from 'react';
import BottomSheet from './components/BottomSheet';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Bottom Sheet</h1>
        <p>Drag the handle or use buttons to control</p>
      </header>
      
      <BottomSheet>
        <h2>Bottom Sheet Content</h2>
        <p>This implementation includes:</p>
        <ul>
          <li>Spring animations without third-party libraries</li>
          <li>Three snap points (closed, half, open)</li>
          <li>Drag gestures and button controls</li>
          <li>Responsive design for all devices</li>
        </ul>
        
        <div style={{ 
          height: '300px', 
          background: '#f5f5f5', 
          overflowY: 'auto',
          padding: '16px',
          margin: '20px 0', 
          borderRadius: '8px'
          }}>
          <p style={{ textAlign: 'center', marginBottom: '24px' }}>Scrollable Content Area</p>
          
          {/* Sample scrollable content */}
          {Array.from({ length: 10 }).map((_, index) => (
          <div key={index} style={{ 
              padding: '12px',
              marginBottom: '8px',
              background: '#fff',
              borderRadius: '4px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
            }}>
              <h4>Item {index + 1}</h4>
              <p>This is scrollable content inside the bottom sheet. Scroll down to see more items.</p>
          </div>
          ))}
        </div>
      </BottomSheet>
    </div>
  );
}

export default App;