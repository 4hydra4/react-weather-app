import React, { useState } from "react";

function CitySelector({ fetchAPI }) {
  const [city, setCity] = useState("");

  function searchCity(e) {
    e.preventDefault();
    fetchAPI(city);
    setCity("");
  }
  // When user hits the 'enter' key, display the result
  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      fetchAPI(city);
    }
  };

  const handleChange = (e) => {
    setCity(e.target.value);
    //   console.log(e.target.value);
  };

  return (
    <>
      <form>
        <div className="form-group">
          <input
            className="form-control form-input"
            placeholder="Enter your City"
            onChange={handleChange}
            onKeyDown={handleKeyPress}
            id="search-city"
            value={city}
          />
          <button
            onClick={searchCity}
            className="btn btn-primary"
            id="search-city"
            type="submit"
          >
            Check Weather
          </button>
        </div>
      </form>
    </>
  );
}

export default CitySelector;
