import React from "react";

const Dashboard = () => {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <h3>Logo</h3>
        </div>
        <div className="navLeft">
          <ol>
            <li>
              <select name="Shop">
                <option value="Meal Starter">Meal Starter</option>
                <option value="Combo Pack">Combo Pack</option>
                <option value="Other Goodies">Other Goodies</option>
              </select>
            </li>
            <li>Meet Us</li>
            <li>Recipes</li>
            <li>Contact</li>
          </ol>
        </div>
        <div className="navRight">
            <li>search</li>
            <li>cart</li>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
