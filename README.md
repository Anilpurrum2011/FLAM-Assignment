# React Bottom Sheet with Spring Animations

A customizable bottom sheet component with smooth spring animations and multiple snap points, built without third-party animation libraries.


## Features

-  Three snap points (closed, half, open)
- 🏗️ Built with React Hooks
- ✨ Custom spring animations without external libraries
- 📱 Touch and mouse support
- 🖱️ Drag gestures and button controls
- 📜 Independent scrollable content areas
- 🎨 Responsive design for all devices

## Installation

```bash
git clone https://github.com/yourusername/react-bottom-sheet.git
cd react-bottom-sheet
npm install
npm start
```

## Usage

```jsx
import BottomSheet from './components/BottomSheet';

function App() {
  return (
    <BottomSheet>
      <h2>Your Content</h2>
      <p>Scrollable content goes here</p>
      {Array.from({ length: 20 }).map((_, i) => (
        <div key={i}>Item {i + 1}</div>
      ))}
    </BottomSheet>
  );
}
```

## Component Props

| Prop            | Type                              | Default           | Description                          |
|-----------------|-----------------------------------|-------------------|--------------------------------------|
| `children`      | ReactNode                         | -                 | Content to display in the sheet      |
| `initialPosition` | `'closed' | 'half' | 'open'`     | `'closed'`        | Initial snap position                |
| `snapPoints`    | `Object`                          | `{ closed: 0.1, half: 0.5, open: 0.9 }` | Height percentages for positions |

## Customization

### Change Snap Points
Edit in `BottomSheet.js`:
```js
const positions = useMemo(() => ({
  closed: 0.15,  // 15% of screen height
  half: 0.6,     // 60% of screen height
  open: 0.95     // 95% of screen height
}), []);
```

### Adjust Animation
Update the animation logic:
```js
const duration = 500; // Animation duration in ms
const springProgress = 1 - Math.pow(1 - progress, 3); // Modify spring factor
```

## Deployment

### Build for production
```bash
npm run build
```

### Deploy to Vercel
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import)

### Deploy to Netlify
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

## Development Scripts

- `npm start`: Runs the app in development mode
- `npm test`: Launches the test runner
- `npm run build`: Builds the app for production
- `npm run eject`: Ejects from Create React App (irreversible)

## Folder Structure

```
src/
├── components/
│   └── BottomSheet/
│       ├── BottomSheet.js    # Main component
│       ├── BottomSheet.css   # Component styles
│       └── index.js          # Component export
├── App.js                    # Main app component
├── App.css                   # App styles
└── index.js                  # Entry point
```

## License

MIT © Anilpurrum2011
