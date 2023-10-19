import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const ListComponent = ({ setSelect }) => {
  const [ApiData, setData] = useState();
  const [cityData, setCityData] = useState("");
  const [stateData, setStateData] = useState("");
  const fetchApi = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchApi("https://api.minebrat.com/api/v1/states");
  }, []);
  const cityHandler = (e) => {
    setCityData(e.target.value);
  };
  let navigate = useNavigate();
  const handleSubmit = () => {
    if (!cityData || !setData) {
      alert("please select your city");
    } else {
      setSelect(true);
      navigate("/result", { state: { cityData, stateData } });
    }
  };
  return (
    <>
      {!ApiData && <h1>Loading....</h1>}
      {ApiData && (
        <ul>
          {ApiData.map(({ stateId, stateName, city }) => {
            return (
              <li key={stateId}>
                <h1>{stateId}</h1>
                <h1>{stateName}</h1>
                <select
                  onChange={(e) => {
                    cityHandler(e);
                    setStateData(stateName);
                  }}
                >
                  {city &&
                    city.map(({ cityId, cityName }) => {
                      return <option key={cityId}>{cityName}</option>;
                    })}
                </select>
                <button onClick={handleSubmit}>submit</button>
                <hr />
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
export default ListComponent;
