# 🚀 React Bottom Sheet with Spring Animations

A fully customizable bottom sheet component for React with smooth spring animations and multiple snap points — all built **without third-party animation libraries**. Perfect for mobile and desktop web apps!

![image](https://github.com/user-attachments/assets/a9eaf2d8-a1cf-4a8f-b8c3-1a29a9f118e3)

 **[Live Demo](https://bottom-sheet-with-spring-animations.vercel.app/)** <!-- Replace with actual deployed demo link -->

---

##  Features

- 🎯 Three Snap Points: `closed`, `half`, `open`
- ⚛️ Built with React Hooks
- 🌀 Pure JavaScript spring animations (no external libraries!)
- 📱 Touch & Mouse Drag Support
- 🖱️ Clickable Button Controls
- 📜 Independent Scrollable Content
- 🧩 Fully Customizable Snap Positions
- 🎨 Mobile-first & Responsive Design

---

## 🛠️ Tech Stack

- **React** (Create React App)
- **CSS Modules**
- **JavaScript** (no animation libraries used)

---

## 📦 Installation

Clone the repo and install dependencies:

```bash
git clone https://github.com/yourusername/react-bottom-sheet.git
cd react-bottom-sheet
npm install
npm start
```

---

## ⚙️ Usage

```jsx
import BottomSheet from './components/BottomSheet';

function App() {
  return (
    <BottomSheet initialPosition="half">
      <h2>Your Content</h2>
      <p>Scrollable content goes here.</p>
      {Array.from({ length: 20 }).map((_, i) => (
        <div key={i}>Item {i + 1}</div>
      ))}
    </BottomSheet>
  );
}
```

---

## 📘 Component Props

| Prop             | Type                              | Default   | Description                                 |
|------------------|-----------------------------------|-----------|---------------------------------------------|
| `children`       | `ReactNode`                       | -         | Content inside the bottom sheet             |
| `initialPosition`| `'closed' \| 'half' \| 'open'`    | `closed`  | Default sheet position on render            |
| `snapPoints`     | `Object`                          | `{ closed: 0.1, half: 0.5, open: 0.9 }` | Control height percentages for snap states |

---

## 🎨 Customization

### Modify Snap Points

Inside `BottomSheet.js`:

```js
const positions = useMemo(() => ({
  closed: 0.15,
  half: 0.6,
  open: 0.95
}), []);
```

### Tune Animation

```js
const duration = 500; // ms
const springProgress = 1 - Math.pow(1 - progress, 3); // Adjust spring dynamics
```

---

## 🚀 Deployment

### Build Production Bundle
```bash
npm run build
```

### Deploy to Vercel

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/import)

---

## 📁 Folder Structure

```
src/
├── components/
│   └── BottomSheet/
│       ├── BottomSheet.js
│       ├── BottomSheet.css
│       └── index.js
├── App.js
├── App.css
└── index.js
```

---

## 🧩 Future Enhancements

- [ ] Add snapping animations with `requestAnimationFrame`
- [ ] Keyboard accessibility and focus trap
- [ ] Theming support (light/dark mode)
- [ ] Add Typescript definitions
- [ ] Support for backdrop and swipe-to-dismiss

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

```bash
# Fork it
# Create your feature branch
git checkout -b feature/AmazingFeature

# Commit your changes
git commit -m 'Add some AmazingFeature'

# Push to the branch
git push origin feature/AmazingFeature

# Open a pull request 🚀
```

---

## 📜 License

MIT © [Your Name] – Feel free to use, modify, and distribute.

---

## 📬 Contact

Feel free to reach out for feedback, ideas, or collaboration!

- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com
- LinkedIn: [Your Name](https://linkedin.com/in/yourprofile)

---

> Built with ❤️ using React, for developers who care about UI + UX

