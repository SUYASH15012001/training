import React from "react";
import UserCard from "../components/UserCard";

const userData = [
  {
    name: "Suyash Pratap Singh",
    age: 21,
    designation: "Full Stack Dev",
    url: "https://cdn5.vectorstock.com/i/1000x1000/51/99/icon-of-user-avatar-for-web-site-or-mobile-app-vector-3125199.jpg",
    _id: 1,
  },
  {
    name: "Saksham Singh",
    age: 21,
    designation: "Full Stack Dev",
    url: "https://cdn5.vectorstock.com/i/1000x1000/51/99/icon-of-user-avatar-for-web-site-or-mobile-app-vector-3125199.jpg",
    _id: 2,
  },
  {
    name: "Ekansh Jain",
    age: 21,
    designation: "Full Stack Dev",
    _id: 3,
  },
];
function About() {
  console.log(window.location);

  return (
    <div className="container">
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

export default About;
