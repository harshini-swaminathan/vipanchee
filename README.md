# Vipanchee Nruthyalaya — Website

## Project Structure

```
vipanchee/
├── index.html              ← Main page
├── css/
│   └── styles.css          ← All styles
├── js/
│   └── main.js             ← Nav, lightbox, form handling
└── images/
    ├── logo.jpg             ← Veena player logo
    ├── hero.jpg             ← Hero background (Guru performing)
    ├── about/
    │   └── guru-portrait.jpg
    ├── bmk/
    │   ├── inauguration-wide.jpg
    │   ├── ribbon-cut-close.jpg
    │   ├── bmk-portrait.jpg
    │   ├── bmk-entering.jpg
    │   └── bmk-smile.jpg
    ├── gallery/
    │   ├── natyanjali-2017.jpg
    │   ├── natyanjali-leap.jpg
    │   ├── leap-orange.jpg
    │   ├── ms-subbulakshmi.jpg
    │   ├── solo-dark.jpg
    │   ├── floor-pose.jpg
    │   ├── garlanded.jpg
    │   ├── ilaiyaraja.jpg
    │   └── marathon.jpg
    ├── building/
    │   ├── night.jpg
    │   ├── day.jpg
    │   ├── entrance.jpg
    │   ├── hall-1.jpg
    │   └── hall-2.jpg
    └── timeline/
        ├── 1995-founding.jpg
        ├── 1996-inauguration.jpg
        ├── 1990s-arangetram.jpg
        ├── 2000s-natyanjali.jpg
        ├── 2004-ms-tribute.jpg
        ├── 2000s-temples.jpg
        ├── 2010s-ilaiyaraja.jpg
        ├── 2017-natyanjali.jpg
        └── 2025-legacy.jpg
```

---

## How to add / replace an image

Just drop a new `.jpg` file into the right folder with the **same filename**.
That's it — no code change needed.

To add a new gallery photo, add a new block in `index.html`:
```html
<div class="gallery-item">
  <img src="images/gallery/your-new-photo.jpg" alt="Caption here" loading="lazy"/>
  <div class="gallery-cap">Caption here</div>
</div>
```

Use `class="gallery-item tall"` for portrait photos,
`class="gallery-item wide"` for wide landscape photos.

---

## Setting up the Contact Form (Formspree — Free)

1. Go to **https://formspree.io** and sign up (free)
2. Click **New Form** → give it a name → copy your Form ID (looks like `xpzgkwrb`)
3. Open `index.html`, find this line:
   ```html
   <form id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID"
   ```
4. Replace `YOUR_FORM_ID` with your actual ID
5. Done — form submissions go straight to your email inbox

---

## Deploying to Netlify (Free hosting)

1. Go to **https://netlify.com** and sign up
2. Drag and drop the entire `vipanchee/` folder onto the Netlify dashboard
3. Your site is live instantly at a URL like `vipanchee-xyz.netlify.app`
4. To use a custom domain (e.g. `vipanchee.com`):
   - Buy the domain from GoDaddy / Namecheap
   - In Netlify → Domain Settings → Add custom domain
   - Follow the DNS instructions (takes ~10 minutes)

---

## Editing tips

- Open the project folder in **VS Code** (free at code.visualstudio.com)
- Install the **Live Server** extension — right-click `index.html` → Open with Live Server
  → Instant preview in your browser as you edit

---

## Want to add more sections?

The pattern for any new section is:
```html
<section id="your-section">
  <div style="max-width:1100px;margin:0 auto;">
    <!-- content -->
  </div>
</section>
<div class="kolam-border"></div>
```

And add a nav link:
```html
<li><a href="#your-section">Section Name</a></li>
```
