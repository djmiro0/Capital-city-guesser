// ! This is how we import styles
import "./App.css";
//importing uuid from the package react-uuid
import uuid from "react-uuid";
// ! This is how we import images
// Images
import myPic from "./assets/pic123.jpg";
import { Fragment } from "react";

function App() {
  const myVar = "hello world";

  const LiList = [
    <li key="1"> test1 </li>,
    <li key="2">test2</li>,
    <li key="3"> test3 </li>,
  ];

  const user = {
    username: "Larry",
    age: 33,
    email: "larry@gmail.com",
  };

  const namesArr = ["Ahmad", "Amged", "Bruno"];

  const users = [
    {
      username: "Celine",
      age: 33,
      email: "larry@gmail.com",
    },
    {
      username: "Djordje",
      age: 33,
      email: "larry@gmail.com",
    },
    {
      username: "Doreen",
      age: 33,
      email: "larry@gmail.com",
    },
  ];

  console.log(uuid());
  // const newArr = namesArr.splice(1,1);

  // console.log(namesArr);

  // console.log(newArr);

  const isItMonday = false;

  const str = `my name is ${namesArr[0]}`;

  const styleObj = { backgroundColor: "#000", color: "#fff" };

  return (
     // ! if we want to return two sibling elements, we need to wrap them inside React.Fragment
    // ! Alternative syntax to <React.Fragment> is just <></>
    <Fragment>
      <div className="App">
        {/* If we want to reference a javascript value, we need to wrap it inside curly braces */}
        <div>{myVar}</div>
        <div>{str}</div>
        {/* Rendering array of list item */}
        <ul className="lightBg">{LiList}</ul>
        {/* Accessing objects Properties */}
        hello {user.username}
        {namesArr.map((item, i) => (
          <div key={i}> {item} </div>
        ))}
        <ul>
          {users.map((el) => (
            <li key={uuid()}> {el.username} </li>
          ))}
        </ul>
        {/* Using ternary operator to render conditionally */}
        {isItMonday ? <p> Yes it is Monday </p> : <p> No it is not Monday </p>}
        {/* to use an image from our assets folder, we need to first import that image at the top then we can use it*/}
        <img src={myPic} alt="awesome-pic" />
      </div>

      <div style={styleObj}>another div</div>
    </Fragment>
  );
}

export default App;
