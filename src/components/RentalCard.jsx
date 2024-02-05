import { Link } from "react-router-dom";

export default function RentalCard({ rental }) {
  return (
    <div className="RentalCard" key={rental.id}>
      <Link to={`/rental-details/${rental.id}`}>
        <img />
        <div className="rental-info">
          <p>
            <b>{rental.name}</b>
          </p>
          <div className="rental-image-section">
            <img src={rental.image} />
            <div className="labels">
              {rental.price <= 80 && <span className="label">Great Deal</span>}
              {rental.review >= 90 && (
                <span className="label">Guest Favorites</span>
              )}
            </div>
            <div className="edit-travel">
              <span>♡</span>
            </div>
          </div>
          <p>
            <b>
              {rental.city}, {rental.country}
            </b>
          </p>
          {rental.review && (
            <p>
              <b>Score:</b> {rental.review}
            </p>
          )}
          <span>{rental.roomType}</span>
          {rental.neighbourhood && <span> - {rental.neighbourhood}</span>}
          <p>€ {rental.price} night</p>
        </div>
      </Link>
    </div>
  );
}
