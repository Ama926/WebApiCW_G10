import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=Kandy,Colombo,london"
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://th.bing.com/th/id/R.6c40aa0f90a10a2c77778642fb32f3cb?rik=WLyIo95YEfvDEQ&riu=http%3a%2f%2fsynergyy.com%2fwp-content%2fuploads%2f2011%2f11%2fThe-Kandy-Hotels-Company-PLC.jpg&ehk=CzxjQa6C7txBjnxpQPX8FhlrkI92cIVA%2bMZvu48nQ2E%3d&risl=&pid=ImgRaw&r=0"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Kandy</h1>
              {/* <h2>{data[0]} properties</h2> */}
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/18/a9/06/hotel-exterior.jpg?w=900&h=-1&s=1"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Galle</h1>
              {/* <h2>{data[1]} properties</h2> */}
            </div>
          </div>
          <div className="featuredItem">
            <img
             // src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
              src = "https://pbs.twimg.com/media/DyywxkpWoAAOugO.jpg"
             alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Colombo</h1>
              {/* <h2>{data[2]} properties</h2> */}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;