# My Portfolio

A sleek, responsive, and highly customizable personal portfolio template built with **React (Vite ⚡)**. Features a premium glassmorphic dark theme, CSS animations, and built-in continuous deployment to **GitHub Pages**.

![Portfolio Preview Demo](https://youtu.be/_IlnJ7NuBE8)
*(Example of project layout design)*

## Features
- **Lightning Fast:** Built with React 19 and Vite
- **Premium Design:** Glassmorphism UI, advanced CSS gradients, and micro-animations
- **100% Component Driven:** Cleanly separated architecture (Hero, Navbar, Skills, Projects, Footer)
- **CI/CD Built-In:** Comes with an automated GitHub Actions workflow to deploy for free to GitHub Pages!

---

## 🛠️ How to Use & Customize This Template

Want to use this portfolio for yourself? Follow these easy steps to get your own version running.

### 1. Fork and Clone
1. Click the **Fork** button at the top right of this repository to create your own copy.
2. Clone your forked repository locally:
   ```bash
   git clone https://github.com/Rohankollabathula67/react-portfolio.git
   cd react-portfolio
   ```

### 2. Local Setup
Make sure you have [Node.js](https://nodejs.org/) installed, then run:

```bash
# Install dependencies
npm install

# Start the local development server
npm run dev
```
Open your browser to `http://localhost:5173/` to see the site running locally!

### 3. Modifying for Yourself ✏️
The code is designed to be easily editable. Here is where you need to go to change the content:

* **Site Name & SEO Info:** Edit `index.html` (inside the `<head>` tag).
* **Navigation Links:** Edit `src/components/Navbar/Navbar.jsx`.
* **Your Name, Bio & Resume:** Edit `src/components/Hero/Hero.jsx`. Look for the text and the `<img src="...">` tag for your profile picture.
* **Skills List:** Edit the `skills` array at the top of `src/components/Skills/Skills.jsx`. You can find valid icon URLs on [Devicon](https://devicon.dev/).
* **Projects List:** Edit the `projects` array at the top of `src/components/Projects/Projects.jsx`.
* **Social Media Links:** Edit the `socialLinks` array at the top of `src/components/Footer/Footer.jsx`.

> **Note on Styling:** Global colors, fonts, and backgrounds are defined at the top of `src/index.css`. You can change `--color-accent` or `--gradient-body` to completely change the theme in seconds!

---

## 🌎 Deploying For Free to GitHub Pages

This repo comes with a GitHub Action that will **automatically build and host your site** every time you push code to the `main` branch. 

To set it up:

1. **Update `vite.config.js`:** 
   Open `vite.config.js` and change the `base:` property to match your GitHub repository name.
   *(E.g., if your repo is named `my-portfolio`, change it to `base: '/my-portfolio/'`)*.
2. **Push your code:**
   ```bash
   git add .
   git commit -m "Personalized my portfolio"
   git push origin main
   ```
3. **Configure GitHub Settings:**
   * Go to your repository on GitHub.
   * Click **⚙️ Settings** > **Pages** (on the left sidebar).
   * Under **Build and deployment**, change the "Source" dropdown to **GitHub Actions**.

GitHub will immediately start deploying your site. You can watch the progress in the **Actions** tab of your repository! 

---

## 📦 Tech Stack
* **Framework:** React + Vite
* **Styling:** Vanilla CSS (CSS Modules & Variables)
* **Icons:** `react-icons`
