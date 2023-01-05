import {
    createBrowserRouter,
    RouterProvider,
    Route,
    createRoutesFromElements
  } from "react-router-dom";
import KategorieFiltered from "../components/filteredComponents/KategorieFiltered";
  import KategorienListe from '../components/Lebensmittel/KategorienListe'
import Lebensmittel from "../components/Lebensmittel/Lebensmittel";
  
  // You can do this:
   const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
         <Route path="/lebensmittel" element={<Lebensmittel />} />
        <Route path="/kategorien" element={<KategorienListe />} />
        <Route path="/kategorien/:kategorie" element={<KategorieFiltered />} />
        <Route path="/" element={<h1 >About</h1>} />
      </Route>
    )
  );
  
  export default router;