import Homepage from "../pages/Homepage";
import MovieDetail from "../pages/MovieDetail";
import DefaultLayout from "../layout/DefaultLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "../pages/NotFound";
import GlobalContext from "./contexts/GlobalContext";
import { useState } from "react";
function App() {
  const [isLoading, setIsLoading] = useState(false)
  return (
    <GlobalContext.Provider value = {{isLoading, setIsLoading}}>
      <BrowserRouter> 
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/movies/:id" element={<MovieDetail />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
  );
}

export default App;
