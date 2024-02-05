import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import RentalsList from "../components/RentalsList";
import Sidebar from "../components/Sidebar";

export default function DahsboardPage() {
  return (
    <>
      <Navbar />
      <div className="rentals-section">
        <Sidebar />
        <RentalsList />
      </div>
      <Footer />
    </>
  );
}
