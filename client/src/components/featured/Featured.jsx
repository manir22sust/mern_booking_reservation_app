import useFetch from "../../hooks/useFetch";
import "./Featured.css";

export const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=berlin,london,madrid"
  );
  // console.log(data);
  return (
    <div className="featured">
      {loading ? (
        "Loading"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://images.unsplash.com/photo-1678711267886-cc97239b68e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNTl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
              alt=""
              className="featuredImg"
            />

            <div className="featuredTitle">
              <h1> Berlin, Germany</h1>
              <h1>{data[0]} properties </h1>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://images.unsplash.com/photo-1678729465761-008074bef96c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60"
              alt=""
              className="featuredImg"
            />

            <div className="featuredTitle">
              <h1> London, England</h1>
              <h1>{data[1]} properties </h1>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://images.unsplash.com/photo-1678768316189-605727fae515?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
              alt=""
              className="featuredImg"
            />

            <div className="featuredTitle">
              <h1> Madrid, Spain</h1>
              <h1>{data[2]} properties </h1>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
