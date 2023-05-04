import "./searchItem.css";
import {Link} from "react-router-dom"

const SearchItem = ({item}) => {
  return (
    <div className="searchItem">
      <img
        //src={item.photos[0]}
        src="https://th.bing.com/th/id/R.b9ae60d323ebae2ff133fc0e11e50093?rik=oiP6VqHTIDEjhA&pid=ImgRaw&r=0"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">{item.distance} Distance to nearest city</span>
        
        <span className="siFeatures">
          {item.description}
        </span>
        
      </div>
      <div className="siDetails">
      { item.rating && <div className="siRating">
          <span>Excellent</span>
          <button>{item.rating}</button>
        </div>}
        <div className="siDetailTexts">
          <span className="siPrice">${item.CheapestPrice}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <Link to={`/hotels/${item._id}`}>
          <button className="siCheckButton">See availability</button>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
