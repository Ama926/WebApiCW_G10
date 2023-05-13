import "./list.css";
import useFetch from "../../hooks/useFetch";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";
import { useNavigate } from "react-router-dom";

const List = ({type}) => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [departure, setDeparture] = useState(location.state.departure);
  const [seatCount, setseatCount] = useState(location.state.seatCount);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);
  
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/flight", { state: { departure, destination, seatCount, max } });
  };

  const { data, loading, refetch } = useFetch(`http://localhost:8000/api/flights?arrivalCity=${destination}&departureCity=${departure}`);
  const {  error, reFetch } = useFetch(
    `http://localhost:8000/api/flight?arrivalCity=${destination}&min=${min || 0 }&max=${max}`
  );
  const handleClick = () => {
    reFetch();
  };
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Departure</label>
              <input placeholder={departure} type="text" />
            </div>
            <div className="lsItem">
              <label>Arrival</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="lsItem">
              <label>Airline</label>
              <input placeholder="airline" type="text" />
            </div>
            <div className="lsItem">
              <label>Cabin Class</label>
              <input placeholder="cabin class" type="text" />
            </div>
            <div className="lsItem">
              <label>Departure Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} `}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="lsItem">
            
           
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price
                  </span>
                  <input type="number"
                   className="lsOptionInput"
                  placeholder=""
                  onChange={(e) => setMax(e.target.value)} />
                </div>


                <div className="lsOptionItem">
                  <span className="lsOptionText">Seats</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={seatCount}
                    onChange={(e) => setseatCount(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <button onClick={handleClick}>Search</button>
          </div>
          <div className="listResult">
            {loading ? "loading" : <>
              {data.map(item => (
                <SearchItem item={item} key={item.id} />
              ))}
            </>}

          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
