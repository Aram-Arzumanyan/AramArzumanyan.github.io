import ".././src/assets/style/global.scss";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./header";
import Home from "./home";
import Packages from "./packages";
import Services from "./services";
import Contact from "./contact";
import Designers from "./designers";
import Footer from "./footer";
import useLoader from "./useLoader";
import Loader from "./loaderAnim";
import { useEffect, useState } from "react";

function App() {
  let location = useLocation();
  let [s, setS] = useState(false);
  const { loading } = useLoader();
  useEffect(() => {
    setS(false);
  }, [location.pathname]);
  if (loading) {
    return <Loader />;
  }
  return (
    <div
      className="App "
      onClick={() => {
        setS(false);
      }}
    >
      <Header s={s} setS={setS} />
      <div style={{ width: "78%" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="packages" element={<Packages />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="designers" element={<Designers />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
