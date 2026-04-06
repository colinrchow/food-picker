# Food Picker

A small React app that solves decision paralysis around choosing what to eat. Built as a personal gift.

**Live app:** [colinrchow.github.io/food-picker](https://colinrchow.github.io/food-picker/)

Instead of presenting an overwhelming list of options, it guides the user through a short series of choices that narrow down to a single dish — using a binary elimination mechanic borrowed from tournament brackets.

---

## How it works

The app moves through four steps:

1. **Weight** — The user picks how heavy they want the meal: Light, Medium, or Heavy. One tap, no overthinking.
2. **Cuisine** — A head-to-head bracket eliminates cuisines one at a time until one remains.
3. **Dish** — The same bracket mechanic plays out at the dish level, with the dish pool filtered by the weight selection from step one.
4. **Result** — The winning dish is revealed with a short, celebratory message.

At every step, the user is only ever making a binary choice: *which of these two do I want less?* This reframes the decision as elimination rather than selection, which is significantly easier under decision fatigue.

---

## Tech

- **React** — functional components, `useState` / `useRef` for state management
- **Vite** — development server and build tooling
- **No external UI libraries** — all components and styles written from scratch

---

## Running locally

```bash
npm install
npm run dev
```

---

## Design decisions

**Binary elimination over a list UI.** Picking from a grid of 10 cuisines requires comparing everything at once. A head-to-head bracket only ever asks one question at a time, which is easier to answer and more fun.

**Weight as the filtering axis.** An earlier version used multi-tag "vibes" (cozy, indulgent, fresh, etc.) to filter dishes. This turned out to be too much cognitive overhead for what should be a two-second decision. Collapsing it to a single light/medium/heavy axis captures most of the useful signal with almost none of the friction.

**No backend.** Dish pools are hardcoded per cuisine and filtered client-side. For the scale and purpose of this app, a database would be unnecessary complexity.
