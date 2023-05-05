import "./propertyList.css";
import useFetch from "../../hooks/useFetch";

const PropertyList = () => {

  const {data,loading,error} = useFetch("http://localhost:8000/api/flights/countByAirline?airlines=srilankan,qatar,emirates");

  return (
    <div className="pList">
      {loading ? ("Loading please wait" 
       ):(
       <>
      <div className="pListItem">
        <img
          src="https://images.ctfassets.net/m9ph4qvas97u/7gw7U3GQO4ds2qlC4KqZtM/2c726327dc649b970e3db17f3995bcf6/oneworld-alliance-srilankan-airlines-hero.png?fm=webp&q=80"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Sri Lankan Airlines</h1>
          <h2>{data[0]} flights</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://images.pexels.com/photos/12355318/pexels-photo-12355318.jpeg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Qatar Airways</h1>
          <h2>{data[0]} flights</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://images.pexels.com/photos/6708045/pexels-photo-6708045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Emirates Airways</h1>
          <h2>{data[0]} flights</h2>
        </div>
      </div>
      </>
      )}
    </div>
  );
};

export default PropertyList;
