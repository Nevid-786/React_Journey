# 🎨 React Color Changer App

A simple React application that changes the background color of the screen when a color button is clicked.  
This project demonstrates **useState**, **props**, and **component-based design** in React.

---

## 🚀 Features

- 🎯 Dynamic background color change
- ⚛️ React `useState` for state management
- 🧩 Reusable `Color` component
- 🖱️ Click-based interaction
- 🧼 Clean and beginner-friendly code

---

## 🛠️ Tech Stack

- **React**
- **JavaScript (ES6)**
- **CSS**
- **Vite** (or Create React App)

---

## 📁 Project Structure

```
src/
│── App.jsx
│── Color.jsx
│── App.css
│── main.jsx
```

---

## ⚙️ How It Works

- `useState` is defined in **App.jsx**
- The `setColor` function is passed to `Color.jsx` as a prop
- Clicking a color button updates the background color of the screen

---

## 🧠 Example Code

### App.jsx
```jsx
const [colour, setColor] = useState("white");
```

### Color.jsx
```jsx
<button onClick={() => setColor(name.toLowerCase())}>
  {name}
</button>
```

---

## ▶️ How to Run Locally

```bash
git clone https://github.com/your-username/react-color-changer.git
cd react-color-changer
npm install
npm run dev
```

---

## 📸 Preview

<video width="400" controls autoplay muted loop>
  <source src="BG-color.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

---

## 📚 What I Learned

- React state management using `useState`
- Passing data via props
- Handling events in React
- Component reusability

---

## Nevid
 
CSE (AI/ML) Student  
Learning React & Frontend Development

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
