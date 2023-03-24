import "./PropertyList.css";
import useFetch from "../../hooks/useFetch";
export const PropertyList = () => {
  const { data, loading, error } = useFetch("/hotels/countByType");

  const images = [
    "https://images.unsplash.com/photo-1574873215043-44119461cb3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60",

    "https://images.unsplash.com/photo-1574873215043-44119461cb3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
    "https://images.unsplash.com/photo-1574873215043-44119461cb3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
    "https://images.unsplash.com/photo-1574873215043-44119461cb3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
    "https://images.unsplash.com/photo-1574873215043-44119461cb3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
  ];
  return (
    <div className="pList">
      {loading ? (
        "Loading"
      ) : (
        <>
          {data &&
            images.map((img, index) => (
              <div className="pListItem" key={index}>
                <img src={img} alt="" className="pListImg" />
                <div className="pListTitle">
                  <h1>{data[index]?.type}</h1>
                  <h2>
                    {data[index]?.count} {data[index]?.type}
                  </h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};
