import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Main from "./layout/Main";
import DigitalMarketting from "./pages/Services/DigitalMarketting";
import { ScrollToTop } from "./components/ScrollToTop/ScrollToTop";
//import Contacts from "./pages/contact/Contacts";
import Contact from "./components/HomeComponents/Contact";
import Services from "./components/HomeComponents/Services";
import Commingsoon from "./pages/commingSoon/Commingsoon";
import AboutUs from "./pages/AboutUs";

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
          element: (
            <div className="mx-5 py-10 md:container md:mx-auto">
              <Contact />,
            </div>
          ),
        },
        {
          path: "/service",
          element: (
            <div className="mx-5 py-10 md:container md:mx-auto">
              <Services />,
            </div>
          ),
        },
        {
          path: "/commingsoon",
          element: <Commingsoon />,
        },
        {
          path: "/about_us",
          element: <AboutUs />,
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
