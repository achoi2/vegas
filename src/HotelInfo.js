import Venetian from "./api/hotels/venetian.json";
import Tabs from "./Tabs";

function HotelInfo() {
  return (
    <div className="column">
      <div className="hotel-info">
        <div>
          <h1 className="hotel-name">{Venetian.name}</h1>
          <ul>
            <li>{Venetian.location.areaName}</li>
            <li>{Venetian.phoneNumber}</li>
            <li>Best Price Guarantee</li>
          </ul>
        </div>
        <div className="hotel-price-container">
            <span className="hotel-price">
                ${Venetian.price} <br />
            </span>
            <span className="hotel-price-text">
            HOTEL ROOMS FROM
            </span>
        </div>
      </div>
      <Tabs />
    </div>
  );
}

export default HotelInfo;
