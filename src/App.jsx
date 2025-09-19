import Homepage from "../pages/Homepage";
import MovieDetail from "../pages/MovieDetail";
import DefaultLayout from "../layout/DefaultLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Homepage />}/>
            <Route path="/movies/:id" element={<MovieDetail/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
