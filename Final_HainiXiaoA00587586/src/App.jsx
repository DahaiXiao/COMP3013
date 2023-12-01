import React, { useState } from "react";
import foods from "./components/foods.jsx"


const SearchFood= () => {
  const [searchText, setSearchText] = useState("");
  
  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };
// Split on highlight term and include term 
  const getFoodName = (text, highlight) =>{
    const finds = text.split(new RegExp(`(${highlight})`, "gi"));
    return (
    
      <p>
        {finds.map((find, i) =>
          find.toLowerCase() === highlight.toLowerCase() ? (
            <span key={i} className="highlighted-text">
              {find}
            </span>
          ) : (
           find
          )
        )}
      </p>
    );
  };
  // food filter
  const filteredFoods = foods.filter((food) =>
    food.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div >

      <h2>COMP3013 Final Exam HAINI XIAO A00587586</h2>

      <input  
        type="text"
        placeholder="input food name..."
        value={searchText}
        onChange={handleSearch}
      />
     <p>_______________________________________</p>
      <ul>
        {filteredFoods.map((food) => (
          <li key={food.id}>
            <h2>{food.name}</h2>
            {getFoodName(food.description, searchText)}
          </li>
        ))}
      </ul>

    </div>

  );
};

export default SearchFood;
