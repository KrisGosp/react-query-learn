import { createBrowserRouter } from "react-router-dom";
import HomePage from "../HomePage";
import About from "../About";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/users", element: <About /> },
]);

export default router;
