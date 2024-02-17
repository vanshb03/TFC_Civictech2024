import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Postdesktop = React.lazy(() => import("pages/Postdesktop"));
const Storesdesktop = React.lazy(() => import("pages/Storesdesktop"));
const Quickviewdesktop = React.lazy(() => import("pages/Quickviewdesktop"));
const ProductListingdesktop = React.lazy(
  () => import("pages/ProductListingdesktop"),
);
const Dropdowndesktop = React.lazy(() => import("pages/Dropdowndesktop"));
const Promotiondesktop = React.lazy(() => import("pages/Promotiondesktop"));
const Landingdesktop = React.lazy(() => import("pages/Landingdesktop"));
const Loginpage = React.lazy(() => import("pages/LoginPage"));

const Loading = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <img src="loading.gif" alt="Loading..." />
  </div>
);

const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<Loading />}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/loginpage" element={<Loginpage />} />
          <Route path="/landingdesktop" element={<Landingdesktop />} />
          <Route path="/promotiondesktop" element={<Promotiondesktop />} />
          <Route path="/dropdowndesktop" element={<Dropdowndesktop />} />
          <Route
            path="/productlistingdesktop"
            element={<ProductListingdesktop />}
          />
          <Route path="/quickviewdesktop" element={<Quickviewdesktop />} />
          <Route path="/storesdesktop" element={<Storesdesktop />} />
          <Route path="/postdesktop" element={<Postdesktop />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
