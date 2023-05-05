import "./searchItem.css";

const SearchItem = ({item}) => {
  return (
    <div className="searchItem">
      <img
        src={item.image}
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siSubtitle"> {item.departureCity} -  {item.arrivalCity}</span>
        <span className="siSubtitle"> {item.cabinClass[0]},{item.cabinClass[1]}, {item.cabinClass[2]}</span>
        <span className="siDistance">
          Number one flight experience
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        
        <div className="siDetailTexts">
          <span className="siPrice">LKR {item.cheapestPrice}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          
          <button className="siCheckButton">Book Now</button>
          
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
