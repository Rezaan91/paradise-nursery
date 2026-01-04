
# Paradise Nursery – Plant Shop (React + Redux Toolkit + Vite)

A simple plant shop demo that showcases a landing page, products listing, and a shopping cart with add/remove/update quantity using Redux Toolkit.

## Features
- Landing page with background image and **Get Started** CTA (\`src/App.jsx\`, styles in \`src/App.css\`)
- About page with company details (\`src/pages/AboutUs.jsx\`)
- Products listing with search, category filter, and sorting (\`src/pages/ProductList.jsx\`)
- Shopping cart page with quantity updates and item removal (\`src/pages/CartItem.jsx\`)
- Global state via Redux Toolkit (\`src/redux/CartSlice.jsx\` & \`src/redux/store.js\`)

## Tech Stack
- React 18, React Router 6
- Redux Toolkit & React‑Redux
- Vite build tool

## Getting Started

```bash
npm install
npm run dev
```
Open the printed localhost URL (usually http://localhost:5173).

## Project Structure
```text
src/
  App.jsx        # Landing page (Paradise Nursery) with "Get Started" button
  App.css        # Background image styles for landing page
  index.css
  main.jsx       # Router + Provider
  components/
    Header.jsx
    ProductCard.jsx
  pages/
    ProductList.jsx   # Product listing page
    CartItem.jsx      # Shopping Cart page
    AboutUs.jsx
  redux/
    CartSlice.jsx     # addItem, removeItem, updateQuantity reducers
    store.js
  data/
    products.js       # sample catalog
```

## Notes
- All images are loaded from Unsplash image URLs credited to their respective photographers.
