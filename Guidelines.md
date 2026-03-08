# React + TypeScript Task
## Build a Netflix-Like TV Shows App

In this exercise you will build a **Netflix-style discovery app** using the **TVmaze API**.

The goal is to create a polished UI where users can search for shows, browse results, and view details.

---

# Tech Requirements

You must use:

- React
- TypeScript
- Axios
- MUI (Material UI)

Install dependencies:

```bash
npm install axios @mui/material @mui/icons-material @emotion/react @emotion/styled
```

---

# API

Base URL

```
https://api.tvmaze.com
```

Search shows

```
/search/shows?q=QUERY
```

Example

```
https://api.tvmaze.com/search/shows?q=friends
```

Get show by id

```
/shows/:id
```

Example

```
https://api.tvmaze.com/shows/431
```

---

# Project Structure (Suggested)

```
src/
 ├── components/
 │    ├── Header.tsx
 │    ├── HeroBanner.tsx
 │    ├── SearchBar.tsx
 │    ├── ShowsGrid.tsx
 │    ├── ShowCard.tsx
 │    └── ShowDetailsDialog.tsx
 │
 ├── services/
 │    └── tvmazeApi.ts
 │
 ├── types/
 │    └── show.ts
 │
 ├── App.tsx
 └── main.tsx
```

---

# Task 1 — Create Axios API Service

Create a file:

```
src/services/tvmazeApi.ts
```

Requirements:

- Create an Axios instance
- Set the base URL
- Create API functions

Functions to implement:

```
searchShows(query)
getShowById(id)
```

All components should call the API through this service.

Do NOT call Axios directly inside components.

---

# Task 2 — Create TypeScript Types

Create:

```
src/types/show.ts
```

Define types for:

- Show
- ShowImage
- ShowRating
- SearchShowResult

Use the API response to determine the correct fields.

---

# Task 3 — Create App Layout

Create a basic page layout.

Use MUI components such as:

- Container
- Box
- Grid
- Typography

Layout sections:

```
Header
HeroBanner
SearchBar
ShowsGrid
```

---

# Task 4 — Header

Create a header with:

- App title/logo
- Search input
- Favorites icon
- Favorites counter

Use MUI components:

```
AppBar
Toolbar
IconButton
Typography
TextField
```

---

# Task 5 — Search Shows

Implement search functionality.

Steps:

1. User types into the search input
2. Call the TVmaze API using Axios
3. Store the results in state
4. Display the results in the grid

Handle:

- loading state
- error state
- empty results

---

# Task 6 — Shows Grid

Create a responsive grid of show cards.

Each card should display:

- show image
- show title
- rating
- genres
- premiered year

Use MUI components:

```
Grid
Card
CardMedia
CardContent
Typography
Chip
```

---

# Task 7 — Show Card Component

Create a reusable `ShowCard` component.

Props should include:

- show
- onClick handler

When a card is clicked, open a details view.

---

# Task 8 — Show Details Dialog

Create a modal using MUI Dialog.

Display:

- show image
- full title
- summary
- genres
- language
- rating
- status
- premiered date

Use components such as:

```
Dialog
DialogTitle
DialogContent
Typography
Chip
```

---

# Task 9 — Favorites Feature

Users should be able to:

- add shows to favorites
- remove shows from favorites

Requirements:

- favorites counter in header
- visual indicator on cards
- favorites stored in component state

---

# Task 10 — Hero Banner

At the top of the page display a **featured show**.

Show:

- large background image
- show title
- short summary
- button "More Info"

Use the first result returned from the API as the featured show.

---

# Required UX States

Your app must include:

- loading state
- error state
- empty results state
- fallback image if no poster exists
- responsive layout

---

# Bonus Tasks

## Bonus 1 — Save Favorites

Persist favorites in:

```
localStorage
```

---

## Bonus 2 — Debounced Search

Avoid sending an API request on every keystroke.

Implement a **debounced search input**.

---

## Bonus 3 — Skeleton Loading

Use MUI Skeleton components while data is loading.

---

## Bonus 4 — Episodes

Fetch episodes for the selected show.

Endpoint:

```
/shows/:id/episodes
```

Display a small list of episodes in the details dialog.

---

## Bonus 5 — Netflix Styling

Improve UI to feel like Netflix:

- dark theme
- hover effects on cards
- larger hero banner
- smooth animations