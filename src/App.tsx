import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";
const HomePage = lazy(() => import("./pages/HomePage"));
const NewsPage = lazy(() => import("./pages/NewsPage"));
const ProfilePage = lazy(() => import("./pages/ProfilePage"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default App;
