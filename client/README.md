# 🎨 HisaabKitab Client

This folder contains the **frontend** codebase for the HisaabKitab project. The frontend is built using modern tools like **React.js**, **TailwindCSS**, and **Vite**, providing a fast and responsive user interface. 💻

---

## **📦 Project Details**

### **Package Info**
- **Name**: `client`
- **Version**: `0.0.0`
- **Type**: `module`

### **Key Dependencies**
- **React & React DOM** (`^18.3.1`): Core for building the user interface.
- **React Router DOM** (`^7.0.2`): For seamless navigation between pages.
- **TailwindCSS** (`^3.4.16`): A utility-first CSS framework for rapid UI development.
- **Radix UI**: Accessible, unstyled components like `Accordion`, `Popover`, `Tooltip`, etc.
- **Framer Motion** (`^11.13.5`): Smooth animations and transitions.
- **Lucide React** (`^0.468.0`): Icon library for adding scalable, customizable icons.
- **Recharts** (`^2.14.1`): For creating data visualizations.
- **React Calendar** (`^5.1.0`): A customizable calendar component.

### **Dev Tools**
- **Vite** (`^6.0.3`): Lightning-fast build tool for development.
- **ESLint**: Linting and code quality assurance.
- **PostCSS** & **Autoprefixer**: For advanced CSS processing.
- **ShadCN UI**: Pre-styled components powered by Radix UI and TailwindCSS.
- **TailwindCSS Plugins**:
  - `tailwind-merge`: Merges Tailwind classes dynamically.
  - `tailwind-scrollbar-hide`: Hides scrollbars for cleaner UI.
  - `tailwindcss-animate`: Adds animation utilities.

---

## **🔧 Setup and Usage**

### **1. Prerequisites**
Ensure you have the following installed:
- **Node.js**: `v16.x` or later
- **npm**: `v7.x` or later

### **2. Installation**
1. Navigate to the `client` directory:
   ```bash
   cd client
2. Install dependencies:
  ```bash
  npm install
  ```
### **3. Development Server**
Start the development server:
```bash
 npm run dev
```
Here’s the comprehensive `README.md` file with all the requested sections included:

```markdown
# Project Setup and Run Instructions

## Setup Backend

```bash
cd Backend
npm install
```

## Setup Client

```bash
cd ../client
npm install
```

## Run Backend

```bash
cd ../Backend
npm start
```

## Run Client

```bash
cd ../client
npm run dev
```

---

# API Endpoints

## Authentication

- **Login**  
  `POST http://localhost:5001/api/auth/login`

- **Check Status**  
  `GET http://localhost:5001/api/auth/status`

- **Register**  
  `POST http://localhost:5001/api/auth/register`

## Transactions

- **Add Transaction**  
  `POST http://localhost:5001/api/transactions/addTransaction`

- **Get Transactions**  
  `GET http://localhost:5001/api/transactions/getTransactions`

- **Get Total Balance**  
  `GET http://localhost:5001/api/transactions/getTotalBalance`

---

# 🎨 Styling and Components

## 1. TailwindCSS

TailwindCSS is the primary framework for styling. To modify the theme:

Edit `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "#4CAF50",
        secondary: "#FFC107",
      },
    },
  },
};
```

## 2. ShadCN + Radix UI

This project utilizes **ShadCN** components, which are pre-built and accessible. **Radix UI** powers these components, providing modular building blocks.

### Installation

To install ShadCN and Radix UI:

1. Install ShadCN globally:

    ```bash
    npm install -g shadcn-ui
    ```

2. Add ShadCN to the project:

    ```bash
    npx shadcn add
    ```

3. Select the components you need, such as Accordion, Popover, Tooltip, etc.

For detailed setup, refer to the [ShadCN documentation](https://shadcn.dev).

## 3. Icons with Lucide React

We use **Lucide React** for scalable and customizable icons.

### Installation

To install Lucide React:

```bash
npm install lucide-react
```

### Usage

Here’s an example of how to use Lucide React icons:

```jsx
import { Home } from "lucide-react";

function MyIcon() {
  return <Home size={24} color="blue" />;
}
```

---

# 📜 Scripts

Here are the main scripts defined in the `package.json`:

## Development:

Starts a local development server:

```bash
npm run dev
```

## Build:

Builds the app for production:

```bash
npm run build
```

## Linting:

Runs ESLint to identify code quality issues:

```bash
npm run lint
```

## Preview:

Serves the built app for previewing production output:

```bash
npm run preview
```


