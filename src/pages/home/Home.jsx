import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";

const Home = () => {
  const APP_ID = "08b57ada";
  const APP_KEY = "7b4e1fdc3a5b6e96ec44799ee82ce85c";
  const [query, setQuery] = useState("egg");
  const [selectedMeal, setSelectedMeal] = useState("breakfast");
  const [recipes, setRecipes] = useState([]);
  const mealType = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${selectedMeal}`;

  const getData = async () => {
    const { data } = await axios(url);
    setRecipes(data.hits);
  };
  console.log(setRecipes);
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Header
        setQuery={setQuery}
        setSelectedMeal={setSelectedMeal}
        mealType={mealType}
        getData={getData}
      />
    </div>
  );
};

export default Home;
