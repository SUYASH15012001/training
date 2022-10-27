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

function App() {
  return (
    <p>
      <h1>Hello world</h1>
    </p>
  );
}

export default App;
