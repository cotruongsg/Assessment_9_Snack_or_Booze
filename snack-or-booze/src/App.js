import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route} from "react-router-dom";
import FoodMenu from "./FoodMenu";
import Items from "./FoodItem";

import AddItemForm from "./AddItemForm";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    async function getSnacks() {
      try{
        let snacks = await SnackOrBoozeApi.getSnacks();
        setSnacks(snacks);
        setIsLoading(false);
      }catch(e){
        console.error(e);
      }    

    }
    getSnacks();
  }, snacks);

  useEffect(() => {
    async function getDrinks() {
      let drinks = await SnackOrBoozeApi.getDrinks();
      setDrinks(drinks);
      setIsLoading(false);
    }
    getDrinks()
  }, drinks);

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  const addFoods = (newFoodsObj) => {
    console.log(newFoodsObj);
    let food_type = newFoodsObj.form.foodType;
    delete newFoodsObj.form.foodType;
    let new_food = [{ ...newFoodsObj.form, id: newFoodsObj.form.name }];
    if (food_type === "snack") {
      setSnacks((prevSnacks) => [...prevSnacks, ...new_food]);
    }
    if (food_type === "drink") {
      setDrinks((prevDrinks) => [...prevDrinks, ...new_food]);
    }
  };

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Routes>
            <Route exact path="/" element={<Home snacks={snacks} drinks={drinks} />}></Route>
            <Route exact path="/snacks" element={<FoodMenu name={"snacks"} foods ={snacks} title="Snacks" />}></Route>
            <Route path="/snacks/:id"
              element={<Items items={snacks} cantFind="/snacks" />}
            ></Route>
            <Route
              exact
              path="/drinks"
              element={
                <FoodMenu name={"drinks"} foods={drinks} title="Drinks" />
              }
            ></Route>
            <Route
              exact
              path="/drinks/:id"
              element={<Items items={drinks} cantFind="/drinks" />}
            ></Route>
            <Route
              exact path="/addFood/snacks"
              element={<AddItemForm addFoods={addFoods} category={"snacks"} />}
            ></Route>
            <Route
              exact path="/addFood/drinks"
              element={<AddItemForm addFoods={addFoods} category={"drinks"} />}
            ></Route>

            <Route>
              <Route
                path="*"
                element={<p>Hmmm. I can't seem to find what you want.</p>}
              ></Route>
            </Route>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
