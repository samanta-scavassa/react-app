import rentalsData from "../assets/rentals.json";

import { useState } from "react";
import RentalCard from "./RentalCard";

export default function RentalsList() {
  const [rentals, setRentals] = useState(rentalsData.results);

  return (
    <div className="rental-data-section">
      {rentals.map((rentalData) => {
        const rental = {
          id: rentalData.id,
          country: rentalData.country,
          city: rentalData.city,
          image: rentalData.picture_url.url,
          name: rentalData.name,
          review: rentalData.review_scores_rating,
          roomType: rentalData.room_type,
          neighbourhood: rentalData.neighbourhood,
          price: rentalData.price,
        };
        return <RentalCard key={rental.id} rental={rental} />;
      })}
    </div>
  );
}
