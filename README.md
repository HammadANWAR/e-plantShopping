# Paradise Nursery Shopping Application

Paradise Nursery is a React-based online plant shop where users can browse houseplants, view plant information, add plants to a shopping cart, manage quantities, and view the total cost of their shopping cart.

## Features

- Responsive Paradise Nursery landing page
- Company information/About Us page
- Three different plant categories
- At least six unique plants in each category
- Plant thumbnails
- Plant names and prices
- Add to Cart functionality
- Add to Cart button becomes disabled after adding a plant
- Dynamic shopping cart item count
- Increase item quantity
- Decrease item quantity
- Delete items from the shopping cart
- Individual plant total prices
- Overall shopping cart total
- Checkout button with "Coming Soon" message
- Continue Shopping button
- React Router navigation
- Redux Toolkit for shopping cart state management
- Responsive CSS styling

## Plant Categories

### Indoor Plants

1. Snake Plant
2. Peace Lily
3. ZZ Plant
4. Spider Plant
5. Rubber Plant
6. Areca Palm

### Succulents

1. Aloe Vera
2. Echeveria
3. Jade Plant
4. Haworthia
5. String of Pearls
6. Zebra Haworthia

### Tropical Plants

1. Monstera
2. Bird of Paradise
3. Calathea
4. Philodendron
5. Fiddle Leaf Fig
6. Croton

## Technologies Used

- React
- Vite
- JavaScript
- React Router
- Redux Toolkit
- React Redux
- CSS
- HTML

## Project Structure

```text
paradise-nursery
│
├── README.md
│
├── src
│   ├── components
│   │   ├── AboutUs.jsx
│   │   ├── Navbar.jsx
│   │   └── ProductList.jsx
│   │
│   ├── data
│   │   └── plants.js
│   │
│   ├── pages
│   │   ├── Cart.jsx
│   │   └── Plants.jsx
│   │
│   ├── redux
│   │   ├── CartSlice.jsx
│   │   └── store.js
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── package.json
└── vite.config.js