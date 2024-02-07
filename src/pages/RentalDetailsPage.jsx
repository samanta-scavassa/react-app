import { Link, useParams } from "react-router-dom";

export default function RentalDetailsPage({ rentals }) {
  const { rentalId } = useParams();
  const rental = rentals.find((rental) => rental.id === rentalId);

  function calculateHostingTime(hostSince) {
    const currentDate = new Date().getTime();
    const hostSinceDate = new Date(hostSince).getTime();
    return Math.round((currentDate - hostSinceDate) / 31536000000);
  }

  return (
    <div className="ItemDetailsCard">
      {rental && (
        <div className="RentalCardDetails">
          <div className="RentalItemInfo">
            <div className="SaveRental">
              <h1>{rental.name}</h1>
              <button>♡ Save</button>
            </div>
            <img src={rental.picture_url.url} />
            <h2>
              {rental.property_type} in {rental.city}, {rental.country}
            </h2>
            <p>
              {rental.accommodates} guests - {rental.bedrooms} bedrooms -{" "}
              {rental.beds} beds - {rental.bathrooms} baths
            </p>
            {rental.review && (
              <p>
                <b>Score:</b> {rental.review}
              </p>
            )}
            {rental.host_name && <h4>Hosted by {rental.host_name}</h4>}
            {console.log(rental)}
            <p>{calculateHostingTime(rental.host_since)} years hosting</p>
            <p>{rental.description}</p>
            <div className="RentalButtons">
              <button className="ReserveButton">Reserve</button>
              <Link to="/">
                <button className="BackButton">Back</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
