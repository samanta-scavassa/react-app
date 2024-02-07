import { useState } from "react";

export default function AddRental(props) {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [accommodates, setAccommodates] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [beds, setBeds] = useState("");
  const [baths, setBaths] = useState("");
  const [description, setDescription] = useState("");
  const [hostName, setHostName] = useState("");
  const [price, setPrice] = useState("");
  const [roomType, setRoomType] = useState("");

  const handleTitle = (e) => setTitle(e.target.value);
  const handleImageInput = (e) => setImage(e.target.value);
  const handlePropertyTypeInput = (e) => setPropertyType(e.target.value);
  const handleCityInput = (e) => setCity(e.target.value);
  const handleCountryInput = (e) => setCountry(e.target.value);
  const handleAccomodatesInput = (e) => setAccommodates(e.target.value);
  const handleBedroomsInput = (e) => setBedrooms(e.target.value);
  const handleBedsInput = (e) => setBeds(e.target.value);
  const handleBathsInput = (e) => setBaths(e.target.value);
  const handleDescriptionInput = (e) => setDescription(e.target.value);
  const handleHostNameInput = (e) => setHostName(e.target.value);
  const handlePriceInput = (e) => setPrice(e.target.value);
  const handleRoomTypeInput = (e) => setRoomType(e.target.value);

  const handleSubmit = (e) => {
    console.log("test", props);
    e.preventDefault();
    const newRental = {
      id: Math.round(Math.random() * 1000).toString(),
      name: title,
      picture_url: { url: image },
      property_type: propertyType,
      city,
      country,
      accommodates,
      bedrooms,
      beds,
      baths,
      description,
      host_name: hostName,
      price,
      room_type: roomType,
    };
    props.addNewRental(newRental);
    setImage("");
    setTitle("");
    setPropertyType("");
    setCity("");
    setCountry("");
    setAccommodates("");
    setBedrooms("");
    setBeds("");
    setBaths("");
    setDescription("");
    setHostName("");
    setPrice("");
    setRoomType("");
  };

  return (
    <div className="DashboardComponent">
      <div className="AddRentalForm">
        <form onSubmit={handleSubmit}>
          <span>Add Rental</span>
          <div>
            <label>
              Title:
              <input
                name="title"
                type="text"
                value={title}
                onChange={handleTitle}
              />
            </label>

            <label>
              Image:
              <input
                name="image"
                type="text"
                value={image}
                onChange={handleImageInput}
              />
            </label>

            <label>
              Property Type:
              <input
                name="property_type"
                type="text"
                value={propertyType}
                onChange={handlePropertyTypeInput}
              />
            </label>

            <label>
              City:
              <input
                name="city"
                type="text"
                value={city}
                onChange={handleCityInput}
              />
            </label>

            <label>
              Country:
              <input
                name="country"
                type="text"
                value={country}
                onChange={handleCountryInput}
              />
            </label>

            <label>
              Number of Guests:
              <input
                name="accommodates"
                type="number"
                value={accommodates}
                onChange={handleAccomodatesInput}
              />
            </label>

            <label>
              Number of Bedrooms:
              <input
                name="bedrooms"
                type="number"
                value={bedrooms}
                onChange={handleBedroomsInput}
              />
            </label>

            <label>
              Number of Beds:
              <input
                name="beds"
                type="number"
                value={beds}
                onChange={handleBedsInput}
              />
            </label>

            <label>
              Number of Bathrooms:
              <input
                name="baths"
                type="number"
                value={baths}
                onChange={handleBathsInput}
              />
            </label>

            <label>
              Price:
              <input
                name="price"
                type="text"
                value={price}
                onChange={handlePriceInput}
              />
            </label>

            <label>
              Room Type:
              <input
                name="roomType"
                type="text"
                value={roomType}
                onChange={handleRoomTypeInput}
              />
            </label>

            <label>
              Description:
              <input
                name="description"
                type="text"
                value={description}
                onChange={handleDescriptionInput}
              />
            </label>

            <label>
              Host name:
              <input
                name="host_name"
                type="text"
                value={hostName}
                onChange={handleHostNameInput}
              />
            </label>
          </div>
          <div>
            <button type="submit" className="AddRental">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
