import axios from "axios";
import React from "react";
import { useState } from "react";
import Header from "../../components/header/Header";
import Cards from "../../components/cards/Cards";
import { HomeImg, ImgDiv } from "./Home.style";
import homeSvg from "../../assets/home.svg";

const Home = () => {
  const APP_ID = "08b57ada";
  const APP_KEY = "7b4e1fdc3a5b6e96ec44799ee82ce85c";
  const [query, setQuery] = useState("egg");
  const [selectedMeal, setSelectedMeal] = useState("dinner");
  const [recipes, setRecipes] = useState("");
  const mealType = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${selectedMeal}`;
  const getData = async () => {
    if (query) {
      try {
        const { data } = await axios(url);
        setRecipes(data.hits);
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Fill the Form");
    }
  };
  console.log(recipes);
  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <div>
      <Header
        setQuery={setQuery}
        setSelectedMeal={setSelectedMeal}
        mealType={mealType}
        getdata={getData}
      />
      {!recipes && (
        <ImgDiv>
          <HomeImg src={homeSvg} />
        </ImgDiv>
      )}

      <Cards />
    </div>
  );
};

export default Home;
