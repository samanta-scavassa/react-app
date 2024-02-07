import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import RentalDetailsPage from "./pages/RentalDetailsPage";
import NotFoundPage from "./pages/NotFoundPage";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import rentalsData from "./assets/rentals.json";
import { useState } from "react";

function App() {
  const [rentals, setRentals] = useState(rentalsData.results);

  const addNewRental = (newRental) => {
    const updatedRentals = [...rentals, newRental];
    setRentals(updatedRentals);
  };

  return (
    <div>
      <Navbar />
      <div className="pages">
        <Sidebar />
        <Routes>
          <Route
            path="/"
            element={<HomePage rentals={rentals} addNewRental={addNewRental} />}
          />
          <Route path="/about" element={<AboutPage />} />
          <Route
            path="/rental-details/:rentalId"
            element={<RentalDetailsPage rentals={rentals} />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
