import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import UserCard from "../components/UserCard";

const userData = [
  {
    name: "Suyash Pratap Singh",
    age: 21,
    designation: "Full Stack Dev",
    url: "https://cdn5.vectorstock.com/i/1000x1000/51/99/icon-of-user-avatar-for-web-site-or-mobile-app-vector-3125199.jpg",
  },
  {
    name: "Saksham Singh",
    age: 21,
    designation: "Full Stack Dev",
    url: "https://cdn5.vectorstock.com/i/1000x1000/51/99/icon-of-user-avatar-for-web-site-or-mobile-app-vector-3125199.jpg",
  },
  {
    name: "Ekansh Jain",
    age: 21,
    designation: "Full Stack Dev",
  },
];
const data = [
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
    prodName: "Random",
    _id: 1,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis incidunt molestias a nostrum assumenda qui quis dolorem quasi sint praesentium porro quo expedita sunt vero neque, quod veniam iste laboriosam?",
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
    prodName: "Bawaal",
    _id: 2,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis incidunt molestias a nostrum assumenda qui quis dolorem quasi sint praesentium porro quo expedita sunt vero neque, quod veniam iste laboriosam?",
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
    prodName: "Happy man",
    _id: 3,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis incidunt molestias a nostrum assumenda qui quis dolorem quasi sint praesentium porro quo expedita sunt vero neque, quod veniam iste laboriosam?",
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
    prodName: "Title 4",
    _id: 4,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis incidunt molestias a nostrum assumenda qui quis dolorem quasi sint praesentium porro quo expedita sunt vero neque, quod veniam iste laboriosam?",
  },
];

function Home(props) {
  const dummy = {
    title: "Dummy title",
  };
  //  useParams();
  // console.log(useParams());
  console.log(window.location);
  return (
    <div className="container">
      <Link to="/about">Go to about</Link>
      <h1>{dummy.title}</h1>
      <br />
      <div className="row">
        {data.map((val) => {
          return (
            <div
              key={val._id.toString()}
              className="col-12 col-sm-6 col-md-4 p-3">
              <Card values={val} />
            </div>
          );
        })}
        {/* <UserCard {...userData} /> */}
      </div>
      <div className="row">
        {userData.map((val) => {
          return (
            <div className="col-12 col-sm-6 p-3">
              <UserCard {...val} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
