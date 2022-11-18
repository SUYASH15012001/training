import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import UserCard from "../components/UserCard";
import { Grid } from "@mui/material";
import TestComp from "../components/TestComp";

// const userData = [
//   {
//     name: "Suyash Pratap Singh",
//     age: 21,
//     designation: "Full Stack Dev",
//     url: "https://cdn5.vectorstock.com/i/1000x1000/51/99/icon-of-user-avatar-for-web-site-or-mobile-app-vector-3125199.jpg",
//   },
//   {
//     name: "Saksham Singh",
//     age: 21,
//     designation: "Full Stack Dev",
//     url: "https://cdn5.vectorstock.com/i/1000x1000/51/99/icon-of-user-avatar-for-web-site-or-mobile-app-vector-3125199.jpg",
//   },
//   {
//     name: "Ekansh Jain",
//     age: 21,
//     designation: "Full Stack Dev",
//   },
// ];
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
  console.log(props);
  // console.log(window.location);
  return (
    <>
      <TestComp />
      <Link to="/about">Go to about</Link>
      <h1>{dummy.title}</h1>
      <br />
      <Grid container>
        {data.map((val) => {
          return (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              // spacing={3}
              key={val._id.toString()}>
              <ProductCard values={val} />
            </Grid>
          );
        })}
      </Grid>
      <Grid container>
        {props.userData.map((val, ind) => {
          return (
            <Grid item xs={12} sm={6}>
              <UserCard {...val} ind={ind} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}

export default Home;
