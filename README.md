# Purity UI Dashboard

A responsive React dashboard application built with React, JavaScript, and Tailwind CSS. This project includes a fully functional dashboard and profile page with interactive elements.

## Tech Stack

- **React** - JavaScript library for building user interfaces
- **Recharts** - Composable charting library for interactive data visualization.
- **JavaScript** - Programming language
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **Vite** - Build tool and development server

## Features

### Dashboard Page
- Real-time statistics cards (Today's Money, Today's Users, New Clients, Total Sales)
- Interactive sales overview chart
- Active users metrics
- Projects table with progress tracking
- Orders timeline
- Responsive grid layout

### Profile Page
- Pencil icon opens a modal to edit and update profile.
- User profile header with navigation tabs
- Platform settings with functional toggle switches
- Profile information display
- Conversations section with reply functionality
- Projects gallery with "Create New Project" feature
- Fully responsive design

## Interactive Elements

All UI elements are fully functional:
- Toggle switches in Platform Settings
- Navigation between pages (Dashboard, Profile, etc.)
- Reply buttons in Conversations
- View All buttons in Projects
- Create New Project button
- Responsive mobile menu
- All buttons trigger appropriate actions (alerts/console logs)

## Installation

Install dependencies using yarn:

```bash
yarn install
```

## Development

Start the development server:

```bash
yarn dev
```

The application will be available at `http://localhost:5173`

## Build

Create a production build:

```bash
yarn build
```

## Project Structure

```
src/
├── components/
│   ├── dashboard/
│   │   ├── DocumentCard.jsx
│   │   ├── OrdersOverview.jsx
│   │   ├── ProjectsTable.jsx
│   │   ├── RocketCard.jsx
│   │   ├── SalesChart.jsx
│   │   ├── SalesOverView.jsx
│   │   └── StatCard.jsx
│   ├── modal/
│   │   ├── CreateProjectModal.jsx
│   │   ├── EditProfileModal.jsx
│   │   ├── ViewProjectModal.jsx
│   ├── profile/
│   │   ├── Conversations.jsx
│   │   ├── PlatformSettings.jsx
│   │   ├── ProfileInformation.jsx
│   │   └── ProfileProjects.jsx
│   │   └── Teams.jsx
│   ├── Header.jsx
│   └── Sidebar.jsx
├── data/
│   └── mockData.js
├── pages/
│   ├── Dashboard.jsx
│   └── Profile.jsx
├── App.jsx
└── main.jsx
```

## Responsive Design

The application is fully responsive and works seamlessly across:
- Desktop (1024px and above)
- Tablet (768px - 1023px)
- Mobile (below 768px)

Features include:
- Collapsible sidebar on mobile
- Responsive grid layouts
- Adaptive typography
- Touch-friendly interactive elements

## State Management

The application uses React hooks for state management:
- `useState` for local component state
- Props for data flow between components
- Event handlers for user interactions

## Mock Data

All data is stored in `src/data/mockData.js` and includes:
- Dashboard statistics
- Active users data
- Projects list
- Orders timeline
- Profile settings
- Conversations
- Profile projects

## Design

The design follows a modern, clean aesthetic with:
- Teal accent color scheme
- Card-based layout
- Smooth transitions and hover effects
- Proper spacing and typography
- Professional color hierarchy

## Notes

- No backend integration required
- All interactive elements are functional with alert/console log responses
- Images are sourced from Pexels for demonstration purposes
- The application uses a simple state-based routing system
