# Saathi Safety — Official Landing Page

A faithful, modern, responsive landing page implementation for **Saathi Safety** ("Help is just two taps away").

---

## 🚀 Live Preview Instructions

You can preview the website in either of two ways:

### Option 1: Direct Browser Launch (Instant, No Terminal Required)
Simply double-click the [`index.html`](file:///Users/ksshfii/Desktop/Saathi/index.html) file directly in your macOS Finder:
```bash
open /Users/ksshfii/Desktop/Saathi/index.html
```

### Option 2: Local HTTP Server (Recommended for Full Features)
Using Python's built-in web server:
```bash
cd /Users/ksshfii/Desktop/Saathi
python3 -m http.server 8000
```
Then open your browser and navigate to:
👉 **[http://localhost:8000](http://localhost:8000)**

---

## 🎨 Design & Implementation Highlights

- **Exact Mockup Fidelity**:
  - **Floating Dual-Pill Header**:
    - Left capsule: pure white pill containing the official Saathi segmented wave mark (`logo.png`).
    - Right capsule: pure white pill with the classical serif wordmark (`SAATHI SAFETY`) and smooth anchor navigation links (`About`, `Product`, `Contact`).
  - **Atmospheric Monochrome Hero**:
    - Grayscale group background photo (`img.png`) with subtle ambient gradient overlay.
    - Clean typography: *"Help is just two taps away"* with subtitle *"right there, exactly when you need it"*.
    - Interactive waitlist capsule input (*"Enter your email......"*) paired with a circular white submission button containing a directional arrow icon (`→`).
    - Authentic tagline positioned in lower-left: *"At Saathi, we are building a reliable companion that will always be there when you need help"*.
  - **Exploded CAD 3D Prototype**:
    - Hardware visualization (`product_insides.png`) with gentle floating animation and centered *"Our prototype"* label.

- **Interactive Features**:
  - **Waitlist Subscription Engine**:
    - Regex email validation with inline visual feedback.
    - Celebratory Canvas confetti burst upon submission.
    - Popup modal displaying reserved queue position (e.g. `#247`) and submitted email.
    - Automatically persists entries to `localStorage` (`saathi_waitlist`).
  - **Hardware Layer Inspector**:
    - Interactive exploded component explorer in the **Product** section highlighting each layer:
      1. Ergonomic Top Enclosure
      2. High-Density LiPo Battery Cell
      3. Precision Tactile Emergency Switch
      4. Low-Power Microcontroller & USB-C Logic Board
      5. Reinforced Chassis & Keyring Loop
  - **FAQ Accordion**: Smooth expand/collapse answers to common hardware and safety questions.
  - **Contact & Partnership Form**: Form for campus pilots and direct press inquiries.
  - **Responsive Mobile Navigation**: Collapsible drawer menu for smartphone and tablet viewports.

---

## 📁 File Structure

```
Saathi/
├── index.html                   # Semantic, accessible HTML5 structure
├── styles.css                   # Custom modern CSS with responsive breakpoints
├── script.js                    # Interactive features (waitlist, modal, confetti, FAQ)
├── brand-text.png               # High-res authentic "SAATHI SAFETY" wordmark
├── img.png                      # Hero community background image
├── product_insides.png          # Exploded CAD 3D hardware prototype
├── saathi logo.png              # Saathi brand icon
├── logo.png                     # Symlink to saathi logo.png
├── saathi logo (with text).png  # Original logo with wordmark
└── README.md                    # Documentation & setup guide
```

---

## 🚢 Deployment

The project is lightweight (zero build steps, pure HTML/CSS/JS) and can be deployed in seconds to:
- **GitHub Pages**: Push to repository and enable GitHub Pages in settings.
- **Vercel**: Run `npx vercel` or import repository.
- **Netlify**: Drag and drop the `Saathi` folder onto Netlify Drop.
