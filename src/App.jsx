import "./App.css";
import { Routes, Route } from "react-router-dom";
import DahsboardPage from "./pages/DashboardPage";
import AboutPage from "./pages/AboutPage";
import RentalDetailsPage from "./pages/RentalDetailsPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <div>
      <div className="pages">
        <Routes>
          <Route path="/" element={<DahsboardPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route
            path="/rental-details/:rentalId"
            element={<RentalDetailsPage />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
