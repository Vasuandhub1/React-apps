import React, { useState } from "react";

function Weather() {
  const [city, setCity] = useState("indore");
  const [details, setDetais] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handelcity = (event) => {
    setCity(event.target.value);
  };

  const handelbutton = () => {
    setIsLoading(true);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1394c995dc9927c7ff45a35362169250`
    )
      .then((response) => response.json())
      .then((json) => {
        setDetais(json);
        setIsLoading(false);
      });
  };

  // var temperature=(details.main)

  return (
    <>
      {isLoading ? (
        <>Loading....</>
      ) : (
        <div>
          <div>
            <h1>Weather app</h1>
            <input type="text" onChange={handelcity} />
          </div>
          {/* <h2>{tempr.main.temp}</h2> */}
          <button onClick={handelbutton}>find</button>
          <br/>
          <>
          {JSON.stringify(details)}
            </>
        </div>
      )}
    </>
  );
}
export default Weather;
