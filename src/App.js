// // import logo from "./logo.svg";
// import "./App.css";
// import React from "react";

// function App() {
//   const [data, setdata] = React.useState(
//     localStorage.getItem("items")
//       ? JSON.parse(localStorage.getItem("items"))
//       : []
//   );
//   const [txt, setText] = React.useState("");

//   const handleSubmit = () => {
//     if (txt !== "") {
//       var d = data.concat(txt);
//       setdata(d);
//       setText("");
//       // console.log(d);
//       localStorage.setItem("items", JSON.stringify(d));
//     }
//   };
//   // console.log("data ", data);
//   return (
//     <div className="App">
//       <input value={txt} onChange={(e) => setText(e.target.value)} />
//       <button disabled={!txt.length} onClick={handleSubmit}>
//         Submit
//       </button>
//       {data.map((i) => (
//         <p>{i}</p>
//       ))}
//     </div>
//   );
// }

// export default App;
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Error404 from "./routes/Error404";
import UserDetails from "./routes/UserDetails";
import Signup from "./routes/Signup";
import Rough from "./routes/Rough";
import Header from "./components/Header";

function App() {
  const userData = [
    {
      name: "Suyash Pratap Singh",
      age: 21,
      designation: "Full Stack Dev",
      url: "https://cdn5.vectorstock.com/i/1000x1000/51/99/icon-of-user-avatar-for-web-site-or-mobile-app-vector-3125199.jpg",
      socialMedia: {
        fb: "https://www.google.co.in/",
        google: "https://www.google.co.in/",
        ig: "https://www.google.co.in/",
        ld: "https://www.google.co.in/",
      },
      _id: "1",
    },
    {
      name: "Saksham Singh",
      age: 21,
      designation: "Full Stack Dev",
      url: "https://cdn5.vectorstock.com/i/1000x1000/51/99/icon-of-user-avatar-for-web-site-or-mobile-app-vector-3125199.jpg",
      socialMedia: {
        fb: "https://www.google.co.in/",
        google: "https://www.google.co.in/",
        ig: "https://www.google.co.in/",
        ld: "https://www.google.co.in/",
      },
      _id: "2",
    },
    {
      name: "Ekansh Jain",
      age: 21,
      designation: "Full Stack Dev",
      socialMedia: {
        fb: "https://www.google.co.in/",
        google: "https://www.google.co.in/",
        ig: "https://www.google.co.in/",
        ld: "https://www.google.co.in/",
      },
      _id: "3",
    },
  ];
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home userData={userData} />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error404 />} />
        <Route
          path="/userDetails/:id"
          element={<UserDetails entireUserDatabase={userData} />}
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/r" element={<Rough />} />
        {/* <Route path="/" element={<h1>Page</h1>}>
          <Route index element={<Home />} />
          <Route path="about" element={<h1>Aboout</h1>} />
          <Route path="*" element={<NoPage />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
