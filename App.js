import React from "react";
import ReactDOM from "react-dom/client";
import data from "./ResData.json";
/**
 * Header
 *     - Logo
 *     - Nav-Items / Links
 * Body
 *     - Search
 *     - RestaurantContainer
 *            - RestaurantCard
 *                 - Img
 *                 - Name of restaurant , star Rating , Cuisine ,Delievery Time
 *
 * Footer
 *      - Copyright
 *      - Links
 *      - Adress
 *      - Contact
 */
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://img.freepik.com/free-vector/burger-cheese-with-fire-cartoon-vector-icon-illustration-food-object-icon-concept-isolated-premium_138676-5539.jpg?w=826&t=st=1695148160~exp=1695148760~hmac=15fbe29d7fb2f694e05ac95449f779d2228e6c1f46233dfd51c55f3bf5db4bdc"
          alt="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
//! Dynamic Data with json
const RestaurantCard = (props) => {
  const { item } = props;
  const { name, avgRating, cuisines, areaName, cloudinaryImageId } = item;
  const imgSrc = `https://glovo.dhmedia.io/image/stores-glovo/stores/${cloudinaryImageId}`;
  return (
    <div className="res-card">
      <img src={imgSrc} alt="res-logo" className="res-logo" />
      <h3 className="res-name">{name}</h3>

      <h4 className="res-rating">
        <img
          className="res-star"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Star_icon_stylized.svg/1077px-Star_icon_stylized.svg.png"
          alt="star"
        />
        {avgRating}
      </h4>
      <div className="res-items">{cuisines.join(", ")}</div>
      <div className="res-location">{areaName}</div>
    </div>
  );
};
const Body = () => {
  const resData = data?.resData;
  return (
    <div className="body">
      <div className="res-container">
        {
          resData.map((item) => (
          <RestaurantCard 
          item={item.info}
          key={item.info.id}
          />  
          ) )
        }
      </div>
    </div>
  );
};
const Footer = () => {
  return <div className="footer"></div>;
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

// Destructuring
//  array destructuring
// const numbers = [1, 2, 3];
// const [first, second, third] = numbers;
// console.log(first, third); // => 1 , 3
//Object Destructuring
// const person = {
//   name: "mariem",
//   age: 22,
// };
// const {name} = person;
// console.log(name);
// const {name : userName, age : userAge} = person ;
// console.log(userName);

// const user = {
//   name : "mariem",
//   age : 22,
//   isDeveloper : true
// }
// const jsonData = JSON.stringify(user);
// const jsonData = {
//   "name" : "mariem",
//   "age" : 22,
//   "isDeveloper" : true
// }
// const userObject = JSON.parse(jsonData)

// const numbers = [1,2,3,4];
// console.log(numbers.join("  |  "));

// const resData = data?.resData
// const user = {
//   name : "mariem",
//   details : null
// }
// user.details?.email
