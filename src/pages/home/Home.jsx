import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

const Home = () => {
  const APP_ID = "08b57ada";
  const APP_KEY = "7b4e1fdc3a5b6e96ec44799ee82ce85c";
  const [query, setQuery] = useState("egg");
  const [selectedMeal, setSelectedMeal] = useState("dinner");

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${selectedMeal}`;
  const getData = async () => {
    const { data } = await axios(url);
    console.log(data);
  };
  useEffect(() => {
    getData();
  }, []);

  return <div>Home</div>;
};

export default Home;
