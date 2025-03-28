# SVA - Scalable Vector Animation

SVA (Scalable Vector Animation) is an **SVG-based animation framework** that allows you to animate vector graphics using frame-based rendering. It's lightweight, simple to use, and plays directly in the browser!

## 🚀 Features
- **Easy-to-use syntax** using `<sva>` and `<frame>` tags
- **Lightweight & efficient** animation rendering
- **Supports play, pause, reverse, and manual frame control**
- **Auto-detects `<sva>` elements** and plays them automatically

---

## 📌 Getting Started

### 1️⃣ Include `sva.js` in your project
```html
<script src="https://fundiman.github.io/SVA/sva.js"></script>
```

### 2️⃣ Create an SVA Animation
```html
<sva fps="10">
    <frame>
        <svg width="100" height="100">
            <circle cx="50" cy="50" r="20" fill="red" />
        </svg>
    </frame>
    <frame>
        <svg width="100" height="100">
            <circle cx="50" cy="50" r="20" fill="blue" />
        </svg>
    </frame>
</sva>
```

### 3️⃣ Control Animation in JavaScript
```js
const player = new SVAPlayer(document.querySelector("sva"));
player.pause();
player.play();
player.reverse();
player.setFrame(1);
```

---

## ⚡ API Reference

### `new SVAPlayer(element)`
Creates a new animation player for the given `<sva>` element.

### `player.play()`
Starts the animation.

### `player.pause()`
Pauses the animation.

### `player.setFrame(index)`
Jumps to a specific frame (0-based index).

### `player.reverse()`
Plays the animation in reverse.

---

**Made with ❤️ by Fundiman.** 🚀

