export default function RentalCard({ rental }) {
  function generatePriceLabel(totalCopricest) {
    if (totalCost <= 80) {
      return <span className="Label">Great Deal</span>;
    } else if (totalCost >= 300) {
      return <span className="Label">Premium</span>;
    }
  }

  return (
    <div className="RentalCard" key={rental.id}>
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
            {rental.country}, {rental.city}
          </b>
        </p>
        {rental.review && (
          <p>
            <b>Score:</b> {rental.review}
          </p>
        )}
        <span>{rental.roomType}</span>{" "}
        {rental.neighbourhood && <span> - {rental.neighbourhood}</span>}
        <p>€ {rental.price} night</p>
      </div>
    </div>
  );
}
