import React, { useState } from "react";
import { useNavigate} from "react-router-dom";

function AddItemForm ({addFoods, category}){
    const [form, setForm] = useState({
      foodType: category,
      name: "",
      description: "",
      recipe: "",
      serve: "",
    });
    const navigate = useNavigate();
    function handleSubmit (e){
        e.preventDefault();
        addFoods({form});
        navigate("/");
    }
    function handleChange (e){
        e.persist();
        setForm(f => ({...f, [e.target.name]: e.target.value }));
    }
    const { foodType, name, description, recipe, serve } = form;
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="foodType">Food Type</label>
            <select name="foodType" value={foodType} onChange={handleChange}>
              <option value={category}>{category}</option>
            </select>
          </div>
          <div>
            <label htmlFor="name"> Name</label>
            <input
              name="name"
              id="name"
              placeholder="Enter Food Name"
              onChange={handleChange}
              value={name}
            />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <input
              name="description"
              id="description"
              onChange={handleChange}
              value={description}
            />
          </div>

          <div>
            <label htmlFor="recipe">Recipe</label>
            <input
              name="recipe"
              id="recipe"
              onChange={handleChange}
              value={recipe}
            />
          </div>
          <div>
            <label htmlFor="serve">Serve</label>
            <input
              name="serve"
              id="serve"
              onChange={handleChange}
              value={serve}
            />
          </div>
          <button>Add this food</button>
        </form>
      </div>
    );
}
export default AddItemForm;