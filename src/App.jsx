import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Main from "./layout/Main";
import DigitalMarketting from "./pages/Services/DigitalMarketting";
import { ScrollToTop } from "./components/ScrollToTop/ScrollToTop";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/digital_marketting",
          element: <DigitalMarketting />,
        },
      ],
    },
  ]);
  return (
    <main>
      <RouterProvider router={router}>
        <ScrollToTop />
      </RouterProvider>
    </main>
  );
}

export default App;
