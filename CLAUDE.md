You are helping build a food decision app for a specific user's girlfriend who experiences decision paralysis when choosing what to eat.

## App concept
A food picker that ends in a binary elimination game at the dish level.

## Core flow
1. User picks how heavy they want the meal: Light, Medium, or Heavy — one tap, auto-advances
2. Binary elimination for cuisine: two cuisines shown at a time, user picks the one they want less, repeat until one remains
3. Binary elimination for dish: same mechanic, dish pool filtered by the weight selection from step one
4. Result screen: winning dish + a short fun hardcoded line (randomly selected from a pool of 40)

## Tech decisions
- Frontend: React + Vite
- Dish pools: hardcoded per cuisine in `src/data/dishes.js`, tagged with `weight: ['light', 'medium', 'heavy']`
- No backend, no API calls — fully client-side
- Deployed via GitHub Actions to GitHub Pages

## Architecture
- `src/components/EliminationGame.jsx` — shared component used by both cuisine and dish elimination screens
- `src/utils/shuffle.js` — shared Fisher-Yates shuffle utility
- `src/screens/` — VibeScreen, CuisineScreen, EliminationScreen, ResultScreen
- `src/data/dishes.js` — dish pools with weight tags

## Code style
- Functional React components
- Clean, minimal UI — this is used by a real person as a gift
- No unnecessary comments
- Keep state management simple (useState/useRef, no Redux)

## What's built
The app is complete. New work should be incremental improvements — adding dishes, tweaking UI, or fixing bugs.
