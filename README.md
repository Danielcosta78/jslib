# 📦 JSlib - JavaScript Library CDN Index

Welcome to **JSlib** — a simple, GitHub-based public index of popular JavaScript libraries, hosted on GitHub Pages.

🔗 **Live page:** [https://danielcosta78.github.io/jslib/](https://danielcosta78.github.io/jslib/)

---

## 🚀 Purpose

JSlib is a lightweight alternative to traditional CDNs like jsDelivr and CDNjs. It provides a searchable interface for accessing and copying links to JavaScript libraries directly hosted on GitHub.

You can use these libraries in your HTML projects by referencing them with a direct link.

---

## 🔍 Features

- ✅ No backend – fully static and GitHub-powered  
- ✅ Fast search for popular JS libraries  
- ✅ Copy & open links with a click  
- ✅ Works on mobile and desktop

---

## 📂 Structure

Libraries are stored under the `libs/` directory and listed via a JSON database (`db.json`).

Example entry in `db.json`:
```json
{
  "name": "animejs",
  "version": "3.2.1",
  "description": "Lightweight and powerful animation library.",
  "file": "jslib/libs/animejs/3.2.1/anime.min.js"
}
```


---

🧩 Usage

Just copy any library link from the site and add it to your HTML:

<script src="https://danielcosta78.github.io/jslib/libs/animejs/3.2.1/anime.min.js"></script>


---

📈 Most Popular Libraries

Anime.js

Lodash

Axios

jQuery

Chart.js

SweetAlert2

Day.js

Toastify

QRCode.js

FileSaver



---

🤝 Contributing

You can contribute by adding new libraries or versions. Simply:

1. Upload the .js file to the proper libs/{library}/{version}/ folder


2. Update db.json with a new entry


3. Commit and push to your repository



Pull requests and forks are welcome!


---

📜 License

This project is open-source under the MIT License.

---
