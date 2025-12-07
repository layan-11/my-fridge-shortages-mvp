# My Fridge Shortages — MVP (Web)

This is a lightweight **MVP (Web App)** for the "My Fridge Shortages" project — built as a simple prototype for the Software Engineering basics course.

## What this MVP includes
- Login (mock)
- Home page: shows fridge inventory (mock data)
- Shortages page: detects missing essential items (mock detection logic)
- Smart Shopping List (manual-add + from shortages)
- Simple, clean UI — prototype only (no real camera / AI)

## How to run (locally)
1. Download the files and unzip.
2. Open `index.html` in a modern browser (Chrome / Edge / Firefox).
3. Click **Login (mock)** to access the app.
4. Navigate between Home, Shortages, and Shopping List.

## Technologies
- Plain HTML / CSS / JavaScript (no build tools)
- Designed for quick demo and easy grading

## Notes
- Inventory is mock data stored inside `app.js`.
- AI/image detection is simulated by comparing mock inventory with an essential list.
- To extend: connect backend (Node.js + Firebase) and replace mock detection with TensorFlow/OpenCV pipeline.

## Files
- `index.html` — main page
- `styles.css` — styling
- `app.js` — app logic and mock data
- `VIDEO_SCRIPT.txt` — suggested script for a 5-minute demo
