import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import { PublicRoute } from "./components/PublicRoute/PublicRoute";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";
import { SignInPage } from "./pages/SignInPage/SignInPage";
import { SignUpPage } from "./pages/SignUpPage/SignUpPage";
const HomePage = lazy(() => import("./pages/HomePage"));
const NewsPage = lazy(() => import("./pages/NewsPage"));
const ProfilePage = lazy(() => import("./pages/ProfilePage"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/" element={<PublicRoute />}>
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/signup" element={<SignUpPage />} />
          </Route>
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/profile" element={<ProfilePage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
