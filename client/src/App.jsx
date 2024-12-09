import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Page from "./Pages/page";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Page />
      </div>
    ),
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
export default App;
