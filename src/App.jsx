import {
  RouterProvider,
  createBrowserRouter,
 
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Main from "./layout/Main";
import DigitalMarketting from "./pages/Services/DigitalMarketting";
import { ScrollToTop } from "./components/ScrollToTop/ScrollToTop";
//import Contacts from "./pages/contact/Contacts";
import Contact from "./components/HomeComponents/Contact";
import Services from "./components/HomeComponents/Services";
import Commingsoon from "./pages/commingSoon/Commingsoon";



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
        {
          path: "/contact_us",
          element: <Contact/>,
        },
        {
          path: "/service",
          element:<Services/>,
        },
        {
          path: "/commingsoon",
          element:<Commingsoon/>,
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
