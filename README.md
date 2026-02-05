# Naya Bere | Portfolio

## 🌟 Introduction

A modern, responsive portfolio website built to showcase a developer passionate about AI safety and seeking a position at Anthropic. The site highlights technical expertise in LLM applications, Claude API integrations, and a commitment to building AI that benefits humanity.

**Live Site:** [nayaunity.github.io/claudeCode101](https://nayaunity.github.io/claudeCode101/)

## 🎥 Preview

![Portfolio Preview](images/hero-headshot.png)

## 💡 Features

- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices with breakpoints at 968px and 600px
- **Smooth Navigation**: Single-page layout with smooth scroll navigation and active section highlighting
- **Dynamic Interactions**: JavaScript-powered hover effects and scroll-based navigation updates
- **Clean Typography**: Professional font pairing with Anton (headings) and Libre Baskerville (body text)
- **Minimal Aesthetic**: Elegant color scheme with beige background, dark text, and green accents
- **Fast Loading**: Zero dependencies, no build process — pure vanilla implementation

## 📄 Sections

| Section | Description |
|---------|-------------|
| **Home** | Hero section with creative split-name layout and tagline |
| **Work** | Skills showcase featuring Claude API, RAG pipelines, AI safety, and full-stack development |
| **Why Anthropic** | Cards highlighting alignment with Anthropic's mission: AI Safety, Claude's Vision, Research Excellence, Human-Centered AI |
| **About** | Professional background, technical toolkit, and contact information |

## 🛠 Technical Stack

| Category | Technology |
|----------|------------|
| **Markup** | HTML5 |
| **Styling** | CSS3 (Flexbox, Grid, Custom Properties) |
| **Interactivity** | Vanilla JavaScript (ES6+) |
| **Fonts** | Google Fonts (Anton, Libre Baskerville) |
| **Hosting** | GitHub Pages |

## 📁 Project Structure

```
claudeCode101/
├── index.html          # Main entry point
├── work.html           # Work section page
├── about.html          # About section page
├── trusted-by.html     # Why Anthropic page
├── styles.css          # All styling (7.5 KB)
├── script.js           # Interactivity (1.7 KB)
├── images/
│   ├── hero-headshot.png
│   └── featured-headshot.jpg
└── README.md
```

## 🚀 Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

- Any modern web browser (Chrome, Firefox, Safari, Edge)
- A code editor (VS Code recommended)

### Setup

1. **Clone the repo**

   ```bash
   git clone https://github.com/nayaunity/claudeCode101.git
   cd claudeCode101
   ```

2. **Open in browser**

   ```bash
   open index.html
   ```

   Or simply double-click `index.html` to open in your default browser.

### Local Development

No build process required. Edit files directly and refresh the browser to see changes.

For live reload during development, you can use any simple HTTP server:

```bash
# Using Python
python3 -m http.server 8000

# Using Node.js (npx)
npx serve
```

## 🎨 Customization

### Colors

Edit the CSS custom properties in `styles.css`:

```css
:root {
    --color-background: #E8E4DD;
    --color-text: #1a1a1a;
    --color-accent: #2d5a3d;
}
```

### Content

Update the HTML files directly to modify text, sections, or add new content.

## 📬 Contact

- **Email**: NayaUnityBere@gmail.com
- **LinkedIn**: [theblackfemaleengineer](https://linkedin.com/in/theblackfemaleengineer)
- **Location**: Los Angeles, CA

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
