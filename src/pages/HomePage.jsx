import AddRental from "../components/AddRental";
import RentalsList from "../components/RentalsList";

export default function HomePage(props) {
  return (
    <div className="RentalsPage">
      <AddRental addNewRental={props.addNewRental} />
      <div className="rentals-section">
        <RentalsList
          rentals={props.rentals}
          addNewRental={props.addNewRental}
        />
      </div>
    </div>
  );
}
