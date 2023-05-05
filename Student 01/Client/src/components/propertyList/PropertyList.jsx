import "./propertyList.css";
import useFetch from "../../hooks/useFetch";

const PropertyList = () => {

  const {data,loading,error} = useFetch("http://localhost:8000/api/flights/countByAirline");
const images= [
  "https://images.ctfassets.net/m9ph4qvas97u/7gw7U3GQO4ds2qlC4KqZtM/2c726327dc649b970e3db17f3995bcf6/oneworld-alliance-srilankan-airlines-hero.png?fm=webp&q=80",
  "https://images.pexels.com/photos/12355318/pexels-photo-12355318.jpeg",
  "https://images.pexels.com/photos/6708045/pexels-photo-6708045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
]
  return (
    <div className="pList">
      {loading ? ("Loading please wait" 
       ):(
       <>
      {data && 
      images.map((img,i) => (
      <div className="pListItem" key={i}>
        <img
          src={img}
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>{data[i]?.airline} Airlines</h1>
          <h2>{data[i]?.count} flights</h2>
        </div>
      </div>
      
        ))}
      
      </>
      )}
    </div>
  );
};

export default PropertyList;
