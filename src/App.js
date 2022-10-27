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
import Card from "./components/Card";

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

function App() {
  const title = "Hey! lets get goin xD....";
  return (
    <div className="container">
      <h1>{title}</h1>
      <br />
      <div className="row">
        {data.map((val, i) => {
          return (
            <div className="col-12 col-sm-6 col-md-4 p-3">
              <Card values={val} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
