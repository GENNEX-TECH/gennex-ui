# 🎨 Gennex UI Library

[![npm version](https://img.shields.io/npm/v/@gennextech/ui.svg)](https://www.npmjs.com/package/@gennextech/ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

A modern, production-ready React UI component library built with Material-UI v7, React Admin, and Radix Colors. Features 12 beautiful themes with real-time dark/light mode switching and fully customizable theming system.

**Built with**: React 19 • MUI v7 • React Admin • Radix Colors • TypeScript • Vite

---

## ✨ Features

- 🎨 **12 Pre-built Themes** - Blue, Violet, Indigo, Orange, Cyan, Amber, Grass, Tomato, Slate, Mauve
- 🌓 **Dark/Light Mode** - Real-time theme switching with persistent preferences
- 🎯 **Type-Safe** - Full TypeScript support with comprehensive type definitions
- ⚡ **Performance Optimized** - Tree-shakeable, minimal bundle size
- 🎛️ **Customizable** - Override any theme settings via configuration
- 🔧 **React Admin Ready** - Seamless integration with React Admin ecosystem
- 📦 **Production Ready** - Battle-tested components for enterprise applications

---

## 📦 Installation

```bash
# npm
npm install @gennextech/ui

# yarn
yarn add @gennextech/ui

# pnpm
pnpm add @gennextech/ui
```

### Peer Dependencies

This library requires the following peer dependencies:

```bash
npm install @mui/material @mui/icons-material @emotion/react @emotion/styled
npm install react-admin ra-core ra-ui-materialui
npm install @tanstack/react-query
npm install react react-dom react-router-dom
```

---

## 🚀 Quick Start

### 1. Wrap Your App with Theme Provider

```tsx
// src/App.tsx or src/main.tsx
import React from 'react';
import { GlobalThemeContextProvider } from '@gennextech/ui';
import { Admin, Resource } from 'react-admin';
import dataProvider from './dataProvider';

export default function App() {
  return (
    <GlobalThemeContextProvider>
      <Admin dataProvider={dataProvider}>
        {/* Your Resources */}
        <Resource name="users" list={UserList} />
      </Admin>
    </GlobalThemeContextProvider>
  );
}
```

### 2. Use Theme Components

```tsx
import { ThemeSwapper } from '@gennextech/ui';

// Add theme switcher to your layout
function MyLayout() {
  return (
    <div>
      <header>
        <ThemeSwapper />
      </header>
      {/* Your layout content */}
    </div>
  );
}
```

### 3. Programmatic Theme Control

```tsx
import { useGlobalThemeContext } from '@gennextech/ui';

function ThemeControls() {
  const { themeName, setThemeName, themeMode, toggleThemeMode } = useGlobalThemeContext();

  return (
    <div>
      <button onClick={() => setThemeName('violet')}>Switch to Violet Theme</button>
      <button onClick={() => setThemeName('orange')}>Switch to Orange Theme</button>
      <button onClick={toggleThemeMode}>
        Toggle {themeMode === 'dark' ? 'Light' : 'Dark'} Mode
      </button>
      <p>Current Theme: {themeName}</p>
    </div>
  );
}
```

---

## 🎨 Available Themes

| Theme      | Light Color | Dark Color | Best For                     |
| ---------- | ----------- | ---------- | ---------------------------- |
| **blue**   | `#0090ff`   | `#52a8ff`  | Default, Banking, Corporate  |
| **violet** | `#6e56cf`   | `#a78bfa`  | SaaS, Dashboards, Modern     |
| **indigo** | `#3e63dd`   | `#6366f1`  | Tech, Startups, Innovation   |
| **orange** | `#f76b15`   | `#fb923c`  | Marketing, Creative, Bold    |
| **grass**  | `#46a758`   | `#4ade80`  | Eco, Health, Fintech         |
| **cyan**   | `#00a2c7`   | `#22d3ee`  | Payment, Finance, Trust      |
| **amber**  | `#ffc53d`   | `#fbbf24`  | Highlight, Warnings, Energy  |
| **tomato** | `#e54d2e`   | `#f87171`  | Error, Alert, Urgent         |
| **slate**  | `#8b8d98`   | `#94a3b8`  | Neutral, Admin, Professional |
| **mauve**  | `#8e8c99`   | `#cbd5e1`  | Minimal, Clean, Elegant      |

---

## 🔧 Advanced Configuration

### Custom Theme Creation

```tsx
import { renderTheme } from '@gennextech/ui';

const customTheme = renderTheme({
  mode: 'dark',
  preset: 'violet',
  overrideOptions: {
    palette: {
      background: {
        default: '#0f0a1a',
        paper: '#1a0a2e',
      },
    },
    typography: {
      fontFamily: '"Inter", sans-serif',
    },
  },
});
```

### Custom Component Overrides

```tsx
import { renderTheme } from '@gennextech/ui';

const themeWithCustomButton = renderTheme({
  mode: 'light',
  preset: 'blue',
  overrideComponents: (theme) => ({
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: 'none',
        },
      },
    },
  }),
});
```

---

## 📚 API Reference

### `GlobalThemeContextProvider`

Main provider component that wraps your application.

**Props**: `{ children: React.ReactNode }`

### `useGlobalThemeContext()`

Hook to access and control theme state.

**Returns**:

```typescript
{
  theme: Theme;                      // Current theme object
  themeName: ThemeName;              // Current theme name
  setThemeName: (name: ThemeName) => void;  // Change theme
  themeMode: 'light' | 'dark';       // Current mode
  toggleThemeMode: () => void;       // Toggle light/dark
  locale: string;                    // Current locale
  setLocale: (locale: string) => void;  // Change locale
}
```

### `ThemeSwapper`

Pre-built component for theme switching UI.

**Props**:

```typescript
{
  expanded?: boolean;  // Show expanded menu (default: false)
}
```

### `renderTheme(options)`

Utility function to create custom themes.

**Parameters**:

```typescript
{
  mode: 'light' | 'dark';           // Theme mode
  preset?: ThemePresetName;         // Base theme preset
  overrideOptions?: ThemeOptions;   // MUI theme overrides
  overrideComponents?: (theme: Theme) => Components;  // Component overrides
}
```

---

## 🧩 Components

### Navigation Components

```tsx
import { Breadcrumb, ScrollTop, SimpleBarScroll } from '@gennextech/ui';

// Breadcrumb navigation
<Breadcrumb
  resources={{
    users: { url: '/users', title: 'Users' },
    posts: { url: '/posts', title: 'Posts' },
  }}
/>

// Auto-scroll to top on route change
<ScrollTop>
  <YourContent />
</ScrollTop>

// Custom scrollbar
<SimpleBarScroll sx={{ maxHeight: 400 }}>
  <LongContent />
</SimpleBarScroll>
```

### Layout Components

```tsx
import { NavItem } from '@gennextech/ui';
import { HomeIcon, UsersIcon } from 'lucide-react';

const menuItems = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    type: 'item',
    url: '/dashboard',
    icon: <HomeIcon />,
    breadcrumbs: true,
  },
  {
    id: 'users',
    title: 'Users',
    type: 'item',
    url: '/users',
    icon: <UsersIcon />,
    breadcrumbs: true,
  },
];

<NavItem items={menuItems} item={menuItems[0]} />;
```

---

## 🎯 TypeScript Support

Full TypeScript support with comprehensive type definitions:

```typescript
import type {
  Theme,
  ThemeName,
  ThemeMode,
  PresetTheme,
  MenuItemProps,
  BreadcrumbProps,
} from '@gennextech/ui';
```

---

## 🌐 Localization

The library supports localization through the theme context:

```tsx
const { locale, setLocale } = useGlobalThemeContext();

// Change language
setLocale('en'); // English
setLocale('vi'); // Vietnamese
```

---

## 📦 Bundle Size

The library is optimized for tree-shaking. Import only what you need:

```tsx
// Import specific components
import { ThemeSwapper, Breadcrumb } from '@gennextech/ui';

// Import specific utilities
import { renderTheme } from '@gennextech/ui';
```

---

## 🤝 Integration Examples

### With React Admin

```tsx
import { Admin, Resource, Layout } from 'react-admin';
import { GlobalThemeContextProvider, ThemeSwapper } from '@gennextech/ui';

const MyLayout = (props) => (
  <Layout {...props}>
    <ThemeSwapper />
    {props.children}
  </Layout>
);

function App() {
  return (
    <GlobalThemeContextProvider>
      <Admin layout={MyLayout} dataProvider={dataProvider}>
        <Resource name="users" list={UserList} />
      </Admin>
    </GlobalThemeContextProvider>
  );
}
```

### With Custom Router

```tsx
import { BrowserRouter } from 'react-router-dom';
import { GlobalThemeContextProvider } from '@gennextech/ui';

function App() {
  return (
    <GlobalThemeContextProvider>
      <BrowserRouter>
        <YourRoutes />
      </BrowserRouter>
    </GlobalThemeContextProvider>
  );
}
```

---

## 🔒 CSS Variables

The library automatically injects CSS variables for easy styling:

```css
:root {
  --primary-main: #0090ff;
  --primary-dark: #006bd6;
  --primary-contrast: #ffffff;
  --bg-default: #ffffff;
  --bg-paper: #ffffff;
  --text-primary: rgba(0, 0, 0, 0.87);
}
```

Use them in your custom CSS:

```css
.my-custom-element {
  background-color: var(--primary-main);
  color: var(--primary-contrast);
}
```

---

## 🐛 Troubleshooting

### Theme not applying?

Make sure `GlobalThemeContextProvider` wraps your entire app:

```tsx
// ✅ Correct
<GlobalThemeContextProvider>
  <Admin>...</Admin>
</GlobalThemeContextProvider>

// ❌ Wrong
<Admin>
  <GlobalThemeContextProvider>...</GlobalThemeContextProvider>
</Admin>
```

### TypeScript errors?

Ensure you have all peer dependencies installed and TypeScript version >= 5.0

```bash
npm install --save-dev typescript@~5.9.3
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

MIT © [Gennex Technology Vietnam Ltd.](https://github.com/Kachitaro/gennex-ui)

---

## 🙏 Acknowledgments

- Design inspiration: [shadcn/ui](https://ui.shadcn.com/)
- Color system: [Radix Colors](https://www.radix-ui.com/colors)
- Component library: [Material-UI](https://mui.com/)

---

## 📞 Support & Contact

- 📧 Email: [Coming Soon]
- 🐛 Issues: [GitHub Issues](https://github.com/Kachitaro/gennex-ui/issues)
- 📖 Documentation: [Coming Soon]

---

**Made with ❤️ by Gennex Technology Vietnam Ltd.**
