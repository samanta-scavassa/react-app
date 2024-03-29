import RentalCard from "./RentalCard";

export default function RentalsList({ rentals }) {
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
          accommodates: rentalData.accommodates,
          bedrooms: rentalData.bedrooms,
          beds: rentalData.beds,
          bathrooms: rentalData.bathrooms,
          hostName: rentalData.host_name,
          hostSince: rentalData.host_since,
          space: rentalData.space,
        };
        return <RentalCard key={rental.id} rental={rental} />;
      })}
    </div>
  );
}
