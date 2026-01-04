# URL to PDF Chrome Extension

A simple Chrome extension that converts the currently opened webpage into a clean PDF with a single click.

This project is built as a beginner-friendly learning project using JavaScript and Chrome Extension APIs.

---

## 🚀 Features

- Convert any webpage to PDF
- Clean PDF output (unwanted sections hidden)
- Automatically sets PDF filename using page title
- Simple and modern popup UI
- Loading state to prevent multiple clicks

---

## 🛠️ Tech Stack

- HTML
- CSS
- JavaScript
- Chrome Extension APIs (Manifest V3)

---

## 📂 Project Structure

url-to-pdf-extension/
│
├── manifest.json # Extension configuration
├── popup.html # Popup UI
├── popup.js # Popup logic
├── content.css # Print-specific styles
└── README.md

---

## ⚙️ How It Works

1. User clicks the extension icon
2. Clicks **Convert to PDF**
3. Extension injects print-specific CSS into the webpage
4. Page title is cleaned and temporarily set as document title
5. Browser print dialog opens
6. User saves the page as PDF

> Note: Chrome security restrictions do not allow fully automatic PDF downloads or disabling headers programmatically.

---

## 🧪 How to Run Locally

1. Open Chrome and go to:
chrome://extensions
2. Enable **Developer Mode**
3. Click **Load unpacked**
4. Select the `URL to PDF ext` folder
5. Open any webpage
6. Click the extension icon → **Convert to PDF**

---

## 📌 Known Limitations

- Headers and footers must be manually disabled from print settings
- Some dynamic or login-protected pages may not render perfectly
- EPUB export is not supported (by design)

---

## 🎯 Learning Outcomes

- Understanding Chrome Extension architecture
- Working with Manifest V3
- Injecting scripts and styles into webpages
- Handling browser limitations gracefully
- Improving UX with loading states

---

## 📄 License

This project is created for educational purposes.