import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layaout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Redirect from "./pages/Redirect";

function App() {
  return (
    <React.Fragment>
      <Layout>
        <Suspense fallback={<h2>Cargando</h2>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:handle" element={<Redirect />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </React.Fragment>
  );
}

export default App;
