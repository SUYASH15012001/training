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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/userDetails/:id" element={<UserDetails />} />
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
