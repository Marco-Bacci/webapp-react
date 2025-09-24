import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import GlobalContext from "../src/contexts/GlobalContext";
import { useContext } from "react";
import Loader from "../components/Loader";
const DefaultLayout = () => {
  const {isLoading} = useContext(GlobalContext)
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <Outlet />
        </div>
         {isLoading && <Loader/>}
      </main>
    </>
  );
};

export default DefaultLayout;
