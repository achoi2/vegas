import venetian from "./assets/images/venetian.jpg";
import HotelInfo from "./HotelInfo";


function Header() {
  return (
    <div>
      <button className="back-button">SEE ALL LAS VEGAS HOTELS</button>
      <div className="header-container">
        <div>
          <img src={venetian} alt="venetian" className="venetian-img" />
        </div>
        <HotelInfo />
      </div>
    </div>
  );
}

export default Header;
