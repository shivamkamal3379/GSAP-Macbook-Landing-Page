#  Apple MacBook GSAP Landing Page

A fully animated, modern Apple-style landing page built using **React**, **Vite**, **GSAP**, **React-Three-Fiber**, **Three.js**, and **TailwindCSS**.
This project showcases a 3D interactive **MacBook model**, smooth scroll-based animations, and premium product-page UI inspired by Apple.

---

## 🚀 Features

### 🎬 3D MacBook Experience

* High-quality **3D MacBook Model**
* Interactive orbit + cinematic lighting
* Powered by **React-Three-Fiber** + **Three.js**
* Optional scroll-triggered texture changes

### 🌀 GSAP Animations

* Smooth reveal animations
* ScrollTriggers
* Timeline-based text + model animation

### 📱 Responsive Design

* Fully responsive across all devices
* Uses `react-responsive` + TailwindCSS utilities

### 🎨 Apple-Inspired UI

* Floating feature cards
* Minimalistic clean layout
* Sections with modern gradients + blur effects

---

## 🛠 Tech Stack

| Purpose          | Technology                  |
| ---------------- | --------------------------- |
| Framework        | React 19 + Vite             |
| 3D Engine        | React-Three-Fiber, Three.js |
| UI/Styling       | TailwindCSS                 |
| Animation        | GSAP, @gsap/react           |
| State Management | Zustand                     |
| Utilities        | clsx, react-responsive      |

---

## 📦 Dependencies

```json
{
  "dependencies": {
    "@gsap/react": "^2.1.2",
    "@react-three/drei": "^10.7.7",
    "@react-three/fiber": "^9.4.2",
    "@tailwindcss/vite": "^4.1.17",
    "clsx": "^2.1.1",
    "gsap": "^3.13.0",
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "react-responsive": "^10.0.1",
    "tailwindcss": "^4.1.17",
    "three": "^0.181.2",
    "zustand": "^5.0.9"
  }
}
```

---

## 📂 Project Structure

```
project/
│── public/
│   ├── models/
│   ├── textures/
│   └── logo.svg
│
│── src/
│   ├── components/
│   │   ├── Features.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   │
│   ├── three/
│   │   ├── MacbookModel.jsx
│   │   └── StudioLights.jsx
│   │
│   ├── store/
│   │   └── macbookStore.js
│   │
│   ├── styles/
│   │   └── globals.css
│   │
│   ├── App.jsx
│   └── main.jsx
│
└── package.json
```

---

## ▶️ Running the Project

### 1️⃣ Install dependencies

```sh
npm install
```

### 2️⃣ Start development server

```sh
npm run dev
```





---

## 👤 Author

Built by **Shivam**, exploring 3D web, GSAP animations, and premium UI engineering.
