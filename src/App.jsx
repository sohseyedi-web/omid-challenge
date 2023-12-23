import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Layout from "./components/layout/Layout";
import { useState, useEffect } from "react";

function App() {
  const [active, setActive] = useState(window.innerWidth > 1024);
  const updateMedia = () => {
    setActive(window.innerWidth > 1024);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, [active]);

  return (
    <section className="flex container mx-auto ">
      <Sidebar active={active} setActive={setActive} />
      <div className="flex-1 px-5">
        <Navbar active={active} setActive={setActive} />
        <Layout />
      </div>
    </section>
  );
}

export default App;
